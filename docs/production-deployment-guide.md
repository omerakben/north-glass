# North Glass Production Deployment Guide

## Squarespace DNS + Google Workspace + Vercel Setup

### Overview
- **Domain**: northglassnc.com (registered with Squarespace)
- **DNS Management**: Squarespace DNS
- **Email**: Google Workspace (existing setup)
- **Hosting**: Vercel
- **Current Status**: Staging at https://north-glass.vercel.app/

---

## Step 1: Vercel Custom Domain Setup

### 1.1 Add Domain in Vercel Dashboard
1. Go to [Vercel Dashboard](https://vercel.com/dashboard)
2. Select your "north-glass" project
3. Navigate to **Settings** → **Domains**
4. Click **Add Domain**
5. Enter: `northglassnc.com`
6. Click **Add**
7. Repeat for: `www.northglassnc.com`

### 1.2 Note Vercel's DNS Instructions
Vercel will show you the required DNS records. You should see:
- A record for `@` pointing to `76.76.19.61`
- CNAME record for `www` pointing to `cname.vercel-dns.com`

---

## Step 2: Squarespace DNS Configuration

### 2.1 Access Squarespace DNS Settings
1. Log into your [Squarespace account](https://account.squarespace.com/)
2. Go to **Settings** → **Domains**
3. Click on `northglassnc.com`
4. Click **DNS Settings**

### 2.2 Configure DNS Records for Vercel

**Add A Record:**
```
Type: A
Host: @
Points to: 76.76.19.61
TTL: 3600 (1 hour)
```

**Add CNAME Record:**
```
Type: CNAME
Host: www
Points to: cname.vercel-dns.com
TTL: 3600 (1 hour)
```

### 2.3 Verify Google Workspace MX Records (DO NOT MODIFY)
Ensure these records exist and remain unchanged:
```
Type: MX
Host: @
Points to: 1 ASPMX.L.GOOGLE.COM
TTL: 3600

Type: MX
Host: @
Points to: 5 ALT1.ASPMX.L.GOOGLE.COM
TTL: 3600

Type: MX
Host: @
Points to: 5 ALT2.ASPMX.L.GOOGLE.COM
TTL: 3600

Type: MX
Host: @
Points to: 10 ALT3.ASPMX.L.GOOGLE.COM
TTL: 3600

Type: MX
Host: @
Points to: 10 ALT4.ASPMX.L.GOOGLE.COM
TTL: 3600
```

---

## Step 3: Production Environment Variables

### 3.1 Google Workspace SMTP Settings
You'll need your Google Workspace app password. If you don't have one:

1. Go to [Google Account Security](https://myaccount.google.com/security)
2. Enable 2-Factor Authentication (if not already enabled)
3. Go to **App passwords**
4. Generate a new app password for "Mail"
5. Save this password securely

### 3.2 Set Vercel Environment Variables

Run the production environment setup script:
```bash
cd /Users/ozzy-mac/Projects/north-glass
chmod +x scripts/setup-production-env.sh
./scripts/setup-production-env.sh
```

Or manually set each variable:
```bash
npx vercel env add SMTP_HOST production
# Enter: smtp.gmail.com

npx vercel env add SMTP_PORT production
# Enter: 587

npx vercel env add SMTP_USER production
# Enter: info@northglassnc.com

npx vercel env add SMTP_PASS production
# Enter: [your-google-app-password]

npx vercel env add LEADS_TO production
# Enter: info@northglassnc.com

npx vercel env add LEADS_FROM production
# Enter: info@northglassnc.com
```

---

## Step 4: Deploy and Verify

### 4.1 Trigger Production Deployment
```bash
cd /Users/ozzy-mac/Projects/north-glass
git add .
git commit -m "Production deployment configuration"
git push origin develop
```

### 4.2 Monitor Deployment
1. Watch the deployment in [Vercel Dashboard](https://vercel.com/dashboard)
2. Once complete, visit https://northglassnc.com
3. Verify https://www.northglassnc.com redirects properly

### 4.3 DNS Propagation Check
Use these tools to verify DNS propagation:
- [DNS Checker](https://dnschecker.org/)
- [WhatsMyDNS](https://www.whatsmydns.net/)

Enter `northglassnc.com` and verify A record shows `76.76.19.61`

---

## Step 5: Email Functionality Testing

### 5.1 Test Contact Form
1. Go to https://northglassnc.com/contact
2. Fill out and submit the contact form
3. Verify email is received at info@northglassnc.com
4. Check that confirmation email is sent to the user

### 5.2 Test Quote Form
1. Go to https://northglassnc.com/request-quote
2. Fill out and submit the quote form
3. Verify email is received with proper formatting
4. Test file attachment functionality

### 5.3 Test Email API Endpoint
```bash
curl -X POST https://northglassnc.com/api/test-email \
  -H "Content-Type: application/json" \
  -d '{"test": true}'
```

---

## Step 6: Post-Deployment Checklist

### 6.1 Performance Verification
- [ ] Run [Lighthouse audit](https://pagespeed.web.dev/) on https://northglassnc.com
- [ ] Verify Core Web Vitals scores
- [ ] Check mobile responsiveness

### 6.2 SEO Verification
- [ ] Submit sitemap to Google Search Console: https://northglassnc.com/sitemap.xml
- [ ] Verify Google Analytics 4 tracking
- [ ] Check meta titles and descriptions

### 6.3 Functionality Verification
- [ ] All internal links work correctly
- [ ] Contact form submits and sends email
- [ ] Quote form submits and sends email
- [ ] Phone number links work: (984) 268-8490
- [ ] Social media links work (Facebook, Instagram)

### 6.4 Security Verification
- [ ] HTTPS certificate is active
- [ ] Security headers are properly set
- [ ] No exposed environment variables in client-side code

---

## Troubleshooting

### DNS Issues
**Problem**: Domain not resolving to Vercel
**Solution**:
- Check DNS propagation (can take up to 48 hours)
- Verify A record points to correct Vercel IP
- Clear browser cache and try incognito mode

### Email Issues
**Problem**: Contact forms not sending emails
**Solution**:
- Verify environment variables are set in Vercel
- Check Google Workspace app password is correct
- Review Vercel function logs for SMTP errors

### SSL Certificate Issues
**Problem**: HTTPS not working
**Solution**:
- Wait for automatic SSL provisioning (can take a few minutes)
- Verify domain is properly configured in Vercel
- Check for any DNS conflicts

---

## Support Contacts

- **Vercel Support**: [vercel.com/support](https://vercel.com/support)
- **Squarespace Support**: [support.squarespace.com](https://support.squarespace.com)
- **Google Workspace Support**: [support.google.com/a](https://support.google.com/a)

---

## Environment Summary

```
Production URL: https://northglassnc.com
Staging URL: https://north-glass.vercel.app
Email: info@northglassnc.com (Google Workspace)
DNS: Squarespace DNS Management
Hosting: Vercel
Repository: github.com/omerakben/north-glass
```
