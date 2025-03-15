import type { Metadata } from "next";
import {Poppins } from "next/font/google";
import "./globals.css";
import { ClerkProvider}  from "@clerk/nextjs";

const inter= Poppins({
  subsets: ["latin"],weight:["100","200","300","400","500","600","700","800","100"]
});



export const metadata: Metadata = {
  title: "Multi-Store Admin Portal",
  description: "Manage Your Store in A Single place",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={inter.className}>
        <ClerkProvider>
        {children}
        </ClerkProvider>
      </body>
    </html>
  );
    
}
