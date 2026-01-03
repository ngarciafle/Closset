import type { Metadata } from "next";
import { Raleway, Barlow_Condensed } from "next/font/google";
import "./globals.css";
import { Header } from "@/app/ui/header";
import { SideNav } from "@/app/ui/side-nav";

const barlowCondensed = Barlow_Condensed({
  variable: "--font-barlow-condensed",
  subsets: ["latin"],
  weight: ["400"],
});

const raleway = Raleway({
  variable: "--font-raleway",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Tu Armario",
  description: "RRSS para ropa",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${raleway.variable} ${barlowCondensed.variable} antialiased h-screen w-full overflow-hidden flex flex-col`}
        >
          <Header/>
          <div className="flex-1 flex">
            <SideNav/>
            {children}
          </div>

      </body>
    </html>
  );
}
