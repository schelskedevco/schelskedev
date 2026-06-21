import localFont from "next/font/local"
import { Metadata } from "next"

import { ThemeProvider } from "@/components/theme-provider"
import { cn } from "@/lib/utils"

import "./globals.css"

const chicago = localFont({
  src: "../public/fonts/ChiKareGo2.ttf",
  variable: "--font-sans",
  display: "swap",
})

export const metadata: Metadata = {
  title: "Joe Schelske",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={cn("antialiased", chicago.variable)}
    >
      <body>
        <ThemeProvider>{children}</ThemeProvider>
      </body>
    </html>
  )
}
