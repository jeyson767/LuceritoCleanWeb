import { MetadataRoute } from 'next'

export default function robots(): MetadataRoute.Robots {
    return {
        rules: {
            userAgent: '*',
            allow: '/',
        },
        sitemap: 'https://lucerito-clean-web-o1qj.vercel.app/sitemap.xml',
    }
}