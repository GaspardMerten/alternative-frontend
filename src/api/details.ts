import {fetchApi} from "@/api/fetch";
import {Company} from "@/models/CompanyTile";

export function companyDetailsApi(company_slug: string): Promise<Company> {
    return fetchApi(`/company/details?company_slug=${company_slug}`, {
        method: "GET",
    });
}