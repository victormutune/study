// Not using Next.js — define a local Metadata type instead of importing from "next"
type Metadata = {
  title?: string
  description?: string
  [key: string]: unknown
}
import ResearchClientPage from "./research-client"

export const metadata: Metadata = {
  title: "Research - STEP Study",
  description: "Explore our comprehensive research data and analytics from the STEP Study project across Tanzania.",
}

export default function ResearchPage() {
  return <ResearchClientPage />
}
