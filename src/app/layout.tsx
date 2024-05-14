import React from "react"
import type { Metadata } from "next"
import Providers from "./providers"
import StyledComponentsRegistry from "@lib/registry"
import "@styles/globals.css"

export const metadata: Metadata = {
  title: "Next.js Boilerplate",
  description: "Next.js App Router Boilerplate",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body>
        <StyledComponentsRegistry>
          <Providers>{children}</Providers>
        </StyledComponentsRegistry>
      </body>
    </html>
  )
}
