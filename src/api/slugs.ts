import {fetchApi} from "@/api/fetch";

export function allCompaniesSlug(): Promise<string[]> {
    return fetchApi(`/company/slugs`, {
        method: "GET",
    });
}