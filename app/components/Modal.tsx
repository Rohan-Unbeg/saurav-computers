"use client";

import { useState, useEffect } from "react";
import { useLanguage } from "../context/LanguageProvider";
import { X } from "lucide-react";

interface ModalProps {
    isOpen: boolean;
    onClose: () => void;
    children: React.ReactNode;
}

export default function Modal({ isOpen, onClose, children }: ModalProps) {
    useEffect(() => {
        const handleEscape = (e: KeyboardEvent) => {
            if (e.key === "Escape") {
                onClose();
            }
        };

        const handleClickOutside = (e: MouseEvent) => {
            const modal = document.getElementById("modal");
            if (modal && e.target === modal) {
                onClose();
            }
        };

        if (isOpen) {
            document.addEventListener("keydown", handleEscape);
            document.addEventListener("click", handleClickOutside);
        }

        return () => {
            document.removeEventListener("keydown", handleEscape);
            document.removeEventListener("click", handleClickOutside);
        };
    }, [isOpen, onClose]);

    if (!isOpen) return null;

    return (
        <div
            id="modal"
            className="fixed inset-0 bg-black/60 flex justify-center items-center z-50 p-4"
            role="dialog"
            aria-modal="true"
        >
            <div className="bg-modal-bg p-6 rounded-xl max-w-md w-full max-h-[80vh] overflow-auto shadow-lg animate-in zoom-in-95 duration-200 backdrop-blur-sm border border-border">
                <div className="flex justify-between items-start mb-4">
                    <h2 className="text-xl font-semibold text-text mb-4">{title}</h2>
                    <button
                        onClick={onClose}
                        className="text-text-secondary hover:text-text transition-colors"
                        aria-label="Close modal"
                    >
                        <X className="w-5 h-5" />
                    </button>
                </div>
                {children}
            </div>
        </div>
    );
}
