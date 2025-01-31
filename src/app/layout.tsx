import type { Metadata } from "next";
import { Poppins, Lato } from "next/font/google";
import "./globals.css";

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["200","300", "400", "700"], // Regular and Bold
});

const lato = Lato({
  variable: "--font-lato",
  subsets: ["latin"],
  weight: ["100","300", "400", "700"], // Light, Regular, and Bold
});

export const metadata: Metadata = {
  title: "Youth Ablaze",
  description: "Empowering youth through purpose-driven leadership",
  icons: {
    icon: "/logo.png",
  },
  keywords: ["youth", "leadership", "purpose"],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        {/* Add your logo as a favicon */}
        <link rel="icon" type="image/png" href="/logo.png" />
      </head>
      <body className={`${poppins.variable} ${lato.variable} antialiased`}>
        {children}
      </body>
    </html>
  );
}
