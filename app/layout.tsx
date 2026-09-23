import type { Metadata } from "next";
import { Fraunces, Source_Sans_3 } from "next/font/google";
import { Footer } from "@/components/Footer";
import { Navbar } from "@/components/Navbar";
import { buildMetadata } from "@/lib/metadata";
import "./globals.css";

const display = Fraunces({
  subsets: ["latin"],
  variable: "--font-display-loaded",
});

const body = Source_Sans_3({
  subsets: ["latin"],
  variable: "--font-body-loaded",
});

export const metadata: Metadata = buildMetadata();

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${display.variable} ${body.variable}`}>
        <Navbar />
        <main id="main" tabIndex={-1}>
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
