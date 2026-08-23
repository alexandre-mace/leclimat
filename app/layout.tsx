import "./globals.css";
import "react-medium-image-zoom/dist/styles.css";
import type { Metadata } from "next";
import { GeistSans } from "geist/font/sans";
import { GeistMono } from "geist/font/mono";
import { Brand } from "@/components/brand";
import ScrollProgress from "@/components/ScrollProgress";
import ShareButton from "@/components/ShareButton";
import { ToolShell } from "@/components/tool-shell";

import BackToTop from "@/components/BackToTop";


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
      <body
        className={`${GeistSans.variable} ${GeistMono.variable} flex min-h-dvh flex-col font-sans antialiased`}
      >
        <ToolShell
          sticky
          width="full"
          className="text-foreground"
          brand={
            <div className="flex items-center gap-1">
              <Brand
                name="Le climat en 10 minutes"
                logo="https://em-content.zobj.net/source/apple/354/hourglass-not-done_23f3.png"
              />
              <ShareButton />
            </div>
          }
          headerBelow={<ScrollProgress />}
        >
          {children}
        </ToolShell>
        <BackToTop />
      </body>
    </html>
  );
}
