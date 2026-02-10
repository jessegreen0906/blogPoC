import type { Metadata } from "next";
import { SiteFooter } from "@/components/site-footer";
import { Cinzel, Libre_Baskerville, Montserrat } from "next/font/google";
import { SiteHeader } from "@/components/site-header";
import "./globals.css";

const cinzel = Cinzel({
  variable: "--font-cinzel",
  subsets: ["latin"],
});

const montserrat = Montserrat({
  variable: "--font-montserrat",
  subsets: ["latin"],
});

const libreBaskerville = Libre_Baskerville({
  variable: "--font-libre-baskerville",
  subsets: ["latin"],
  weight: ["400", "700"],
});

export const metadata: Metadata = {
  title: "Jay Westgate Blog",
  description: "Modern fan-first updates from Jay Westgate's Storyverse.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en-AU">
      <body
        className={`${cinzel.variable} ${montserrat.variable} ${libreBaskerville.variable} flex min-h-screen flex-col antialiased`}
      >
        <SiteHeader />
        <div className="flex-1">{children}</div>
        <SiteFooter />
      </body>
    </html>
  );
}
