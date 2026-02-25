import type { Metadata } from "next";
import { Roboto, Montserrat, Bebas_Neue, Mulish } from "next/font/google";
import "./globals.css";

const roboto = Roboto({
  subsets: ["latin"],
  weight: ["400", "500", "700"],
  variable: "--font-roboto",
});

const montserrat = Montserrat({
  subsets: ["latin"],
  variable: "--font-montserrat",
});

const bebasNeue = Bebas_Neue({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-bebas",
});

const mulish = Mulish({
  subsets: ["latin"],
  variable: "--font-mulish",
});

export const metadata: Metadata = {
  title: "WATCH BRASIL",
  description: "Watch Brasil",
  icons: {
    icon: "/icons/favicon.svg",
    apple: "/icons/favicon.svg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`
        ${roboto.variable} 
        ${montserrat.variable} 
        ${bebasNeue.variable} 
        ${mulish.variable} 
        antialiased
      `}
      >
        {children}
      </body>
    </html>
  );
}
