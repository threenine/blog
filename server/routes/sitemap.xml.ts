import { serverQueryContent } from '#content/server'
import { SitemapStream, streamToPromise } from 'sitemap'

export default defineEventHandler(async (event) => {
    const config = useAppConfig()
    // Fetch all documents
    const docs = await serverQueryContent(event).find()
    const sitemap = new SitemapStream({
        hostname: `${config.threenine.site_url}`
    })

    for (const doc of docs) {
        sitemap.write({
            url: doc._path,
            changefreq: 'monthly',
            priority: 0.8,

        })
    }
    sitemap.end()

    return streamToPromise(sitemap)
})