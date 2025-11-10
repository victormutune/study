import type { ReactNode } from "react"
import "@/styles/globals.css"
import { ThemeProvider } from "@/components/theme-provider"
import AppWrapper from "@/components/app-wrapper"

export default function AppLayout({
  children,
}: {
  children: ReactNode
}) {
  return (
    <div className="font-sans">
      <ThemeProvider attribute="class" defaultTheme="light" enableSystem>
        <AppWrapper>
          {children}
        </AppWrapper>
      </ThemeProvider>
    </div>
  )
}
