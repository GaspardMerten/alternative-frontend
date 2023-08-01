import {MetadataRoute} from 'next'
import {allCompaniesSlug} from "@/api/slugs";


export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
    let slugs = await allCompaniesSlug();

    let siteMaps = [
        {
            url: process.env.BASE_URL + '/',
            lastModified: new Date(),
        },
    ];

    for (let slug of slugs) {
        siteMaps.push({
            url: process.env.BASE_URL + '/' + slug,
            lastModified: new Date(),
        });
    }

    return siteMaps
}