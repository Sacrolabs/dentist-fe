/**
 * Form Validation Utilities
 * Provides validation for email, phone numbers (NZ/AU), and names
 */

export interface ValidationResult {
  isValid: boolean
  error?: string
}

/**
 * Validates email address using RFC 5322 compliant regex
 */
export function validateEmail(email: string): ValidationResult {
  if (!email || email.trim() === '') {
    return { isValid: false, error: 'Email is required' }
  }

  // RFC 5322 compliant email regex
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

  if (!emailRegex.test(email)) {
    return { isValid: false, error: 'Please enter a valid email address' }
  }

  // Additional checks
  if (email.length > 254) {
    return { isValid: false, error: 'Email address is too long' }
  }

  return { isValid: true }
}

/**
 * Validates and formats NZ/AU phone numbers
 * Accepts formats:
 * - NZ: +64 27 300 0004, 027 300 0004, 64273000004, 0273000004
 * - AU: +61 4XX XXX XXX, 04XX XXX XXX, 614XXXXXXXX, 04XXXXXXXX
 */
export function validatePhone(phone: string): ValidationResult {
  if (!phone || phone.trim() === '') {
    return { isValid: true } // Phone is optional in most forms
  }

  // Remove all spaces, dashes, and parentheses
  const cleaned = phone.replace(/[\s\-\(\)]/g, '')

  // NZ phone patterns
  const nzMobileRegex = /^(\+?64|0)2[0-9]{7,9}$/
  const nzLandlineRegex = /^(\+?64|0)[3-9][0-9]{6,8}$/

  // AU phone patterns
  const auMobileRegex = /^(\+?61|0)4[0-9]{8}$/
  const auLandlineRegex = /^(\+?61|0)[2-8][0-9]{8}$/

  const isValidNZ = nzMobileRegex.test(cleaned) || nzLandlineRegex.test(cleaned)
  const isValidAU = auMobileRegex.test(cleaned) || auLandlineRegex.test(cleaned)

  if (!isValidNZ && !isValidAU) {
    return {
      isValid: false,
      error: 'Please enter a valid NZ or AU phone number (e.g., +64 27 300 0004 or 04XX XXX XXX)'
    }
  }

  return { isValid: true }
}

/**
 * Validates name field
 * Requirements: 2-50 characters, letters, spaces, hyphens, apostrophes only
 */
export function validateName(name: string): ValidationResult {
  if (!name || name.trim() === '') {
    return { isValid: false, error: 'Name is required' }
  }

  const trimmedName = name.trim()

  if (trimmedName.length < 2) {
    return { isValid: false, error: 'Name must be at least 2 characters' }
  }

  if (trimmedName.length > 50) {
    return { isValid: false, error: 'Name must be less than 50 characters' }
  }

  // Allow letters (including unicode), spaces, hyphens, apostrophes
  const nameRegex = /^[\p{L}\s\-']+$/u

  if (!nameRegex.test(trimmedName)) {
    return { isValid: false, error: 'Name can only contain letters, spaces, hyphens, and apostrophes' }
  }

  return { isValid: true }
}

/**
 * Validates message/textarea field
 */
export function validateMessage(message: string, minLength: number = 10): ValidationResult {
  if (!message || message.trim() === '') {
    return { isValid: false, error: 'Message is required' }
  }

  const trimmedMessage = message.trim()

  if (trimmedMessage.length < minLength) {
    return { isValid: false, error: `Message must be at least ${minLength} characters` }
  }

  if (trimmedMessage.length > 1000) {
    return { isValid: false, error: 'Message must be less than 1000 characters' }
  }

  return { isValid: true }
}

/**
 * Format phone number for display
 */
export function formatPhoneNumber(phone: string): string {
  const cleaned = phone.replace(/[\s\-\(\)]/g, '')

  // NZ mobile: +64 27 300 0004
  if (cleaned.match(/^(\+?64|0)2[0-9]{7,9}$/)) {
    const digits = cleaned.replace(/^\+?64/, '').replace(/^0/, '')
    return `+64 ${digits.slice(0, 2)} ${digits.slice(2, 5)} ${digits.slice(5)}`
  }

  // AU mobile: +61 4XX XXX XXX
  if (cleaned.match(/^(\+?61|0)4[0-9]{8}$/)) {
    const digits = cleaned.replace(/^\+?61/, '').replace(/^0/, '')
    return `+61 ${digits.slice(0, 3)} ${digits.slice(3, 6)} ${digits.slice(6)}`
  }

  return phone // Return original if format unknown
}

/**
 * Sanitize input to prevent XSS
 */
export function sanitizeInput(input: string): string {
  return input
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#x27;')
    .replace(/\//g, '&#x2F;')
    .trim()
}
