import { useState } from 'react'
import Hero from './components/Hero'
import Experience from './components/Experience'
import Projects from './components/Projects'
import Contact from './components/Contact'
import Skills from './components/Skills'
import Navbar from './components/Navbar';

function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
      <Navbar />
      <section
        id="hero"
        className="w-full flex items-center justify-center scroll-mt-16"
      >
        <Hero />
      </section>
      <section
        id="experience"
        className="w-full flex items-center justify-center scroll-mt-16"
      >
        <Experience />
      </section>
      <section
        id="projects"
        className="w-full flex items-center justify-center scroll-mt-16"
      >
        <Projects />
      </section>
      <section
        id="skills"
        className="w-full flex items-center justify-center scroll-mt-16"
      >
        <Skills />
      </section>
      <section
        id="contact"
        className="w-full flex items-center justify-center scroll-mt-16"
      >
        <Contact />
      </section>
    </div>
  )
}

export default App
