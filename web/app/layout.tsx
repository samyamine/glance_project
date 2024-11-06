import type { Metadata } from "next";
import "./globals.css";
import localFont from "next/font/local";
import Header from "@/components/custom/header";
import Footer from "@/components/custom/footer";

export const metadata: Metadata = {
    title: "Glance | Your personal AI fashion shopper",
    description: "Discover the better way to shop fashion online.",
};

const ttHovesProTrial = localFont({
    src: [
        {
            path: "../public/fonts/TT Hoves Pro Trial Thin.ttf",
            weight: "100",
            style: "normal",
        },
        {
            path: "../public/fonts/TT Hoves Pro Trial Thin Italic.ttf",
            weight: "100",
            style: "italic",
        },
        {
            path: "../public/fonts/TT Hoves Pro Trial Light.ttf",
            weight: "300",
            style: "normal",
        },
        {
            path: '../public/fonts/TT Hoves Pro Trial Regular.ttf',
            weight: '400',
            style: 'normal',
        },
        {
            path: '../public/fonts/TT Hoves Pro Trial Italic.ttf',
            weight: '400',
            style: 'italic',
        },
        {
            path: '../public/fonts/TT Hoves Pro Trial Medium.ttf',
            weight: '500',
            style: 'normal',
        },
        {
            path: '../public/fonts/TT Hoves Pro Trial Medium Italic.ttf',
            weight: '500',
            style: 'italic',
        },
        {
            path: '../public/fonts/TT Hoves Pro Trial DemiBold.ttf',
            weight: '600',
            style: 'normal',
        },
        {
            path: '../public/fonts/TT Hoves Pro Trial Bold.ttf',
            weight: '700',
            style: 'normal',
        },
        {
            path: '../public/fonts/TT Hoves Pro Trial ExtraBold.ttf',
            weight: '800',
            style: 'normal',
        },
        {
            path: '../public/fonts/TT Hoves Pro Trial Black.ttf',
            weight: '900',
            style: 'normal',
        },
    ],
    variable: "--font-TT-Hoves-Pro-Trial",
});

export default function RootLayout({children}: Readonly<{ children: React.ReactNode }>) {
    return (
        <html lang="en">
            <body className={`${ttHovesProTrial.variable}`}>
                <Header />
                <div className={`px-24`}>
                    {children}
                </div>
                <Footer />
            </body>
        </html>
    );
}
