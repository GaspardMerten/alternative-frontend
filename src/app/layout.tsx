import './globals.css';
import type {Metadata} from 'next';
import {Poppins} from 'next/font/google';
import React from 'react';
import Menu from "@/components/Menu";

const poppins = Poppins({
    weight: ['200', '400', '500', '600', '700'],
    subsets: ['latin'],
});

export const metadata: Metadata = {
    title: 'Impact Search',
    description: 'Trouvez des alternatives engagées à vos marques préférées',
};

export default function RootLayout({
                                       children,
                                   }: {
    children: React.ReactNode;
}) {
    return (
        <html lang="fr">
        <body className={poppins.className}>
        <main className="flex flex-col h-screen max-w-6xl m-auto  md:px-8 px-4">
            <div id="dialog-root"></div>
            <Menu/>
            {children}
               <div className="text-center text-sm text-gray-400 py-4">
        Powered by <b><a href="https://www.giveactions.com" target="_blank">GiveActions</a></b>
      </div>
        </main>
        </body>
        </html>
    );
}
