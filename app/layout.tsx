import type { Metadata } from "next";
import "./globals.css";
import Header from "@/app/ui/header";
import { ExpletusSans} from "@/app/ui/fonts";


export const metadata: Metadata = {
  title: "Mini Projects",
  description: "Mini Projects for improving skills",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${ExpletusSans.className} antialiased`}
      >
      <Header />
        {children}
      </body>
    </html>
  );
}
