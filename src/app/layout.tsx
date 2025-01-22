import type { Metadata } from "next";
import { Poppins, Roboto } from "next/font/google";
import "./globals.css";

// Fonts
const poppins = Poppins({
  weight: ["400", "500", "600", "700"],
  subsets: ["latin"],
  variable: "--font-poppins",
});
const roboto = Roboto({
  weight: ["100", "300", "400", "500", "700"],
  subsets: ["latin"],
  variable: "--font-roboto",
});

export const metadata: Metadata = {
  title: "AcademiX Info Web",
  description:
    "Explore the AcademiX platform, revolutionizing school management with cutting-edge technology and personalized support.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/logo.svg" />
      </head>
      <body
        className={`${poppins.variable} ${roboto.variable} antialiased `}
      >
        {children}
      </body>
    </html>
  );
}
