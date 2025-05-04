// Importing the Metadata type from Next.js for potential use in metadata definitions
import type { Metadata } from "next";

// Importing the Roboto font from Google Fonts using Next.js font optimization
import { Roboto } from 'next/font/google';

// Importing global CSS styles for the application
import "./globals.css";

// Configuring the Roboto font with a custom CSS variable and specifying the Latin subset
const robotoSans = Roboto({
  variable: "--font-roboto", 
  subsets: ["latin"],       
});

// Defining the RootLayout component, which wraps the application layout
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
