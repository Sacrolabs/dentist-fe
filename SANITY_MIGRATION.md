# Sanity CMS Migration Summary

## ✅ Completed

### 1. Sanity Setup
- Installed Sanity packages: `sanity`, `@sanity/client`, `@sanity/image-url`, `next-sanity`
- Configured embedded Sanity Studio at `/studio` route
- Connected to Sanity project: `northcote dentist (xjbiwocx)`
- Dataset: `production`

### 2. Content Schemas Created
- **Service**: serviceId, title, shortDescription, image, benefits[], details[], cta
- **Team Member**: memberId, name, position, bio, fullBio, specialties[], credentials, languages, isDentist
- **Testimonial**: name, text, stars, avatar, order
- **Hero**: title, subtitle, description, backgroundImage, CTAs
- **Site Settings**: siteName, logo, phone, email, address, hours[], social links, bookingUrl

### 3. Content Seeded to Sanity
- ✅ 6 services (from `lib/services-data.ts`)
- ✅ 4 team members (3 dentists + 1 support staff)
- ✅ 9 testimonials
- ✅ Hero section content
- ✅ Site settings

### 4. Components Refactored to Fetch from Sanity

#### Services
- `app/services/[serviceId]/page.tsx` - Now fetches service details from Sanity
- `components/service-list-server.tsx` - Server component fetching all services
- `components/service-flip-card.tsx` - Client component for service cards

#### Header
- `components/header-server.tsx` - Server component fetching services for dropdown
- `components/header-client.tsx` - Client component with navigation (renamed from `header.tsx`)
- `app/layout.tsx` - Updated to use `header-server`

#### Team
- `components/team-grid-server.tsx` - Server component fetching team members
- `components/team-member-card.tsx` - Client component for team member cards
- `app/team/page.tsx` - Updated to use server component

#### Testimonials
- `components/testimonials-grid-server.tsx` - Server component fetching testimonials
- `components/testimonial-card.tsx` - Client component for testimonial cards
- `app/testimonials/page.tsx` - Updated to use server component

### 5. Configuration Updates
- Added `styled-components` compiler support to `next.config.mjs` (required by Sanity Studio)
- Created isolated layout for `/studio` route to prevent CSS conflicts
- Changed Studio dynamic rendering from `force-static` to `force-dynamic`

### 6. Sanity Client & Queries
- `lib/sanity.client.ts` - Read and write clients
- `lib/sanity.queries.ts` - GROQ queries for all content types

### 7. Seed Scripts Created
- `scripts/seed-sanity.ts` - Seeds services
- `scripts/seed-team.ts` - Seeds team members
- `scripts/seed-testimonials.ts` - Seeds testimonials
- `scripts/seed-hero-settings.ts` - Seeds hero and site settings

## 🔧 How to Use

### Access Sanity Studio
1. Start dev server: `npm run dev`
2. Visit: `http://localhost:3000/studio`
3. Login with your Sanity account
4. Edit content, upload images, add new entries

### Add/Update Content
- **Services**: Add new services, upload images, edit benefits/details
- **Team Members**: Add team members, upload photos, update bios
- **Testimonials**: Add patient reviews, set ratings
- **Hero**: Update homepage hero text and CTAs
- **Site Settings**: Update contact info, hours, social links

### Re-seed Content (if needed)
```bash
npx tsx scripts/seed-sanity.ts
npx tsx scripts/seed-team.ts
npx tsx scripts/seed-testimonials.ts
npx tsx scripts/seed-hero-settings.ts
```

## 📝 Environment Variables Required

In `.env.local`:
```
NEXT_PUBLIC_SANITY_PROJECT_ID=xjbiwocx
NEXT_PUBLIC_SANITY_DATASET=production
SANITY_API_VERSION=2025-10-13
SANITY_API_TOKEN=<your_write_token>  # Only needed for seeding
```

## 🎨 CSS Fix Applied

Fixed CSS conflicts between Sanity Studio and main site:
- Added `styled-components` compiler to Next.js config
- Created isolated layout for Studio route
- Studio now renders independently without affecting main site styles

## 🚀 Next Steps (Optional)

### Not Yet Migrated (Still Hardcoded)
- `components/hero.tsx` - Hero section on homepage
- `components/services.tsx` - Services preview on homepage
- `components/testimonials.tsx` - Testimonials section on homepage
- `components/footer.tsx` - Footer content

These can be migrated later by:
1. Creating server component versions
2. Fetching from Sanity using existing queries
3. Updating page imports

### Preview/Draft Mode
- Can add Next.js Draft Mode for content preview before publishing
- Requires adding preview routes and token handling

## 📚 Resources

- Sanity Studio: `http://localhost:3000/studio`
- Sanity Docs: https://www.sanity.io/docs
- GROQ Query Docs: https://www.sanity.io/docs/groq
