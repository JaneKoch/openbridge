import type { Metadata, Viewport } from "next";
import localFont from "next/font/local";
import "./globals.css";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import { Toaster } from "@/components/ui/sonner";

const inter = localFont({
  src: "./fonts/inter-latin.woff2",
  weight: "100 900",
  variable: "--font-inter",
  display: "swap",
});

const nunito = localFont({
  src: "./fonts/nunito-latin.woff2",
  weight: "200 1000",
  variable: "--font-nunito",
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "OpenBridge — A free AI reading tutor for every child",
    template: "%s · OpenBridge",
  },
  description:
    "OpenBridge is a free, open-source, AI-powered reading tutor that helps underserved children learn to read with personalized stories, friendly coaching, and zero barriers. No account, no ads, no tracking.",
  applicationName: "OpenBridge",
  keywords: [
    "reading tutor",
    "literacy",
    "education",
    "open source",
    "AI",
    "children",
    "free",
  ],
  openGraph: {
    title: "OpenBridge — A free AI reading tutor for every child",
    description:
      "Personalized reading adventures with a friendly AI tutor. Free forever, open source, and private by design.",
    type: "website",
    siteName: "OpenBridge",
  },
};

export const viewport: Viewport = {
  themeColor: "#FFF9F0",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${inter.variable} ${nunito.variable}`}>
      <body className="min-h-svh bg-background font-sans text-foreground antialiased">
        <div className="flex min-h-svh flex-col">
          <SiteHeader />
          <main id="main-content" className="flex-1">
            {children}
          </main>
          <SiteFooter />
        </div>
        <Toaster position="top-center" richColors />
      </body>
    </html>
  );
}
