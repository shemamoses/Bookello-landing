import type { Metadata } from "next";
import { Manrope, Noto_Sans } from "next/font/google";
import "./globals.css";

const manrope = Manrope({
  subsets: ["latin"],
  variable: "--font-manrope",
  display: "swap",
});

const notoSans = Noto_Sans({
  subsets: ["latin"],
  variable: "--font-noto-sans",
  weight: ["400", "500", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL('https://bookello.life'),
  title: "Bookello | Elevating Hospitality & Lifestyle Across Africa",
  description: "Bookello is the all-in-one ecosystem connecting travelers to experiences and empowering businesses with cutting-edge technology.",
  keywords: ["Africa", "Hospitality", "Travel", "Hotel Booking", "Experiences", "SaaS", "Bookello"],
  openGraph: {
    title: "Bookello | Elevating Hospitality & Lifestyle Across Africa",
    description: "The all-in-one ecosystem connecting travelers to experiences and empowering businesses.",
    url: "https://bookello.life",
    siteName: "Bookello",
    images: [
      {
        url: "https://lh3.googleusercontent.com/aida-public/AB6AXuCQJEzgYCpv49GOeGldQg-4z3n-XcnxTpIbIRssJJ-CE3Ih7Gvnux9LiF4z9y-CnY-oQRx7kcGRL6L2wDfR4e18HdcsbbXAkfpRtBh9USyf9bxFepCZ0EuKqtHNKsxtarF7G3RBKGO1zyYHMQ9z4wvXw4Ix4_296iIWUTrPwjT_1_dWL8Kvfui_xcdFvHLrRC_tsSDZ2bG01iPtwe592_dkehIHpi3khrIBUk4lejXazEHPF5Uyzl88mzQWlrYJcKpCOp6Z8DFigA",
        width: 1200,
        height: 630,
        alt: "Bookello Landing Page",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Bookello",
    description: "Elevating Hospitality & Lifestyle Across Africa",
    images: ["https://lh3.googleusercontent.com/aida-public/AB6AXuCQJEzgYCpv49GOeGldQg-4z3n-XcnxTpIbIRssJJ-CE3Ih7Gvnux9LiF4z9y-CnY-oQRx7kcGRL6L2wDfR4e18HdcsbbXAkfpRtBh9USyf9bxFepCZ0EuKqtHNKsxtarF7G3RBKGO1zyYHMQ9z4wvXw4Ix4_296iIWUTrPwjT_1_dWL8Kvfui_xcdFvHLrRC_tsSDZ2bG01iPtwe592_dkehIHpi3khrIBUk4lejXazEHPF5Uyzl88mzQWlrYJcKpCOp6Z8DFigA"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="light">
      <head>
        <link 
          rel="stylesheet" 
          href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&display=swap" 
        />
      </head>
      <body
        className={`${manrope.variable} ${notoSans.variable} font-display antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
