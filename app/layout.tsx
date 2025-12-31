import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const viewport: Viewport = {
  themeColor: "#007aff",
  width: "device-width",
  initialScale: 1,
  maximumScale: 1,
};

export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_APP_URL || "http://localhost:3000"),
  title: {
    default: "Coup | iMessage Automation for Teams",
    template: "%s | Coup",
  },
  description: "Send iMessages directly from your team workflows or AI agents. Secure, verified, and running natively on your Mac hardware.",
  keywords: [
    "iMessage automation",
    "iMessage API",
    "Mac automation",
    "AI workflows",
    "Team messaging",
    "Marketing automation",
    "CRM integration"
  ],
  authors: [{ name: "Coup Application" }],
  creator: "Coup",
  publisher: "Coup",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Coup | iMessage Automation for Teams",
    description: "Send iMessages directly from your team workflows or AI agents. Secure, verified, and running natively on your Mac hardware.",
    url: "/",
    siteName: "Coup",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Coup | iMessage Automation for Teams",
    description: "Send iMessages directly from your team workflows or AI agents.",
    creator: "@coup_app",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    "name": "Coup",
    "applicationCategory": "BusinessApplication",
    "operatingSystem": "macOS",
    "offers": {
      "@type": "Offer",
      "price": "0",
      "priceCurrency": "USD"
    },
    "description": "Send iMessages directly from your team workflows or AI agents. Secure, verified, and running natively on your Mac hardware.",
  };

  return (
    <html lang="en">
      <body className={`${inter.className} antialiased`}>
        {children}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </body>
    </html>
  );
}
