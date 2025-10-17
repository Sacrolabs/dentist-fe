import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';
import { validateEmail, validatePhone, validateName, validateMessage, sanitizeInput } from '@/lib/validation';
import { validateSubmission, getClientIP } from '@/lib/bot-protection';

export async function POST(request: Request) {
  try {
    const { name, email, phone, service, message, honeypot, startTime } = await request.json();

    // Get client IP for rate limiting
    const clientIP = getClientIP(request);

    // Bot protection checks
    const botCheck = validateSubmission(honeypot, startTime, clientIP);
    if (botCheck.isBot) {
      console.warn(`🤖 Bot detected: ${botCheck.details} - IP: ${clientIP}`);
      return NextResponse.json(
        { message: botCheck.error || 'Submission failed. Please try again.' },
        { status: 429 }
      );
    }

    // Server-side validation
    const nameValidation = validateName(name);
    const emailValidation = validateEmail(email);
    const phoneValidation = phone?.trim() ? validatePhone(phone) : { isValid: true };
    const messageValidation = message?.trim() ? validateMessage(message, 0) : { isValid: true };

    // Collect validation errors
    const errors: string[] = [];
    if (!nameValidation.isValid) errors.push(nameValidation.error || 'Invalid name');
    if (!emailValidation.isValid) errors.push(emailValidation.error || 'Invalid email');
    if (!phoneValidation.isValid) errors.push(phoneValidation.error || 'Invalid phone');
    if (!messageValidation.isValid) errors.push(messageValidation.error || 'Invalid message');

    if (errors.length > 0) {
      return NextResponse.json(
        { message: 'Validation failed', errors },
        { status: 400 }
      );
    }

    // Sanitize inputs to prevent XSS
    const sanitizedName = sanitizeInput(name);
    const sanitizedEmail = sanitizeInput(email);
    const sanitizedPhone = phone ? sanitizeInput(phone) : '';
    const sanitizedService = service ? sanitizeInput(service) : '';
    const sanitizedMessage = message ? sanitizeInput(message) : '';

    // Check if SMTP is configured
    if (!process.env.SMTP_HOST || !process.env.SMTP_USER || !process.env.SMTP_PASS) {
      console.error('SMTP not configured. Please check environment variables.');
      return NextResponse.json(
        { message: 'Email service is not configured. Please contact the administrator.' },
        { status: 500 }
      );
    }

    // Determine email type
    const isBookingRequest = sanitizedMessage?.includes('Appointment request') || sanitizedService;
    const emailSubject = isBookingRequest
      ? `🦷 New Appointment Request - ${sanitizedService || 'General'}`
      : '📧 New Contact Form Submission';

    // Create HTML email template with sanitized data
    const htmlContent = `
<!DOCTYPE html>
<html>
<head>
  <style>
    body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; }
    .container { max-width: 600px; margin: 0 auto; padding: 20px; }
    .header { background: #2D5F6B; color: white; padding: 20px; border-radius: 8px 8px 0 0; }
    .content { background: #f9f9f9; padding: 30px; border: 1px solid #ddd; border-radius: 0 0 8px 8px; }
    .field { margin-bottom: 15px; }
    .label { font-weight: bold; color: #2D5F6B; }
    .value { color: #555; margin-top: 5px; }
    .footer { margin-top: 20px; text-align: center; font-size: 12px; color: #999; }
  </style>
</head>
<body>
  <div class="container">
    <div class="header">
      <h1 style="margin: 0;">${isBookingRequest ? '🦷 New Appointment Request' : '📧 Contact Form Submission'}</h1>
      <p style="margin: 5px 0 0 0; opacity: 0.9;">Northcote Family Dentist</p>
    </div>
    <div class="content">
      <div class="field">
        <div class="label">👤 Name:</div>
        <div class="value">${sanitizedName}</div>
      </div>
      <div class="field">
        <div class="label">📧 Email:</div>
        <div class="value"><a href="mailto:${sanitizedEmail}">${sanitizedEmail}</a></div>
      </div>
      ${sanitizedPhone ? `
      <div class="field">
        <div class="label">📱 Phone:</div>
        <div class="value"><a href="tel:${sanitizedPhone}">${sanitizedPhone}</a></div>
      </div>
      ` : ''}
      ${sanitizedService ? `
      <div class="field">
        <div class="label">🦷 Service Requested:</div>
        <div class="value">${sanitizedService}</div>
      </div>
      ` : ''}
      ${sanitizedMessage ? `
      <div class="field">
        <div class="label">💬 Message:</div>
        <div class="value">${sanitizedMessage.replace(/\n/g, '<br>')}</div>
      </div>
      ` : ''}
      <div class="field" style="margin-top: 30px; padding-top: 20px; border-top: 2px solid #ddd;">
        <div class="label">📅 Received:</div>
        <div class="value">${new Date().toLocaleString('en-NZ', {
          timeZone: 'Pacific/Auckland',
          dateStyle: 'full',
          timeStyle: 'short'
        })}</div>
      </div>
    </div>
    <div class="footer">
      <p>This email was sent from the Northcote Family Dentist website contact form.</p>
      <p>Please respond promptly to provide excellent patient care.</p>
    </div>
  </div>
</body>
</html>`;

    // Create plain text version with sanitized data
    const textContent = `
${isBookingRequest ? 'NEW APPOINTMENT REQUEST' : 'NEW CONTACT FORM SUBMISSION'}
Northcote Family Dentist
────────────────────────────────

👤 Name: ${sanitizedName}
📧 Email: ${sanitizedEmail}
${sanitizedPhone ? `📱 Phone: ${sanitizedPhone}` : ''}
${sanitizedService ? `🦷 Service: ${sanitizedService}` : ''}
${sanitizedMessage ? `💬 Message:\n${sanitizedMessage}` : ''}

📅 Received: ${new Date().toLocaleString('en-NZ', {
  timeZone: 'Pacific/Auckland',
  dateStyle: 'full',
  timeStyle: 'short'
})}
────────────────────────────────
This email was sent from the website contact form.
`;

    // Compose email options
    const mailOptions = {
      from: `"Northcote Family Dentist Website" <${process.env.SMTP_FROM_EMAIL}>`,
      to: process.env.CONTACT_RECIPIENT_EMAIL,
      replyTo: sanitizedEmail,
      subject: emailSubject,
      text: textContent,
      html: htmlContent,
    };

    // Create transporter
    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST,
      port: Number(process.env.SMTP_PORT) || 587,
      secure: process.env.SMTP_SECURE === 'true',
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS,
      },
    });

    // Send email
    await transporter.sendMail(mailOptions);

    console.log(`✅ Email sent successfully to ${process.env.CONTACT_RECIPIENT_EMAIL}`);
    return NextResponse.json({ message: 'Email sent successfully' });
  } catch (error) {
    console.error('❌ Email sending error:', error);
    return NextResponse.json(
      {
        message: 'Failed to send email. Please try again or call us directly.',
        error: error instanceof Error ? error.message : 'Unknown error'
      },
      { status: 500 }
    );
  }
}
