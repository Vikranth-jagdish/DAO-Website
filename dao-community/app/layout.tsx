import type { Metadata } from "next";
import { Orbitron, Share_Tech_Mono, Michroma } from "next/font/google";
import "./globals.css";
import { NavbarDemo } from "./_components/NavBar";
import { FooterSection } from "./_components/Footer";

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
        <div className="sticky w-full top-0 left-0 mt-3">
          <NavbarDemo />
        </div>
        {children}
        <FooterSection />
      </body>
    </html>
  );
}
