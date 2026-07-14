import type { Metadata } from "next";
import { Caveat, EB_Garamond, JetBrains_Mono } from "next/font/google";
import "./globals.css";

const caveatFont = Caveat({
  subsets: ["latin"],
  variable: "--font-caveat",
  display: "swap",
});

const garamondFont = EB_Garamond({
  subsets: ["latin"],
  variable: "--font-garamond",
  display: "swap",
});

const jetbrainsFont = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-jetbrains",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Rachana Adhikary | Portfolio",
  description: "A zine-style scrollytelling personal portfolio for Rachana Adhikary — CS Engineering student passionate about AI safety, Rust, and open source.",
  metadataBase: new URL("https://rachanaadhikary.dev"),
  openGraph: {
    title: "Rachana Adhikary | Portfolio",
    description: "A zine-style scrollytelling personal portfolio for Rachana Adhikary.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={`${caveatFont.variable} ${garamondFont.variable} ${jetbrainsFont.variable} bg-[#dfdcd6] text-black antialiased selection:bg-[#000080] selection:text-white overflow-x-hidden relative`}
      >
        {/* Extreme CRT digital grain overlay for max retro texture */}
        <svg className="fixed inset-0 pointer-events-none opacity-[0.42] z-[9999] w-full h-full mix-blend-overlay">
          <filter id="analog-grain">
            <feTurbulence type="fractalNoise" baseFrequency="0.95" numOctaves="3" stitchTiles="stitch" />
          </filter>
          <rect width="100%" height="100%" filter="url(#analog-grain)" />
        </svg>

        {children}
      </body>
    </html>
  );
}
