"use client";

import React, {useState} from "react";
import Dialog from "@/components/Dialog";
import CreateCompanyRankingForm from "@/components/forms/CreateCompanyRankingForm";

export default function PostCommentButton({children, companySlug, className}: {
    children: React.ReactNode
    companySlug: string;
    className?: string;
}) {
    let [displayDialog, setDisplayDialog] = useState(false);

    const closeDialog = () => {
        setDisplayDialog(false);
    }

    return (
        <>

            <div onClick={() => setDisplayDialog(true)} className={className}
            >
                {children}
            </div>

            <Dialog isOpen={displayDialog} onClose={closeDialog}>
                <CreateCompanyRankingForm companySlug={companySlug}
                                          onSubmitted={closeDialog}/>
            </Dialog>


        </>
    );
}