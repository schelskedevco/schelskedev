import { Figtree, Geist_Mono, Geist } from "next/font/google"

import "./globals.css"
import { ThemeProvider } from "@/components/theme-provider"
import { cn } from "@/lib/utils"

const geistMono = Geist_Mono({
  variable: "--font-mono",
  subsets: ["latin"],
})

const figtree = Figtree({
  variable: "--font-sans",
  subsets: ["latin"],
})

const geist = Geist({
  variable: "--font-geist",
  subsets: ["latin"],
})

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={cn(
        "antialiased",
        geistMono.variable,
        "font-sans",
        figtree.variable,
        geist.variable
      )}
    >
      <body>
        <ThemeProvider>{children}</ThemeProvider>
      </body>
    </html>
  )
}
