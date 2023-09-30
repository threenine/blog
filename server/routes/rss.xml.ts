import {serverQueryContent} from '#content/server';
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
        categories: [buildCategoriesString(config.threenine.categories)]
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
            author: doc.author,
            categories: [doc.category]
        });
    }

    const feedString = feed.xml({ indent: true });
    event.node.res
    event.node.res.setHeader('content-type', 'text/xml');
    event.node.res.end(feedString);

    function buildCategoriesString(categories:Array<string>)
    {
        let cats = "" as string;

        for( let i in config.threenine.categories)
        {
            cats+= config.threenine.categories[i] + ', '
        }
        return trimTrailingChars(cats, ", ")
    }
    function trimTrailingChars(s:string, charToTrim:string) {
        let regExp = new RegExp(charToTrim + "+$");
        return s.replace(regExp, "");
    }
});

