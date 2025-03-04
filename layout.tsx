import "./globals.css"
import { Inter, Playfair_Display } from "next/font/google"
import Header from "./components/Header"
import Footer from "./components/Footer"
import CustomCursor from "./components/CustomCursor"
import type React from "react"

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" })
const playfair = Playfair_Display({ subsets: ["latin"], variable: "--font-playfair-display" })

export const metadata = {
  title: "CareerRoadmaps",
  description: "Step-by-step roadmaps to achieve your career goals",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${inter.variable} ${playfair.variable}`}>
      <body className="flex flex-col min-h-screen bg-gradient-to-br from-blue-50 to-purple-50">
        <CustomCursor />
        <Header />
        <main className="flex-grow">{children}</main>
        <Footer />
      </body>
    </html>
  )
}

