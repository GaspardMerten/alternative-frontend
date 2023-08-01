import {fetchApi} from "@/api/fetch";

export function createSuggestion(data: any) {
    return fetchApi('/company/suggestion', {
        method: 'POST',
        body: JSON.stringify(data),
        headers: {
            'Content-Type': 'application/json'
        }
    })
}