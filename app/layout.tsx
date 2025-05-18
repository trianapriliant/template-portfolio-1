import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "/styles/globals.css";
import Sidebar from "@/component/layout/Sidebar";
import Navbar from "@/component/layout/Navbar";
import Footer from "@/component/layout/Footer";

const inter = Inter({
  variable: "--font-primary",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Portfolio1",
  description: "Portfolio Website Template by Trian",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        data-theme="dark"
        className={`${inter.variable} ${inter.variable} antialiased bg-base-300`}
      >
        <Sidebar />
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
