"use client"

import React from "react"
import { RecoilRoot } from "recoil"
import { QueryClient, QueryClientProvider } from "@tanstack/react-query"
import { ThemeProvider } from "styled-components"
import { theme } from "@styles/theme"

const queryClient = new QueryClient()

export default function Providers({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <ThemeProvider theme={theme}>
      <RecoilRoot>
        <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
      </RecoilRoot>
    </ThemeProvider>
  )
}
