import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "./Layout/Header";
import Footer from "./Layout/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${inter.className} min-h-screen flex flex-col items-center w-full border-2 border-black`}
      >
        <div className="w-[1640px] flex flex-col border-2 h-full border-red-400 justify-between items-center">
          <Header />
          {children}
          <Footer />
        </div>
      </body>
    </html>
  );
}
