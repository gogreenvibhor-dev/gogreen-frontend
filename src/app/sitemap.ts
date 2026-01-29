import { MetadataRoute } from 'next'
 
export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://vidhienterprises.com'
  
  // Main pages with high priority
  const mainPages = [
    {
      url: baseUrl,
      lastModified: new Date(),
      changeFrequency: 'weekly' as const,
      priority: 1.0,
    },
    {
      url: `${baseUrl}/company-profile`,
      lastModified: new Date(),
      changeFrequency: 'monthly' as const,
      priority: 0.9,
    },
    {
      url: `${baseUrl}/products`,
      lastModified: new Date(),
      changeFrequency: 'weekly' as const,
      priority: 0.9,
    },
    {
      url: `${baseUrl}/global-presence`,
      lastModified: new Date(),
      changeFrequency: 'monthly' as const,
      priority: 0.8,
    },
    {
      url: `${baseUrl}/founder-vision`,
      lastModified: new Date(),
      changeFrequency: 'yearly' as const,
      priority: 0.7,
    },
    {
      url: `${baseUrl}/our-journey`,
      lastModified: new Date(),
      changeFrequency: 'yearly' as const,
      priority: 0.7,
    },
    {
      url: `${baseUrl}/knowledge-hub`,
      lastModified: new Date(),
      changeFrequency: 'monthly' as const,
      priority: 0.8,
    },
    {
      url: `${baseUrl}/careers`,
      lastModified: new Date(),
      changeFrequency: 'monthly' as const,
      priority: 0.7,
    },
    {
      url: `${baseUrl}/contact`,
      lastModified: new Date(),
      changeFrequency: 'monthly' as const,
      priority: 0.8,
    },
    {
      url: `${baseUrl}/sustainable`,
      lastModified: new Date(),
      changeFrequency: 'monthly' as const,
      priority: 0.7,
    },
    {
      url: `${baseUrl}/quality-policy`,
      lastModified: new Date(),
      changeFrequency: 'yearly' as const,
      priority: 0.6,
    },
  ]

  // Product category pages
  const productPages = [
    'dripirri',
    'inline-drip',
    'sprinkler',
    'rainsprinkler',
    'microsprinkler',
    'mini-sprinkler-accessories',
    'misters',
    'economical',
    'landscape',
    'layflat-pipe',
    'vidhi-kit',
  ].map(slug => ({
    url: `${baseUrl}/${slug}`,
    lastModified: new Date(),
    changeFrequency: 'weekly' as const,
    priority: 0.8,
  }))

  // Country/location pages
  const countryPages = [
    'bahrain', 'bangladesh', 'bhutan', 'bolivia', 'botswana', 'brazil',
    'burundi', 'cameroon', 'chile', 'cote-divoire', 'egypt', 'ethiopia',
    'gabon', 'gambia', 'georgia', 'ghana', 'guadeloupe', 'guatemala',
    'guinea', 'indonesia', 'iran', 'iraq', 'kenya', 'kuwait', 'lebanon',
    'maldives', 'mexico',
  ].map(country => ({
    url: `${baseUrl}/${country}`,
    lastModified: new Date(),
    changeFrequency: 'yearly' as const,
    priority: 0.5,
  }))

  return [
    ...mainPages,
    ...productPages,
    ...countryPages,
  ]
}
