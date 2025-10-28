import { createClient } from '@sanity/client'
import imageUrlBuilder from '@sanity/image-url'

// ✅ Sanity client setup
export const client = createClient({
  projectId: import.meta.env.VITE_SANITY_PROJECT_ID || 'khc2znf',
  dataset: import.meta.env.VITE_SANITY_DATASET || 'production',
  apiVersion: import.meta.env.VITE_SANITY_API_VERSION || '2025-10-28', // use latest
  token: import.meta.env.VITE_SANITY_TOKEN,
  useCdn: false, // disable CDN for admin updates
})

// ✅ Image URL builder
const builder = imageUrlBuilder(client)

/**
 * Safe image URL builder that handles all malformed or missing references
 * @param {Object|string|null} src - Sanity image object or URL
 * @returns {string} Valid Sanity image URL or fallback placeholder
 */
export const urlFor = (src) => {
  try {
    if (!src) {
      console.warn('⚠️ urlFor: No image source provided')
      return '/fallback-bg.jpg'
    }

    // If it's a plain URL, return directly
    if (typeof src === 'string') {
      return src
    }

    // If the asset reference is missing or invalid
    if (!src.asset || !src.asset._ref) {
      console.warn('⚠️ urlFor: Missing or invalid asset reference', src)
      return '/fallback-bg.jpg'
    }

    // Build and return a safe Sanity image URL
    return builder.image(src).url()
  } catch (err) {
    console.error('❌ urlFor error:', err, src)
    return '/fallback-bg.jpg'
  }
}
