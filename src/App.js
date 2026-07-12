import { lazy, Suspense } from "react"
import Hero from "./components/Hero"

const Projects = lazy(() => import("./components/FeaturedProjects"))
const Stack = lazy(() => import("./components/Stack"))
const Education = lazy(() => import("./components/Education"))
const Contact = lazy(() => import("./components/Contact"))

function SectionFallback() {
  return <div className="min-h-[12rem]" aria-hidden="true" />
}

function App() {
  return (
    <main className="relative min-h-screen overflow-x-hidden bg-[#020403] text-white">
      <div className="relative z-10">
        <Hero />
        <Suspense fallback={<SectionFallback />}>
          <Projects />
          <Stack />
          <Education />
          <Contact />
        </Suspense>
      </div>
    </main>
  )
}

export default App
