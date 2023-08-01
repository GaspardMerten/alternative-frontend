import {IImage} from "@/models/IImage";

export interface CompanySummary {
    id: number;
    name: string;
    short_description: string;
    slug: string;
    logo_url: string;
}

export interface CompanyRating {
    id: number;
    company: CompanySummary;
    rating: number;
    comment: string;
    username: string;
    created_at: string;
}

export interface Company {
    id: number;
    name: string;
    short_description: string;
    long_description: string;
    slug: string;
    address: string;
    phone_number: string;
    email: string;
    website: string;
    logo: IImage;
    images: IImage[];
    rating_count: number;
    average_rating: number;
    ratings: CompanyRating[];
    
}