import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export async function POST(request: Request) {
  try {
    const { name, email, phone, service, message } = await request.json();

    // Validate required fields
    if (!name || !email) {
      return NextResponse.json(
        { message: 'Name and email are required' },
        { status: 400 }
      );
    }

    // Check if SMTP is configured
    if (!process.env.SMTP_HOST || !process.env.SMTP_USER || !process.env.SMTP_PASS) {
      console.error('SMTP not configured. Please check environment variables.');
      return NextResponse.json(
        { message: 'Email service is not configured. Please contact the administrator.' },
        { status: 500 }
      );
    }

    // Determine email type
    const isBookingRequest = message?.includes('Appointment request') || service;
    const emailSubject = isBookingRequest
      ? `🦷 New Appointment Request - ${service || 'General'}`
      : '📧 New Contact Form Submission';

    // Create HTML email template
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
        <div class="value">${name}</div>
      </div>
      <div class="field">
        <div class="label">📧 Email:</div>
        <div class="value"><a href="mailto:${email}">${email}</a></div>
      </div>
      ${phone ? `
      <div class="field">
        <div class="label">📱 Phone:</div>
        <div class="value"><a href="tel:${phone}">${phone}</a></div>
      </div>
      ` : ''}
      ${service ? `
      <div class="field">
        <div class="label">🦷 Service Requested:</div>
        <div class="value">${service}</div>
      </div>
      ` : ''}
      ${message ? `
      <div class="field">
        <div class="label">💬 Message:</div>
        <div class="value">${message.replace(/\n/g, '<br>')}</div>
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

    // Create plain text version
    const textContent = `
${isBookingRequest ? 'NEW APPOINTMENT REQUEST' : 'NEW CONTACT FORM SUBMISSION'}
Northcote Family Dentist
────────────────────────────────

👤 Name: ${name}
📧 Email: ${email}
${phone ? `📱 Phone: ${phone}` : ''}
${service ? `🦷 Service: ${service}` : ''}
${message ? `💬 Message:\n${message}` : ''}

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
      replyTo: email,
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
