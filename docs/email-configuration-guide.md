# Email Configuration and Testing Guide

## Overview
North Glass website uses nodemailer with Google Workspace SMTP for email delivery. This guide covers configuration, testing, and troubleshooting.

## Environment Setup

### Required Environment Variables

Create a `.env.local` file in the project root with:

```bash
# SMTP Configuration (Google Workspace)
SMTP_HOST=smtp.gmail.com
SMTP_PORT=465
SMTP_USER=info@northglassnc.com
SMTP_PASS=your_app_password_here

# Email Recipients
LEADS_TO=info@northglassnc.com
LEADS_FROM=info@northglassnc.com
```

### Google Workspace Setup

1. **Enable 2-Factor Authentication** on the Google Workspace account
2. **Generate App Password**:
   - Go to Google Account settings
   - Security → 2-Step Verification → App passwords
   - Generate password for "Mail"
   - Use this password for `SMTP_PASS`

## Testing Email Delivery

### 1. Configuration Test
Test the email configuration without sending emails:

```bash
curl -X POST http://localhost:3000/api/test-email
```

Expected responses:
- **Not configured**: Returns error with configuration details
- **Configured**: Returns success with connection verification

### 2. Contact Form Test
Test the contact form email delivery:

```bash
curl -X POST http://localhost:3000/api/contact \
  -F "name=Test User" \
  -F "email=test@example.com" \
  -F "phone=555-123-4567" \
  -F "message=This is a test message"
```

### 3. Quote Form Test
Test the quote request email delivery:

```bash
curl -X POST http://localhost:3000/api/quote \
  -F "name=Test User" \
  -F "email=test@example.com" \
  -F "phone=555-123-4567" \
  -F "service=Frameless Glass Shower Doors" \
  -F "message=Test quote request"
```

## Expected Email Flow

### Contact Form Submission
1. **Lead Email** → `LEADS_TO` address
   - Subject: "New Contact Message — [Name]"
   - Content: Name, email, phone, message

2. **Confirmation Email** → Customer
   - Subject: "Thanks for contacting North Glass"
   - Content: Acknowledgment with copy of submission

### Quote Form Submission
1. **Lead Email** → `LEADS_TO` address
   - Subject: "New Quote Request: [Service] — [Name]"
   - Content: Name, email, phone, service, message

2. **Confirmation Email** → Customer
   - Subject: "We received your quote request — North Glass"
   - Content: Acknowledgment with copy of submission

## Security Features

- **Honeypot Protection**: `company` field catches bots
- **Input Sanitization**: Removes CRLF characters, limits length
- **Required Fields**: Name + (email OR phone) required
- **SSL/TLS**: Secure connection to SMTP server

## Troubleshooting

### Common Issues

1. **"SMTP not configured"**
   - Verify environment variables are set
   - Check `.env.local` file exists and has correct values

2. **"Connection failed"**
   - Verify SMTP credentials
   - Check network connectivity
   - Ensure 2FA and app password are set up correctly

3. **"Authentication failed"**
   - Regenerate app password
   - Verify username is correct email address

### Testing in Development

```bash
# Start development server
npm run dev

# Test configuration
curl -X POST http://localhost:3000/api/test-email

# Test contact form (replace with real email to test delivery)
curl -X POST http://localhost:3000/api/contact \
  -F "name=Your Name" \
  -F "email=your-email@example.com" \
  -F "phone=555-123-4567" \
  -F "message=Testing email delivery"
```

### Production Verification

1. **Environment Variables**: Ensure all variables are set in production
2. **DNS/Network**: Verify SMTP access from production servers
3. **Rate Limits**: Google has sending limits for app passwords
4. **Monitoring**: Set up logging for email delivery failures

## Analytics Integration

Email events are tracked with these analytics events:
- `email_send_success`: Successful email delivery
- `email_send_error`: Failed email delivery
- `quote_submit`: Quote form submission
- `contact_submit`: Contact form submission

## Next Steps

- [ ] Configure production environment variables
- [ ] Test email delivery in production
- [ ] Set up email delivery monitoring
- [ ] Consider email templates for better formatting
- [ ] Implement email queuing for high volume (if needed)

## Related Files

- `/app/api/contact/route.ts` - Contact form handler
- `/app/api/quote/route.ts` - Quote form handler
- `/app/api/test-email/route.ts` - Email configuration tester
- `.env.local.example` - Environment variable template
