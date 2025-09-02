import type { Metadata } from "next";
import { Nunito, Raleway } from "next/font/google";
import "./globals.css";

const nunito = Nunito({
  variable: "--font-nunito",
  subsets: ["latin"],
  weight: ["400", "600", "700", "800"],
});

const raleway = Raleway({
  variable: "--font-raleway",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
});

export const metadata: Metadata = {
  title: "P-A St-Jean - Software Engineer",
  description: "Software engineer specializing in scalable platforms, backend infrastructure, and crafting beautiful experiences.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
      </head>
      <body className={`${nunito.variable} ${raleway.variable} antialiased`}>
        {children}
      </body>
    </html>
  );
}
