import type { Metadata } from "next";
import { Roboto } from 'next/font/google'
import "./globals.css";

const robotoSans = Roboto({
  variable: "--font-roboto",
  subsets: ["latin"],
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${robotoSans.variable}`}
      >
        {children}
      </body>
    </html>
  );
}
