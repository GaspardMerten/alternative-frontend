"use client";

import React from "react";
import ReactDOM from "react-dom";
import {
    CloseIcon
} from "next/dist/client/components/react-dev-overlay/internal/icons/CloseIcon";

const Dialog = ({
                    isOpen,
                    onClose,
                    children
                }: {
    isOpen: boolean;
    onClose: () => void;
    children: React.ReactNode;
}) => {

    let dialogRoot: HTMLElement | null = null;
    try {
        dialogRoot = document.getElementById("dialog-root"); // Replace 'dialog-root' with an appropriate DOM element ID where you want to inject the dialog
    } catch (e) {
        dialogRoot = null;
    }

    const handleContentClick = (e: React.MouseEvent<HTMLDivElement>) => {
        e.stopPropagation();
    };

    if (!isOpen || !dialogRoot) {
        return null; // If the dialog is not open or the target root element is not found, return null to prevent rendering
    }

    return ReactDOM.createPortal(
        <div
            className={`z-50 fixed top-0 left-0 w-full px-4 h-full bg-black bg-opacity-50 flex items-center justify-center transition-opacity duration-300`}
            onClick={onClose}
        >
            <div
                className="bg-white p-8 rounded-lg shadow-lg z-100 relative"
                onClick={handleContentClick}
            >
                <button
                    onClick={onClose}
                    className="absolute top-0 right-0 p-4 text-gray-800 transition-colors duration-300"
                >
                    <CloseIcon/>
                </button>

                <div className="flex flex-col items-center justify-center">
                    {children}
                </div>
            </div>
        </div>,
        dialogRoot
    );
};

export default Dialog;
