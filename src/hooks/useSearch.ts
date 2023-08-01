import {useEffect, useState} from "react";
import {CompanySummary} from "@/models/CompanyTile";
import {searchCompaniesApi} from "@/api/search";

const useSearch = (limit: number = 0) => {
    const [companies, setCompanies] = useState<CompanySummary[]>([]);
    const [query, setQuery] = useState("");

    useEffect(() => {
            if (query.length < 3) {
                setCompanies([]);
                return;
            }
            searchCompaniesApi(query)
                .then((page) => {
                    if (limit === 0) {
                        setCompanies(page.results);
                    } else {
                        setCompanies(page.results.slice(0, limit));
                    }
                }).catch(() => {
            });
        }
        , [query, limit]);
    return {companies, setQuery};
};

export default useSearch;