'use client';

import Link from "next/link";
import Button from "@/components/Button";
import React, {useState} from "react";
import Dialog from "@/components/Dialog";
import SuggestCompanyForm from "@/components/forms/SuggestCompanyForm";

export default function Menu() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [displayDialog, setDisplayDialog] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    const closeDialog = () => {
        setDisplayDialog(false);
    }

    const openDialog = () => {
        setDisplayDialog(true);
    }

    return (
        <>
            <Dialog isOpen={displayDialog} onClose={closeDialog}>
               <SuggestCompanyForm onSubmitted={closeDialog}/>
            </Dialog>
            <nav className="items-center flex justify-between flex-wrap pt-4">
                <Link href="/" className="uppercase font-bold">MARKETHIQUE</Link>
                <div
                    className="md:hidden flex items-center cursor-pointer"
                    onClick={toggleMenu}
                >
                    <svg
                        className="w-5 h-5"
                        aria-hidden="true"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 17 14"
                    >
                        <path
                            stroke="currentColor"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M1 1h15M1 7h15M1 13h15"
                        />
                    </svg>
                </div>
                <div
                    className={
                        "md:space-x-8 md:space-y-0 items-center md:flex md:w-auto" +
                        " w-full md:p-0" +
                        " space-y-2 " +
                        (isMenuOpen
                            ? "mt-4 block p-4 border border-gray-200 rounded"
                            : "hidden")
                    }
                >

                    <Button text={"Proposer une alternative"} onClick={openDialog}/>
                </div>
            </nav>
        </>
    );
}
