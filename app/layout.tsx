import type { Metadata } from "next";
import "./globals.css";
import { ThemeProvider } from "@/context/ThemeContext";
import SmoothScrolling from "@/components/useLenisScroll";

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={` antialiased`}>
        <SmoothScrolling>
          <ThemeProvider>{children}</ThemeProvider>
        </SmoothScrolling>
      </body>
    </html>
  );
}
