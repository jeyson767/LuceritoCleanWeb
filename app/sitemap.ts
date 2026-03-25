import { MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
    const baseUrl = 'https://lucerito-clean-web-o1qj.vercel.app'
    return [
        { url: baseUrl, lastModified: new Date(), changeFrequency: 'monthly', priority: 1 },
        { url: `${baseUrl}/inicio`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.8 },
        { url: `${baseUrl}/productos`, lastModified: new Date(), changeFrequency: 'weekly', priority: 1 },
        { url: `${baseUrl}/contacto`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.5 },
    ]
}