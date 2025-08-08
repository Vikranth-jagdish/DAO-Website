import type { Metadata } from "next";
import { Orbitron, Share_Tech_Mono, Michroma } from "next/font/google";
import "./globals.css";

import { FooterSection } from "./_components/Footer";
import PageTabs from "./_components/NavBar1";

const orbitron = Orbitron({
  variable: "--font-orbitron",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800", "900"],
});

const sharetech = Share_Tech_Mono({
  variable: "--font-sharetech",
  subsets: ["latin"],
  weight: ["400"],
});

const michroma = Michroma({
  variable: "--font-michroma",
  subsets: ["latin"],
  weight: ["400"],
});

export const metadata: Metadata = {
  title: "DAO Community | Blockchain Club",
  description:
    "Join the future of decentralized organizations. Connect, learn, and build with our blockchain community.",
  keywords: [
    "DAO",
    "blockchain",
    "community",
    "decentralized",
    "cryptocurrency",
    "web3",
    "VIT",
    "VIT Chennai",
    "Ethereum",
    "Club",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${orbitron.variable} ${sharetech.variable} ${michroma.variable} antialiased`}
      >
        <div className="fixed top-0 left-[50%] mt-5 -translate-x-[50%] z-[100]">
          <PageTabs />
        </div>
        {children}

        <FooterSection />
      </body>
    </html>
  );
}
