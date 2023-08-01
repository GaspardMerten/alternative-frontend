import {fetchApi} from "@/api/fetch";
import {CompanySummary} from "@/models/CompanyTile";

export function similarCompaniesApi(company_slug: string): Promise<CompanySummary[]> {
    return fetchApi(`/company/similar?company_slug=${company_slug}`, {
        method: "GET",
    });
}