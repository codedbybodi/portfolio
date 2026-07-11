import Hero from "./components/Hero"
import Stack from "./components/Stack"
import Projects from "./components/FeaturedProjects"
import ScrollReveal from "./components/ScrollReveal"
import InteractiveDotGrid from "./components/InteractiveDotGrid"
import CustomCursor from "./components/CustomCursor"
import Education from "./components/Education"
import Contact from "./components/Contact"

function App() {
  return (
    <main className="h-screen w-screen overflow-y-scroll snap-y snap-mandatory scroll-smooth">
      <CustomCursor />
      <InteractiveDotGrid />

      <section className="snap-start min-h-screen flex items-center justify-center">
        <ScrollReveal delay={80} className="w-full">
          <Hero />
        </ScrollReveal>
      </section>

      <section className="snap-start min-h-screen flex items-center justify-center">
        <ScrollReveal delay={120} className="w-full">
          <Projects />
        </ScrollReveal>
      </section>

      <section className="snap-start min-h-screen flex items-center justify-center">
        <ScrollReveal delay={120} className="w-full">
          <Stack />
        </ScrollReveal>
      </section>

      <section className="snap-start min-h-screen flex items-center justify-center">
        <ScrollReveal delay={120} className="w-full">
          <Education />
        </ScrollReveal>
      </section>

      <section className="snap-start min-h-screen flex- items-center justify-center">
        <ScrollReveal>
          <Contact />
        </ScrollReveal>
      </section>
    </main>
  );
}

export default App;
