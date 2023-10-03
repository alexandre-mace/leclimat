import "./globals.css";
import "react-medium-image-zoom/dist/styles.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Footer from "@/components/Footer";
import Header from "@/components/Header";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Le climat en 10 minutes",
  description:
    "S'informer sur la responsabilité humaine, les conséquences du changement climatique et les solutions en 10 minutes.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="fr" className={"scroll-smooth"}>
      <link
        rel="icon"
        href="https://em-content.zobj.net/source/apple/354/hourglass-not-done_23f3.png"
        sizes="any"
      />
      <body className={inter.className}>
        <Header />
        <main className={"text-[#121212]"}>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
