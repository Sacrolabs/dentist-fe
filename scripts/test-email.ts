import dotenv from 'dotenv'
dotenv.config({ path: '.env.local' })
import nodemailer from 'nodemailer'

async function testEmail() {
  console.log('🔍 Testing Email Configuration...\n')

  // Check environment variables
  console.log('Environment Variables:')
  console.log(`✅ SMTP_HOST: ${process.env.SMTP_HOST}`)
  console.log(`✅ SMTP_PORT: ${process.env.SMTP_PORT}`)
  console.log(`✅ SMTP_USER: ${process.env.SMTP_USER}`)
  console.log(`✅ SMTP_FROM_EMAIL: ${process.env.SMTP_FROM_EMAIL}`)
  console.log(`✅ CONTACT_RECIPIENT_EMAIL: ${process.env.CONTACT_RECIPIENT_EMAIL}`)
  console.log(`${process.env.SMTP_PASS ? '✅' : '❌'} SMTP_PASS: ${process.env.SMTP_PASS ? '***configured***' : 'NOT SET'}\n`)

  if (!process.env.SMTP_PASS || process.env.SMTP_PASS === 'YOUR_GMAIL_APP_PASSWORD_HERE') {
    console.error('❌ ERROR: Gmail App Password not configured!')
    console.error('Please follow the instructions to generate and set SMTP_PASS in .env.local\n')
    process.exit(1)
  }

  try {
    // Create transporter
    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST,
      port: Number(process.env.SMTP_PORT) || 587,
      secure: false,
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS,
      },
    })

    console.log('📧 Verifying SMTP connection...')
    await transporter.verify()
    console.log('✅ SMTP connection successful!\n')

    console.log('📨 Sending test email...')
    const info = await transporter.sendMail({
      from: `"Northcote Family Dentist Website" <${process.env.SMTP_FROM_EMAIL}>`,
      to: process.env.CONTACT_RECIPIENT_EMAIL,
      subject: '🧪 Test Email - Website Contact Form',
      html: `
<!DOCTYPE html>
<html>
<head>
  <style>
    body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; }
    .container { max-width: 600px; margin: 0 auto; padding: 20px; }
    .header { background: #2D5F6B; color: white; padding: 20px; border-radius: 8px 8px 0 0; }
    .content { background: #f9f9f9; padding: 30px; border: 1px solid #ddd; border-radius: 0 0 8px 8px; }
    .success { background: #d4edda; border: 1px solid #c3e6cb; color: #155724; padding: 15px; border-radius: 5px; margin: 20px 0; }
  </style>
</head>
<body>
  <div class="container">
    <div class="header">
      <h1 style="margin: 0;">🧪 Test Email Successful!</h1>
      <p style="margin: 5px 0 0 0; opacity: 0.9;">Northcote Family Dentist</p>
    </div>
    <div class="content">
      <div class="success">
        <strong>✅ Your email configuration is working correctly!</strong>
      </div>
      <p>This is a test email from your Northcote Family Dentist website.</p>
      <p>You can now receive contact form submissions and appointment requests at this email address.</p>
      <p><strong>Next steps:</strong></p>
      <ul>
        <li>Test the contact form on your website</li>
        <li>Test the booking form on the homepage</li>
        <li>Check your spam folder if you don't see emails</li>
      </ul>
      <p style="margin-top: 30px; padding-top: 20px; border-top: 2px solid #ddd; color: #999;">
        Sent: ${new Date().toLocaleString('en-NZ', {
          timeZone: 'Pacific/Auckland',
          dateStyle: 'full',
          timeStyle: 'short'
        })}
      </p>
    </div>
  </div>
</body>
</html>`,
      text: `
✅ TEST EMAIL SUCCESSFUL!
Northcote Family Dentist

Your email configuration is working correctly!

This is a test email from your website.
You can now receive contact form submissions at this email address.

Next steps:
- Test the contact form on your website
- Test the booking form on the homepage
- Check your spam folder if you don't see emails

Sent: ${new Date().toLocaleString('en-NZ', {
  timeZone: 'Pacific/Auckland',
  dateStyle: 'full',
  timeStyle: 'short'
})}
`
    })

    console.log('✅ Test email sent successfully!')
    console.log(`📬 Message ID: ${info.messageId}`)
    console.log(`\n✨ Check your inbox at ${process.env.CONTACT_RECIPIENT_EMAIL}\n`)
  } catch (error) {
    console.error('❌ Email test failed:')
    console.error(error)
    console.error('\nCommon issues:')
    console.error('1. Gmail App Password not set correctly')
    console.error('2. 2-Step Verification not enabled on Gmail')
    console.error('3. Using regular password instead of App Password')
    console.error('4. Gmail account security blocking access\n')
    process.exit(1)
  }
}

testEmail().catch((err) => {
  console.error('Test failed:', err)
  process.exit(1)
})
