# AWS Amplify Deployment Guide

This guide will walk you through deploying the Northcote Family Dentist website to AWS Amplify.

## Prerequisites

- AWS Account with Amplify access
- GitHub repository (or other Git provider)
- All environment variables configured (see `.env.example`)

## Deployment Configurations

### Next.js Configuration

The project is configured for Amplify deployment with:
- ✅ `output: 'standalone'` for optimal serverless deployment
- ✅ Image optimization enabled with remote patterns for Sanity and Google images
- ✅ `amplify.yml` build specification file

### Build Settings

The `amplify.yml` file configures:
- Node.js environment
- npm ci for clean dependency install
- Build caching for faster deployments
- Proper artifact output

## Step-by-Step Deployment

### 1. Create Amplify App

1. Log in to [AWS Amplify Console](https://console.aws.amazon.com/amplify/)
2. Click **"New app"** → **"Host web app"**
3. Select your Git provider (GitHub, GitLab, Bitbucket, etc.)
4. Authorize AWS Amplify to access your repository
5. Select the repository and branch (usually `main`)

### 2. Configure Build Settings

AWS Amplify will automatically detect the `amplify.yml` file. If not:

1. Go to **App settings** → **Build settings**
2. Click **Edit**
3. Ensure the build specification matches:

```yaml
version: 1
frontend:
  phases:
    preBuild:
      commands:
        - npm ci
    build:
      commands:
        - npm run build
  artifacts:
    baseDirectory: .next
    files:
      - '**/*'
  cache:
    paths:
      - node_modules/**/*
      - .next/cache/**/*
```

### 3. Configure Environment Variables

Go to **App settings** → **Environment variables** and add all required variables:

#### Required Variables (from .env.example):

```
NEXT_PUBLIC_SANITY_PROJECT_ID=xjbiwocx
NEXT_PUBLIC_SANITY_DATASET=production
SANITY_API_VERSION=2025-10-13
SANITY_API_TOKEN=your_sanity_write_token_here

SERPAPI_API_KEY=your_serpapi_api_key_here
GOOGLE_PLACE_ID=ChIJ9XtjnoU5DW0RiV8s8lHeOos
NEXT_PUBLIC_GOOGLE_REVIEW_LINK=https://g.page/r/CYlfLPJR3jqLEAE/review
NEXT_PUBLIC_GOOGLE_VIEW_REVIEWS_LINK=https://www.google.com/search?q=sunnynook+dentist#mpd=~12828877675563599308/customers/reviews

NEXT_PUBLIC_SITE_URL=https://your-amplify-domain.amplifyapp.com

SMTP_HOST=your_smtp_host
SMTP_PORT=587
SMTP_USER=your_smtp_username
SMTP_PASS=your_smtp_password
SMTP_FROM_EMAIL=noreply@yourdomain.com
CONTACT_RECIPIENT_EMAIL=contact@yourdomain.com
SMTP_SECURE=false
```

**Important:** Replace placeholder values with actual credentials!

### 4. Deploy

1. Click **"Save and deploy"**
2. AWS Amplify will:
   - Clone your repository
   - Install dependencies
   - Build the Next.js app
   - Deploy to CDN
3. Monitor the build logs for any errors

### 5. Post-Deployment Configuration

#### Update Site URL

After deployment, update the `NEXT_PUBLIC_SITE_URL` environment variable:

1. Copy your Amplify app URL (e.g., `https://main.d1234567890.amplifyapp.com`)
2. Go to **Environment variables**
3. Update `NEXT_PUBLIC_SITE_URL` to your new domain
4. Redeploy the app

#### Set Up Custom Domain (Optional)

1. Go to **App settings** → **Domain management**
2. Click **"Add domain"**
3. Follow the wizard to:
   - Enter your domain name
   - Configure DNS records
   - Add SSL certificate (automatic)

## API Routes

The following API routes are deployed automatically:

- `/api/send-email` - Contact form submissions
- `/api/google-reviews` - Fetches Google reviews via SerpApi

### Email Configuration

The contact form uses nodemailer with SMTP. For better reliability on AWS:

**Option 1: Use existing SMTP** (Current setup)
- Configure SMTP variables in Amplify environment
- Ensure SMTP provider allows connections from AWS

**Option 2: Migrate to AWS SES** (Recommended)
- Better deliverability
- Native AWS integration
- Cost-effective
- Steps to migrate:
  1. Set up AWS SES in your account
  2. Verify sender domain/email
  3. Get SMTP credentials
  4. Update environment variables
  5. No code changes needed!

## Sanity Studio

The Sanity Studio is accessible at `/studio` route:
- URL: `https://your-domain.amplifyapp.com/studio`
- Already configured for production
- No additional setup needed

## Monitoring & Logs

### View Build Logs
1. Go to your Amplify app
2. Click on the build number
3. View detailed logs for each phase

### View Application Logs
1. Go to **Monitoring** tab
2. View metrics for:
   - Requests
   - Error rates
   - Latency
3. Access CloudWatch logs for detailed debugging

## Troubleshooting

### Build Failures

**Issue:** `Module not found` errors
- **Solution:** Check that all dependencies are in `package.json`
- Run `npm ci` locally to verify

**Issue:** Environment variable errors
- **Solution:** Verify all required env vars are set in Amplify console
- Check for typos in variable names

### Runtime Errors

**Issue:** 500 errors on API routes
- **Solution:** Check CloudWatch logs for detailed error messages
- Verify SMTP/SerpApi credentials are correct

**Issue:** Images not loading
- **Solution:** Check Sanity asset URLs are accessible
- Verify remote patterns in `next.config.mjs`

### Deployment Speed

**First deployment:** 5-10 minutes
**Subsequent deployments:** 2-5 minutes (with caching)

To improve build times:
- Dependencies are cached in `node_modules`
- Next.js build cache is preserved in `.next/cache`

## Continuous Deployment

Amplify automatically deploys when you push to the configured branch:

1. Make changes locally
2. Commit and push to GitHub
3. Amplify detects changes
4. Automatic build and deployment
5. Monitor in Amplify console

### Branch Deployments

You can set up multiple environments:

1. Go to **App settings** → **Branches**
2. Connect additional branches (e.g., `develop`, `staging`)
3. Each branch gets its own URL
4. Configure different env vars per branch

## Security Best Practices

1. **Never commit `.env.local`** (already in .gitignore)
2. **Rotate API keys regularly**
3. **Use AWS Secrets Manager** for sensitive data (advanced)
4. **Enable branch protection** in GitHub
5. **Set up MFA** on AWS account

## Cost Optimization

AWS Amplify Pricing:
- **Build minutes:** Free tier includes 1,000 build minutes/month
- **Hosting:** $0.15/GB served
- **Storage:** $0.023/GB/month

Tips to reduce costs:
- Enable caching (already configured)
- Use Amplify's CDN for static assets
- Monitor usage in AWS Billing dashboard

## Support & Resources

- [AWS Amplify Documentation](https://docs.aws.amazon.com/amplify/)
- [Next.js 15 on Amplify](https://docs.amplify.aws/guides/hosting/nextjs/)
- [Sanity Documentation](https://www.sanity.io/docs)
- [SerpApi Documentation](https://serpapi.com/google-maps-reviews-api)

## Rollback

If a deployment causes issues:

1. Go to your Amplify app
2. Click on a previous successful build
3. Click **"Redeploy this version"**
4. Amplify will restore the previous version

## Environment-Specific Notes

### Development
- URL: `http://localhost:3000`
- Uses `.env.local`
- Sanity Studio: `http://localhost:3000/studio`

### Production (Amplify)
- URL: `https://your-domain.amplifyapp.com`
- Uses Amplify environment variables
- Sanity Studio: `https://your-domain.amplifyapp.com/studio`

## Next Steps After Deployment

1. ✅ Verify all pages load correctly
2. ✅ Test contact form submission
3. ✅ Check Google reviews are fetching
4. ✅ Access Sanity Studio and verify content
5. ✅ Set up custom domain (optional)
6. ✅ Configure AWS SES for email (optional)
7. ✅ Set up monitoring alerts
8. ✅ Test emergency page functionality

---

**Deployment Status:** Ready for AWS Amplify ✅

For issues or questions, check the AWS Amplify console logs first, then refer to the troubleshooting section above.
