import type { Metadata } from "next";
import { Inter, Calistoga } from "next/font/google";
import "./globals.css";
import { twMerge } from "tailwind-merge";

const inter = Inter({ subsets: ["latin"], variable: "--font-sans" });
const calistoga = Calistoga({
  subsets: ["latin"],
  variable: "--font-serif",
  weight: ["400"],
});

export const metadata: Metadata = {
  title: "Portfolio | Fayz Mohamed - Développeur Frontend & Expert Next.js",
  description:
    "Découvrez le portfolio de Fayz Mohamed, développeur frontend expert en Next.js. Projets modernes, designs intuitifs et performances optimales au service de vos idées.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={twMerge(
          inter.variable,
          calistoga.variable,
          "bg-gray-900 text-white antialiased font-sans scroll-smooth"
        )}
      >
        {children}
      </body>
    </html>
  );
}
