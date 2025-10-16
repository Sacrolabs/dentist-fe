# SerpApi Setup Guide

This guide will help you set up SerpApi to fetch Google Reviews for your website.

## Step 1: Create SerpApi Account

1. Go to [serpapi.com](https://serpapi.com)
2. Sign up for a free account (no credit card required)
3. **Free tier includes:** 100 searches per month (plenty with 12-hour caching = ~60 requests/month)

## Step 2: Get Your API Key

1. Log in to your SerpApi dashboard
2. Your API key is displayed on the dashboard homepage
3. Or navigate to **Account** → **API Key**
4. Copy your API key

## Step 3: Add API Key to Environment

Open your `.env.local` file and add:

```bash
SERPAPI_API_KEY=your_actual_api_key_here
```

## Step 4: Verify Your Place ID

The current Place ID is already configured for Sunnynook Dentist:
```bash
GOOGLE_PLACE_ID=ChIJ9XtjnoU5DW0RiV8s8lHeOos
```

To verify or change it:
1. Search for your business on Google Maps
2. Copy the Place ID from the URL (starts with `ChIJ...`)
3. Update in `.env.local` if needed

## Step 5: Test the Integration

1. Make sure all environment variables are set in `.env.local`
2. Restart your dev server:
   ```bash
   npm run dev
   ```
3. Visit: `http://localhost:3000/testimonials`
4. You should see your Google reviews displayed with:
   - 12 most relevant reviews
   - Profile photos
   - Star ratings
   - Review dates
   - Google badge

## Troubleshooting

### "API configuration error" message

**Problem:** You see "Unable to Load Google Reviews" with missing API key error.

**Solutions:**
1. Check that `SERPAPI_API_KEY` is set in `.env.local`
2. Verify your API key is correct (copy from SerpApi dashboard)
3. Ensure there are no extra spaces in the API key
4. Restart the dev server after adding the key

### "Authentication failed" error

**Problem:** 401 error returned from SerpApi.

**Solutions:**
1. Double-check your API key is correct
2. Make sure you're using the correct API key from your SerpApi account
3. Check if your account is active and not suspended

### No reviews showing up

**Problem:** The page loads but shows no reviews.

**Solutions:**
1. Check that `GOOGLE_PLACE_ID` is correct
2. Verify your business actually has Google reviews
3. Check the browser console for error messages
4. Check the server logs for API errors
5. Try testing the SerpApi endpoint directly in your browser:
   ```
   https://serpapi.com/search?engine=google_maps_reviews&data_id=YOUR_PLACE_ID&api_key=YOUR_API_KEY
   ```

### Reviews not updating

**Problem:** Reviews are cached and not showing new ones.

**Solution:** Reviews are cached for 12 hours. To force refresh:
- Clear Next.js cache: Delete `.next` folder and restart server
- Or wait 12 hours for automatic refresh

## API Usage

With the current configuration:
- **Cache duration:** 12 hours
- **Reviews per request:** 12 most relevant
- **Monthly requests:** ~60 (assuming 2 requests per day)
- **Free tier limit:** 100 searches/month
- **Cached searches:** FREE (don't count toward limit)

You're well within the free tier limits! 🎉

## SerpApi Benefits

✅ **More free searches:** 100/month vs other providers
✅ **No credit card required:** Free tier doesn't need CC
✅ **Cached searches free:** Repeated searches from cache are FREE
✅ **Well-documented:** Excellent API documentation and examples
✅ **Reliable:** Established provider with high uptime
✅ **Fast response times:** Quick API responses

## Need Help?

- SerpApi Documentation: https://serpapi.com/google-maps-reviews-api
- SerpApi Support: hello@serpapi.com
- Check server logs for detailed error messages
- Visit the SerpApi dashboard to monitor your usage

## Switching to a Different Business

To use reviews from a different Google Business Profile:

1. **Find your Place ID:**
   - Search for your business on Google Maps
   - Copy the Place ID from URL
   - Or use [Place ID Finder](https://developers.google.com/maps/documentation/places/web-service/place-id)

2. **Update `.env.local`:**
   ```bash
   GOOGLE_PLACE_ID=ChIJyourNewPlaceIdHere
   NEXT_PUBLIC_GOOGLE_REVIEW_LINK=https://g.page/r/YOUR_CODE/review
   NEXT_PUBLIC_GOOGLE_VIEW_REVIEWS_LINK=https://www.google.com/search?q=your+business+reviews
   ```

3. **Restart dev server:** Reviews will update on next fetch
