import { serverQueryContent } from '#content/server';
// @ts-ignore
import RSS from 'rss';

export default defineEventHandler(async (event) => {
    const config = useAppConfig()

    const feed = new RSS({
        title: config.threenine.name,
        description: config.threenine.description,
        webMaster: config.threenine.webMaster,
        copyright: ` ${new Date().getFullYear()} ${ config.threenine.name } ` ,
        site_url: `${config.threenine.site_url}`,
        feed_url: `${config.threenine.site_url}/rss`,
        language: 'en',
        categories: ['API Development', 'Software Consultancy']
    });

    const docs = await serverQueryContent(event)
        .sort({ date: -1 })
        .where({ _partial: false })
        .find();

    const blogPosts = docs.filter((doc) => doc?._path?.includes('/posts'));
    for (const doc of blogPosts) {
        feed.item({
            title: doc.title ?? '-',
            url: `${config.threenine.site_url}${doc._path}`,
            date: doc.date,
            description: doc.description,
        });
    }

    const feedString = feed.xml({ indent: true });
    event.node.res
    event.node.res.setHeader('content-type', 'text/xml');
    event.node.res.end(feedString);

});