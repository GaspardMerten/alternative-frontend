import 'animate.css';
import React from 'react';
import SearchBar from '@/components/search/Search';
import Link from "next/link";
import Image from "next/image";

export default function Home() {
    return (
        <>
             <Image width={1920} height={1080} src="/images/decoration_home.svg" rel="decoration" alt=""
                 className="fixed md:bottom-0 left-0 w-full opacity-50 skew bottom-10 z-0"/>
            <div
                className="mx-auto flex flex-col items-center justify-between max-w-2xl flex-1 md:space-y-16">
                <div
                    className="flex flex-col text-center space-y-7 md:pt-md-padding pt-10">
                    <h1 className="text-4xl font-bold mb-4 md:text-5xl">
                        Trouvez une alternative{" "}
                        <span
                            className="text-transparent bg-clip-text bg-gradient-to-r from-secondary to-primary">
            responsable
          </span>
                    </h1>
                    <h2 className="text-base font-normal md:text-lg max-w-xl">
                        En <b>seulement une recherche</b>, trouvez une{" "}
                        <b>alternative responsable</b> à vos marques préférées
                    </h2>
                    <div className="z-1 relative ">
                        <SearchBar/>
                        <Link href="/random"
                              className="text-sm  text-gray-500 mt-4 block">
                            {">"} Découvrir une alternative au hasard 🍀
                        </Link>
                    </div>
                </div>
            </div>
        </>
    );
}
