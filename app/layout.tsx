import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import ToastProvider from "@/providers/toast-providers";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Abiyyi Rahinda",
  description: "Abiyyi",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <ToastProvider />
        {children}</body>
    </html>
  );
}
