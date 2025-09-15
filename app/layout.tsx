import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ClerkProvider } from "@clerk/nextjs";
import { dark } from '@clerk/themes'

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "CloudVid Pro - Transform Your Videos Effortlessly",
  description: "Upload, compress, and share your videos with AI-powered optimization. Experience lightning-fast processing and seamless social sharing.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ClerkProvider
      appearance={{
        baseTheme: dark,
      }}
    >
      <html lang="en" className="dark">
        <body className={`${inter.className} dark bg-gray-900 text-white`}>
          {children}
        </body>
      </html>
    </ClerkProvider>
  );
}
