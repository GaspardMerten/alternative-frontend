import {allCompaniesSlug} from "@/api/slugs";
import {NextResponse} from 'next/server'

export async function GET(request: Request) {
    let slugs = await allCompaniesSlug();

    let randomSlug = slugs[Math.floor(Math.random() * slugs.length)];

    return NextResponse.redirect(
        request.url.split("://")[0] + '://' + request.headers.get('host') + '/' + randomSlug, {
            status: 302,
        }
    );
}

