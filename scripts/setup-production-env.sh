#!/bin/bash

echo "🚀 Setting up production environment variables for North Glass..."
echo "📧 Configuring Google Workspace SMTP with Squarespace DNS..."
echo ""

echo "⚠️  IMPORTANT: You'll need your Google Workspace app password!"
echo "   If you don't have one, generate it at:"
echo "   https://myaccount.google.com/apppasswords"
echo ""

echo "Setting SMTP configuration for Google Workspace..."
echo ""

echo "📡 SMTP_HOST (smtp.gmail.com)"
npx vercel env add SMTP_HOST production

echo ""
echo "🔌 SMTP_PORT (587 for TLS)"
npx vercel env add SMTP_PORT production

echo ""
echo "👤 SMTP_USER (info@northglassnc.com)"
npx vercel env add SMTP_USER production

echo ""
echo "🔐 SMTP_PASS (your Google Workspace app password)"
npx vercel env add SMTP_PASS production

echo ""
echo "📮 LEADS_TO (where contact forms send to)"
npx vercel env add LEADS_TO production

echo ""
echo "📤 LEADS_FROM (sender address for notifications)"
npx vercel env add LEADS_FROM production

echo ""
echo "✅ Environment variables setup complete!"
echo ""
echo "🚀 Next steps:"
echo "1. Add northglassnc.com to Vercel dashboard"
echo "2. Configure DNS A record in Squarespace: @ → 76.76.19.61"
echo "3. Configure DNS CNAME record in Squarespace: www → cname.vercel-dns.com"
echo "4. Deploy and test email functionality"
echo ""
echo "📋 Don't forget to preserve your Google Workspace MX records in Squarespace!"
