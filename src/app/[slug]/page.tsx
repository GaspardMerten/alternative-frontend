import {companyDetailsApi} from "@/api/details";
import {Company, CompanySummary} from "@/models/CompanyTile";
import {similarCompaniesApi} from "@/api/similar";
import CompanyTile from "@/components/CompanyTile";
import {Metadata} from "next";
import {allCompaniesSlug} from "@/api/slugs";
import SearchBar from "@/components/search/Search";
import StarRanking from "@/components/StarRanking";
import Container from "@/components/Container";
import ImageWithAlt from "@/components/ImageWithAlt";
import PostCommentButton from "@/components/PostCommentButton";
import dateStringToRecentText from "@/utilities/dateDisplay";
import autoPlural from "@/utilities/plural";
import React from "react";

export async function generateStaticParams() {
    let slugs = await allCompaniesSlug();

    return slugs.map((slug) => ({
        slug: slug,
    }))
}

export async function generateMetadata(
    {params: {slug}}: { params: { slug: string } }
): Promise<Metadata> {
    let company: Company = await companyDetailsApi(slug);
    return {
        title: company.name,
        description: company.short_description,
    };
}

export default async function Page({params}: { params: { slug: string } }) {
    let company: Company = await companyDetailsApi(params.slug);
    let similarCompanies: CompanySummary[] = await similarCompaniesApi(params.slug);


    return <>
        <div className="h-12 mb-8 overflow-visible z-10">
            <SearchBar></SearchBar>
        </div>
        <div
            className="pb-10 flex md:flex-row flex-col md:space-x-4 md:space-y-0 space-y-4">
            <div className="md:basis-2/3 flex flex-col space-y-4">
                <Container>
                    <div
                        className="flex justify-between items-center md:flex-row flex-col">
                        <div className="flex space-x-4 items-center">
                            <ImageWithAlt
                                image={company.logo}
                                width={100}
                                height={100}
                                className="rounded-xl p-1 object-contain h-16 w-16 border border-gray-200"
                            />
                            <div className="flex flex-col">
                                <h1 className="text-2xl font-bold">{company.name}</h1>
                                <h2 className="text-base font-normal">{company.short_description}</h2>
                            </div>
                        </div>
                        <div className="mt-4 text-center md:text-right">
                            <StarRanking rank={company.average_rating}></StarRanking>
                            <p className="text-gray-500 text-sm">{company.rating_count ?? 0} avis</p>
                        </div>
                    </div>

                    <div className="flex my-4">
                        {company.images.map((image) => (
                            <ImageWithAlt
                                key={image.image}
                                image={image}
                                width={1000}
                                height={300}
                                className="rounded-xl p-1 w-full object-cover h-72"
                            />
                        ))}
                    </div>
                    <p className="text-base text-justify font-normal mb-4">{company.long_description}</p>
                </Container>
                <Container>
                    <h3 className="text-2xl font-bold  mb-4">Entreprises
                        similaires</h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        {similarCompanies.map((company: CompanySummary) => (
                                <CompanyTile company={company} className="w-full rounded-xl" key={company.slug}/>
                        ))}
                    </div>
                </Container>
            </div>

            <div className="md:basis-1/3 flex flex-col space-y-4">
                {company.website &&
                <a href={company.website} target="_blank"
                     className="cursor-pointer text-black font-semibold text-sm bg-gradient-to-r from-secondary-light  to-primary-light rounded-xl px-4 h-12 flex items-center justify-center">
                    Visiter le site web
                </a>}
                {company.address &&
                    <Container>
                        <p className="text-gray-500 uppercase font-semibold text-sm">
                            Adresse
                        </p>
                        <p className="text-gray-700 font-medium text-base">
                            {company.address}
                        </p>
                    </Container>
                }
                <Container>
                    <p className="text-gray-500 uppercase font-semibold text-sm">
                        { autoPlural(company.rating_count, "Commentaire")}
                    </p>
                    {company.ratings && company.ratings.length === 0 &&
                        <p className="text-gray-700 font-medium text-base">
                            Aucun commentaire
                        </p>}
                    {company.ratings && company.ratings.map((rating) => (
                        <div key={rating.id}
                             className="flex flex-col space-y-2 bg-gray-50 rounded-xl p-4">
                            <p className="text-gray-500  ">
                                {rating.comment}
                            </p>
                            <div
                                className="flex space-x-2 items-center justify-between text-xs text-gray-500">
                                <StarRanking rank={rating.rating}
                                             fontSizeClass="text-sm"></StarRanking>
                                <p>
                                    Par {rating.username}, il y
                                    a {dateStringToRecentText(rating.created_at)}</p>
                            </div>
                        </div>
                    ))}

                    <PostCommentButton className="text-primary font-semibold text-sm cursor-pointer"
                                       companySlug={company.slug}>
                        {">"} Publier un commentaire
                    </PostCommentButton>
                </Container>
            </div>

        </div>
    </>
}