import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Tamara Frazzetta",
  description: "My personal portfolio"
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
      <html lang="en">
        <body className={inter.className}>
          <Navbar />
          <main className="flex min-h-screen flex-col bg-[#121212]">
            <div className="container mt-24 mx-auto px-12 py-4">{children}</div>
          </main>
          <Footer/>
        </body>
      </html>
  );
}
