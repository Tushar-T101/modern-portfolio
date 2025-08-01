import Hero from './components/Hero'
import Experience from './components/Experience'
import Projects from './components/Projects'
import Contact from './components/Contact'
import Skills from './components/Skills'
import Navbar from './components/Navbar';

function App() {
  return (
    <div className="bg-white dark:bg-gray-950 text-gray-900 dark:text-gray-100 min-h-screen transition-colors duration-500">
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
