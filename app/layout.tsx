'use client'
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import VantaBackground from "@/app/components/VantaBackground";
import LeftSection from "@/app/components/LeftSection";
import CornerClock from "@/app/components/CornerClock";
import ConsoleTexts from "@/app/components/ConsoleTexts";
import { GeistSans } from "geist/font/sans";
import React from "react";

const geistSans = Geist({
    variable: "--font-geist-sans",
    subsets: ["latin"],
});
const geistMono = Geist_Mono({
    variable: "--font-geist-mono",
    subsets: ["latin"],
});

export default function RootLayout({ children }: { children: React.ReactNode }) {
    return (
        <html lang="en" className={GeistSans.className}>
        <body className={`${geistSans.variable} ${geistMono.variable} antialiased bg-black min-h-screen relative`}>
        <div className="fixed inset-0 flex items-center justify-center bg-black">
            <div className="hidden sm:block"><CornerClock /></div>
            <div className="hidden sm:block"><ConsoleTexts /></div>
            <div className="fixed top-4 left-4 right-4 bottom-4 lg:top-10 lg:left-10 lg:right-10 lg:bottom-10 border border-white/60 overflow-hidden shadow-xl">
                <VantaBackground />
                <div className="relative z-10 h-full w-full grid
                            grid-cols-1
                            lg:grid-cols-[260px_1fr_760px]
                            grid-rows-[1fr_auto]">
                    <LeftSection />
                    {children}
                </div>
            </div>
        </div>
        </body>
        </html>
    );
}
