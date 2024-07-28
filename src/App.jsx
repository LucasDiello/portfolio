import { useEffect } from 'react'
import './App.css'
import About from './components/About'
import Perfil from './components/Perfil'
import Projects from './components/Projects'
import ProjectsContent from './components/ProjectsContent'
import Skills from './components/Skills'
import SkillsContent from './components/SkillsContent'
import Contact from './components/Contact'
import Footer from './components/Footer'
import transition from './transition'
import { AnimatePresence } from 'framer-motion'
import Header from './components/Header'
import BackEnd from './components/BackEnd'
import LanguageSwitcher from './components/SwitcherLanguage'

function App() {

  useEffect(() => {
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        const el = entry.target
        if (entry.isIntersecting) {
          el.classList.add('show')
        } else {
          el.classList.remove('show')
        }
      })
    })
    document.querySelectorAll('.show').forEach(el => {
      observer.observe(el)
    }
    )
    const observer2 = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        const el = entry.target
        if (entry.isIntersecting) {
          el.classList.add('show-projects')
          el.classList.remove('hidd-projects')
        } else {
          el.classList.remove('show-projects')
          el.classList.add('hidd-projects')
        }
      })
            
    })

    document.querySelectorAll('.show-projects').forEach(el => {
      observer2.observe(el)
    }
  )
    return () => {
      document.querySelectorAll('.show').forEach(el => {
        observer.unobserve(el)
      })

      document.querySelectorAll('.show-projects').forEach(el => {
        observer2.unobserve(el)
      })
      
    }

  }, [])
  const TransitionedPerfil = transition(Perfil);

  return (
    <div className='App'>
            <div className="absolute z-50 top-0 right-0">
        <LanguageSwitcher />
      </div>
      <AnimatePresence mode='wait'>
        <TransitionedPerfil />
        <About />
        <Projects />
        <ProjectsContent />
        <Header />
        <BackEnd />
        <Skills />
        <SkillsContent />
        <Contact />
        <Footer />
      </AnimatePresence>
      </div>
  )
}

export default App
