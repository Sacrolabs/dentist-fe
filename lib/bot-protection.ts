/**
 * Bot Protection Utilities
 * Multi-layered approach to prevent automated spam submissions
 */

// In-memory rate limiting (upgrade to Redis for production)
const submissionTracker = new Map<string, number[]>()

// Minimum time (ms) required to fill out form (humans can't do it faster)
const MIN_FORM_FILL_TIME = 3000 // 3 seconds

// Maximum submissions per IP per time window
const MAX_SUBMISSIONS_PER_HOUR = 3
const RATE_LIMIT_WINDOW = 60 * 60 * 1000 // 1 hour in milliseconds

/**
 * Generate a unique token for form submission
 */
export function generateFormToken(): string {
  return `${Date.now()}-${Math.random().toString(36).substring(2, 15)}`
}

/**
 * Validate that form was filled by a human (timing check)
 */
export function validateFormTiming(startTime: number): { isValid: boolean; error?: string } {
  const timeTaken = Date.now() - startTime

  if (timeTaken < MIN_FORM_FILL_TIME) {
    return {
      isValid: false,
      error: 'Form submitted too quickly. Please try again.'
    }
  }

  // Also check if time is suspiciously long (possible bot with delay)
  const maxTime = 30 * 60 * 1000 // 30 minutes
  if (timeTaken > maxTime) {
    return {
      isValid: false,
      error: 'Form session expired. Please refresh and try again.'
    }
  }

  return { isValid: true }
}

/**
 * Check if honeypot field was filled (indicates bot)
 */
export function checkHoneypot(honeypotValue: string | undefined): { isBot: boolean } {
  // If honeypot field has any value, it's a bot
  return {
    isBot: !!honeypotValue && honeypotValue.trim() !== ''
  }
}

/**
 * Rate limiting: Check if IP has exceeded submission limit
 */
export function checkRateLimit(ipAddress: string): {
  allowed: boolean
  remainingAttempts: number
  error?: string
} {
  const now = Date.now()
  const submissions = submissionTracker.get(ipAddress) || []

  // Remove submissions outside the time window
  const recentSubmissions = submissions.filter(
    timestamp => now - timestamp < RATE_LIMIT_WINDOW
  )

  if (recentSubmissions.length >= MAX_SUBMISSIONS_PER_HOUR) {
    const oldestSubmission = Math.min(...recentSubmissions)
    const timeUntilReset = Math.ceil((RATE_LIMIT_WINDOW - (now - oldestSubmission)) / 60000)

    return {
      allowed: false,
      remainingAttempts: 0,
      error: `Too many submissions. Please try again in ${timeUntilReset} minutes.`
    }
  }

  // Add current submission and update tracker
  recentSubmissions.push(now)
  submissionTracker.set(ipAddress, recentSubmissions)

  // Clean up old entries periodically (every 100 submissions)
  if (submissionTracker.size > 100) {
    cleanupOldEntries()
  }

  return {
    allowed: true,
    remainingAttempts: MAX_SUBMISSIONS_PER_HOUR - recentSubmissions.length
  }
}

/**
 * Clean up old entries from rate limiter
 */
function cleanupOldEntries(): void {
  const now = Date.now()
  const entriesToDelete: string[] = []

  submissionTracker.forEach((timestamps, ip) => {
    const recentTimestamps = timestamps.filter(
      timestamp => now - timestamp < RATE_LIMIT_WINDOW
    )

    if (recentTimestamps.length === 0) {
      entriesToDelete.push(ip)
    } else {
      submissionTracker.set(ip, recentTimestamps)
    }
  })

  entriesToDelete.forEach(ip => submissionTracker.delete(ip))
}

/**
 * Get client IP address from request headers
 */
export function getClientIP(request: Request): string {
  // Check common headers set by proxies/load balancers
  const forwardedFor = request.headers.get('x-forwarded-for')
  const realIP = request.headers.get('x-real-ip')
  const cfConnectingIP = request.headers.get('cf-connecting-ip')

  if (cfConnectingIP) return cfConnectingIP
  if (realIP) return realIP
  if (forwardedFor) return forwardedFor.split(',')[0].trim()

  return 'unknown'
}

/**
 * Validate entire submission for bot indicators
 */
export interface BotCheckResult {
  isBot: boolean
  error?: string
  details?: string
}

export function validateSubmission(
  honeypot: string | undefined,
  startTime: number,
  ipAddress: string
): BotCheckResult {
  // Check 1: Honeypot field
  const honeypotCheck = checkHoneypot(honeypot)
  if (honeypotCheck.isBot) {
    console.warn(`🤖 Bot detected (honeypot): IP ${ipAddress}`)
    return {
      isBot: true,
      error: 'Submission failed. Please try again.',
      details: 'Honeypot triggered'
    }
  }

  // Check 2: Form timing
  const timingCheck = validateFormTiming(startTime)
  if (!timingCheck.isValid) {
    console.warn(`⏱️ Suspicious timing: IP ${ipAddress}`)
    return {
      isBot: true,
      error: timingCheck.error,
      details: 'Form filled too quickly'
    }
  }

  // Check 3: Rate limiting
  const rateLimitCheck = checkRateLimit(ipAddress)
  if (!rateLimitCheck.allowed) {
    console.warn(`🚫 Rate limit exceeded: IP ${ipAddress}`)
    return {
      isBot: true,
      error: rateLimitCheck.error,
      details: 'Rate limit exceeded'
    }
  }

  return { isBot: false }
}

/**
 * Generate honeypot field props for forms
 */
export const honeypotFieldProps = {
  name: 'website', // Common bot-targeted field name
  id: 'website-field',
  tabIndex: -1,
  autoComplete: 'off',
  'aria-hidden': 'true',
  style: {
    position: 'absolute' as const,
    left: '-9999px',
    width: '1px',
    height: '1px',
    opacity: 0,
    pointerEvents: 'none' as const,
  }
}
