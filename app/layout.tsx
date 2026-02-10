import "./globals.css";
import "react-medium-image-zoom/dist/styles.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Footer from "@/components/Footer";
import Header from "@/components/Header";

import BackToTop from "@/components/BackToTop";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  metadataBase: new URL("https://leclimaten10minutes.com"),
  title: "Le climat en 10 minutes",
  description:
    "S'informer sur la responsabilité humaine, les conséquences du changement climatique et les solutions en 10 minutes.",
  icons: {
    icon: "https://em-content.zobj.net/source/apple/354/hourglass-not-done_23f3.png",
  },
  openGraph: {
    title: "Le climat en 10 minutes",
    description:
      "S'informer sur la responsabilité humaine, les conséquences du changement climatique et les solutions en 10 minutes.",
    type: "website",
    locale: "fr_FR",
  },
  twitter: {
    card: "summary",
    title: "Le climat en 10 minutes",
    description:
      "S'informer sur la responsabilité humaine, les conséquences du changement climatique et les solutions en 10 minutes.",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="fr" className={"scroll-smooth"}>
      <body className={inter.className}>
        <Header />
        <main className={"text-foreground"}>{children}</main>
        <Footer />
        <BackToTop />
      </body>
    </html>
  );
}
