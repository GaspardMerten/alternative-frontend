import {fetchApi} from "@/api/fetch";

export function createCompanyRanking(slug: string, data: any) {
    return fetchApi('/company/rating?company_slug=' + slug, {
        method: 'POST',
        body: JSON.stringify(data),
        headers: {
            'Content-Type': 'application/json'
        }
    })
}