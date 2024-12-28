import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";

const poppinsFont = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "700"], // Specify the weights you need
  variable: "--font-poppins",
});

export const metadata: Metadata = {
  title: "Wesley Shirley Christian",
  description: "Going the New Era of trading giants",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${poppinsFont.variable} antialiased`}>
        {children}
      </body>
    </html>
  );
}
