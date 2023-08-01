import {allCompaniesSlug} from "@/api/slugs";
import {NextResponse} from 'next/server'

export async function GET() {
    let slugs = await allCompaniesSlug();

    let randomSlug = slugs[Math.floor(Math.random() * slugs.length)];

    return NextResponse.redirect(process.env.BASE_URL + '/' + randomSlug)
}

