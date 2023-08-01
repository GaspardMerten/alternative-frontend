import {CompanySummary} from "@/models/CompanyTile";
import Image from "next/image";
import Link from "next/link";

export default function CompanyTile(props: {
    company: CompanySummary;
    className?: string;
}) {
    return (
        <Link href={`/${props.company.slug}`}
              className={"flex items-center justify-start p-2 flex-row text-left" +
                  " focus:outline-none focus:bg-light_gray hover:bg-light_gray " + (props.className ?? "")}>
            <Image
                src={props.company.logo_url}
                alt={props.company.name}
                className="w-12 h-12 rounded-xl object-contain p-1 border-gray-200 border"
                width={32}
                height={32}
            />
            <div className="ml-4">
                <h3 className=" font-semibold">{props.company.name}</h3>
                <p className="text-sm font-normal">{props.company.short_description}</p>
            </div>
        </Link>
    );
}
