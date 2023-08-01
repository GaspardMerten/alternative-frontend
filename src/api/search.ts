import {fetchApi} from "@/api/fetch";
import {Page} from "@/models/Page";
import {CompanySummary} from "@/models/CompanyTile";

export function searchCompaniesApi(query: string): Promise<Page<CompanySummary>> {
    return fetchApi(`/company/search?query=${query}`, {
        method: "GET",
    });
}