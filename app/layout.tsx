import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "/styles/globals.css";
import Sidebar from "@/component/layout/Sidebar";
import Navbar from "@/component/layout/Navbar";

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
        className={`${inter.variable} ${inter.variable} antialiased bg-primary`}
      >
        <Sidebar />
        <Navbar />
        <main className="ml-[80px] min-h-screen">{children}</main>
      </body>
    </html>
  );
}
