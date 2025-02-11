import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import NavBar from "@/components/NavBar";
import SideBar from "@/components/SideBar";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "A simple Dash Board",
  description: "A responsive Dashboard using next.js",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <NavBar />

        <div className="flex">
          <div className="hidden md:block h-[100vh] w-[300px]">
            <SideBar />
          </div>
          <div className="p-5 w-full md:max-w-[1140px]">
            {children}
          </div>
        </div>
        
      </body>
    </html>
  );
}
