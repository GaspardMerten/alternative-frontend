'use client';

import useSearch from "@/hooks/useSearch";
import {CompanySummary} from "@/models/CompanyTile";
import CompanyTile from "@/components/CompanyTile";

export default function SearchBar() {
    const {companies, setQuery} = useSearch(6);

    return <div><input
        type="text"
        className={"w-full px-4 py-2 mt-4 text-base border-0 shadow-sm z-20 relative" +
            "  text-gray-800 placeholder-gray-400 rounded-lg" +
            " focus:outline-none transition-shadow"
            + (companies.length > 0 ? " rounded-b-none" : "")}
        placeholder="Chaussures, vêtements, boissons..."
        onChange={(e) => setQuery(e.target.value)}
    />
        <div className="bg-white rounded-b-lg shadow    ">
            {companies.map((company: CompanySummary) => (
                <CompanyTile key={company.id} company={company}/>
            ))}
        </div>
    </div>
}