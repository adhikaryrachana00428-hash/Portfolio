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
        className={`${caveatFont.variable} ${garamondFont.variable} ${jetbrainsFont.variable} bg-[#0A0A0A] text-[#F5F5F0] antialiased selection:bg-[#C8B89A] selection:text-[#0A0A0A] overflow-x-hidden relative`}
      >
        {/* Physical textured paper grain overlay */}
        <svg className="fixed inset-0 pointer-events-none opacity-[0.22] z-50 w-full h-full mix-blend-overlay">
          <filter id="paper-noise">
            <feTurbulence type="fractalNoise" baseFrequency="0.04" numOctaves="4" stitchTiles="stitch" />
            <feColorMatrix type="matrix" values="0 0 0 0 0.96   0 0 0 0 0.96   0 0 0 0 0.94  0 0 0 0.15 0" />
          </filter>
          <rect width="100%" height="100%" filter="url(#paper-noise)" />
        </svg>

        {children}
      </body>
    </html>
  );
}
