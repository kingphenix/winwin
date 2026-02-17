# Video Playback Fix for Vercel Mobile Deployment

## Problem
The video `MobileGraph.mp4` in the Protocol Journey section was playing correctly on local development but not on Vercel when viewed on mobile devices. Instead of the video playing, only a static image was visible.

## Root Causes Identified

1. **Missing MIME Type Headers**: Vercel wasn't serving video files with explicit Content-Type headers, causing some mobile browsers to fail silently
2. **Video Source Format**: Using the `src` attribute directly on video elements instead of `<source>` elements with explicit `type` attributes
3. **Missing Preload Directive**: No `preload="auto"` attribute to ensure browsers load the video properly
4. **Weak Playback Logic**: The original play attempt didn't handle mobile browser autoplay restrictions properly

## Changes Made

### 1. Enhanced Video Elements (`ProtocolJourney.vue`)

**Before:**
```html
<video 
    ref="mobileVideoRef"
    src="/videos/MobileGraph.mp4" 
    autoplay muted loop playsinline 
    class="block sm:hidden w-full h-full object-cover"
></video>
```

**After:**
```html
<video 
    ref="mobileVideoRef"
    autoplay muted loop playsinline
    preload="auto"
    class="block sm:hidden w-full h-full object-cover"
>
    <source src="/videos/MobileGraph.mp4" type="video/mp4" />
</video>
```

**Changes:**
- Added `preload="auto"` for better loading
- Moved `src` into `<source>` element with explicit `type="video/mp4"`
- Applied to both desktop and mobile videos

### 2. Robust JavaScript Playback Logic (`ProtocolJourney.vue`)

**Enhanced Features:**
- Explicit muting before play attempts (critical for mobile autoplay policies)
- Calls `videoEl.load()` before playing
- Try-catch error handling
- Fallback: Retry on first user touch/click if autoplay fails
- IntersectionObserver to only play when video is visible (better performance)

### 3. Vercel Configuration (`vercel.json` - NEW FILE)

Created configuration to ensure proper video serving:
```json
{
  "headers": [
    {
      "source": "/videos/(.*)",
      "headers": [
        {
          "key": "Content-Type",
          "value": "video/mp4"
        },
        {
          "key": "Cache-Control",
          "value": "public, max-age=31536000, immutable"
        },
        {
          "key": "Accept-Ranges",
          "value": "bytes"
        }
      ]
    }
  ]
}
```

**Benefits:**
- Forces correct MIME type for all video files
- Enables browser caching for better performance
- Supports range requests for video seeking

### 4. Vite Build Configuration (`vite.config.ts`)

Updated to explicitly handle video files:
```typescript
assetsInclude: ['**/*.svg', '**/*.csv', '**/*.mp4', '**/*.webm']
```

## Next Steps

### 1. Commit and Deploy
```bash
git add .
git commit -m "Fix mobile video playback on Vercel"
git push
```

### 2. Verify on Vercel
After deployment:
- Open the site on a mobile device (or use Chrome DevTools mobile emulation)
- Navigate to the Protocol Journey section
- The video should now autoplay

### 3. Troubleshooting (if still not working)

If the video still doesn't play after deployment:

**A. Check Video Encoding**
The video might not be encoded in a mobile-friendly format. Re-encode using:
```bash
ffmpeg -i MobileGraph.mp4 -c:v libx264 -profile:v baseline -level 3.0 -pix_fmt yuv420p -c:a aac -b:a 128k MobileGraph_optimized.mp4
```

**B. Verify MIME Type on Vercel**
Use browser DevTools Network tab to check:
- The video request should show `Content-Type: video/mp4`
- Status should be `200` (not `404` or `403`)

**C. Check Browser Console**
Look for errors related to:
- Video codec not supported
- Autoplay policy blocked
- Network/CORS issues

**D. Alternative: Convert to WebM**
If MP4 still doesn't work, try WebM format:
```bash
ffmpeg -i MobileGraph.mp4 -c:v libvpx-vp9 -b:v 1M -c:a libopus MobileGraph.webm
```

Then update the video element:
```html
<video ...>
    <source src="/videos/MobileGraph.webm" type="video/webm" />
    <source src="/videos/MobileGraph.mp4" type="video/mp4" />
</video>
```

## Why This Works

1. **Explicit MIME Types**: Mobile browsers are strict about Content-Type headers
2. **Source Element**: Provides better codec detection than `src` attribute
3. **Preload Auto**: Ensures the video metadata and initial frames load
4. **Proper Muting**: Mobile browsers block unmuted autoplay
5. **IntersectionObserver**: Only attempts playback when video is visible
6. **User Interaction Fallback**: If autoplay fails, plays on first touch/click

## References

- [MDN: Video element best practices](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/video)
- [Vercel Headers Configuration](https://vercel.com/docs/projects/project-configuration#headers)
- [Mobile Autoplay Policies](https://developer.chrome.com/blog/autoplay/)
