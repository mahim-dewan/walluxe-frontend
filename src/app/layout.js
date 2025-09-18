import { Inter, Roboto_Mono, Saira } from "next/font/google";
import "./globals.css";
import Header from "@/components/Navbar/Header";

// Fonts
export const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["200", "300", "400", "600", "800"],
});

export const saira = Saira({
  variable: "--font-saira",
  subsets: ["latin"],
  weight: ["200", "400", "600", "800"],
});

export const roboto = Roboto_Mono({
  variable: "--font-roboto",
  subsets: ["latin"],
  weight: ["200", "400", "600", "700"],
});

// Meta Data
export const metadata = {
  title: "Walluxe | Media & Feature Wall Services",
  description:
    "Transform your spaces with Walluxe – premium media walls and feature walls. Browse our gallery, explore services, and get a free consultation today.",
  keywords:
    "media wall, feature wall, wall design, interior design, LED wall, decorative wall, Walluxe",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${inter.className} ${inter.variable} ${saira.variable} ${roboto.variable}`}
      >
        <Header />
        <main className="p-4">{children}</main>
      </body>
    </html>
  );
}
