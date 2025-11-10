type Metadata = {
  title?: string
  description?: string
  [key: string]: unknown
}
import ResearchPage from "./research/page"

export const metadata: Metadata = {
  title: "Research Progress & Expertise - STEP Study",
  description:
    "Explore our research progress across Tanzanian zones, tutor projects, and team expertise in the STEP Study project.",
}

export default function Research() {
  return <ResearchPage />
}

