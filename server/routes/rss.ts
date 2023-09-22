import { serverQueryContent } from '#content/server';
// @ts-ignore
import RSS from 'rss';

export default defineEventHandler(async (event) => {
    const feed = new RSS({
        title: 'threenine',
        description: 'UK Based Software Development consultancy specialising in Back-end development with Cloud Native platforms ',
        webMaster: 'Gary Woodfine',
        copyright: ` ${new Date().getFullYear()} threenine.co.uk ` ,
        site_url: 'https://threenine.blog',
        feed_url: `https://threenine.blog/rss`,
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
            url: `https://threenine.blog${doc._path}`,
            date: doc.date,
            description: doc.description,
        });
    }

    const feedString = feed.xml({ indent: true });
    event.node.res
    event.node.res.setHeader('content-type', 'text/xml');
    event.node.res.end(feedString);


});