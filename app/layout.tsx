import type { Metadata } from "next"
import { Geist } from "next/font/google"
import { Space_Grotesk } from "next/font/google"
import { Providers } from "@/components/providers"
import "./globals.css"

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
})

const spaceGrotesk = Space_Grotesk({
  variable: "--font-space-grotesk",
  subsets: ["latin"],
  weight: ["700"],
})

export const metadata: Metadata = {
  title: "Elijah Sow",
  description: "Computer Information Systems student at Georgia State University",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="dark">
      <body className={`${geistSans.variable} ${spaceGrotesk.variable} font-sans antialiased`}>
        <Providers>{children}</Providers>
      </body>
    </html>
  )
}
