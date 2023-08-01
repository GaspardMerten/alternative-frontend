import React from "react";

export default function Container({children, className = ""}: {
    children: React.ReactNode,
    className?: string
}) {
    return <div
        className={"flex flex-col bg-white rounded-xl shadow-sm px-6 py-4 space-y-2 " + className}>
        {children}
    </div>
}