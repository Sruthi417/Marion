import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import Navbar from '../components/landing/navbar/Navbar'
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Marion",
  description: "Shop premium fashion for men and women at Marion. Explore modern clothing collections designed for style, comfort, and everyday wear",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        <Navbar/>
        {children}</body>
    </html>
  );
}
