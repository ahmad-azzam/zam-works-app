import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import clsx from "clsx";
import "./globals.css";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  variable: "--font-poppins",
});

export const metadata: Metadata = {
  title: "ZAM-WORKS",
  description: "This is my own project",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="bg-gray-200">
      <body
        className={clsx(
          "w-full max-w-[1920px] mx-auto bg-white",
          poppins.variable
        )}
      >
        {children}
      </body>
    </html>
  );
}
