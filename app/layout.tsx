import React from "react"
import type { Metadata } from 'next'
import { Instrument_Sans, Instrument_Serif, JetBrains_Mono } from 'next/font/google'
import './globals.css'

const instrumentSans = Instrument_Sans({ 
  subsets: ["latin"],
  variable: '--font-instrument'
});

const instrumentSerif = Instrument_Serif({ 
  subsets: ["latin"],
  weight: "400",
  variable: '--font-instrument-serif'
});

const jetbrainsMono = JetBrains_Mono({ 
  subsets: ["latin"],
  variable: '--font-jetbrains'
});

export const metadata: Metadata = {
  title: "Histeeria - The Reliability Layer for Production AI Agents",
  description: "Monitor, evaluate, alert, and improve your AI agents from one command center. Catch mistakes, measure judgment, and build agents you can trust.",
  keywords: [
    "AI agents",
    "agent monitoring",
    "agent evaluation",
    "AI safety",
    "hallucination detection",
    "adversarial stress testing",
    "agent debugging",
    "production AI",
    "machine judgment",
    "LLM security"
  ],
  authors: [{ name: "Histeeria" }],
  creator: "Histeeria Inc.",
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon.ico",
    apple: "/assets/logo-dark.png",
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://histeeria.com",
    title: "Histeeria - The Reliability Layer for Production AI Agents",
    description: "Monitor, evaluate, alert, and improve your AI agents from one command center. Catch mistakes, measure judgment, and build agents you can trust.",
    siteName: "Histeeria",
    images: [
      {
        url: "/assets/logo-light.png",
        width: 1200,
        height: 630,
        alt: "Histeeria Logo",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Histeeria - The Reliability Layer for Production AI Agents",
    description: "Monitor, evaluate, alert, and improve your AI agents from one command center. Catch mistakes, measure judgment, and build agents you can trust.",
    images: ["/assets/logo-light.png"],
    creator: "@histeeria",
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={`${instrumentSans.variable} ${instrumentSerif.variable} ${jetbrainsMono.variable} font-sans antialiased`}>
        {children}
      </body>
    </html>
  )
}
