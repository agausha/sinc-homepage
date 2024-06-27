import type { Metadata } from "next";
import { Inter } from "next/font/google";

import Navbar from "../components/header/Header";
import Footer from "../components/footer/Footer";

import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "SINC Partners",
  description:
    "SINC Partners is a dynamic service incubation company dedicated to nurturing startups and innovative ventures. We provide comprehensive support, from business strategy and mentorship to funding and networking opportunities. Our mission is to accelerate your growth and transform visionary ideas into successful enterprises.",
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
        {children}
        <Footer />
      </body>
    </html>
  );
}
