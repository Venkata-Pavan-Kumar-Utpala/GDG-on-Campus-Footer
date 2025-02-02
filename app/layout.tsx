import type { Metadata } from "next"
import { Inter } from 'next/font/google'
import "./globals.css"
import { SiteFooter } from "@/components/site-footer"
import React from 'react'; // Import React

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Travila",
  description: "Your travel companion",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        {children}
        <SiteFooter />
      </body>
    </html>
  )
};