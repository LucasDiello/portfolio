import { useEffect } from 'react'
import './App.css'
import About from './routes/About'
import Perfil from './routes/Perfil'
import Projects from './routes/Projects'
import { ProjectsContent } from './routes/ProjectsContent'
import Skills from './routes/Skills'
import SkillsContent from './routes/SkillsContent'

function App() {

  useEffect(() => {
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        const el = entry.target
        if (entry.isIntersecting) {
          el.classList.add('show')
        } else {
          el.classList.remove('show')
          console.log('hide')
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
          console.log('hide')
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
  
  return (
    <div className='App'>
        <Perfil />
        <About />
        <Projects />
        <ProjectsContent />
        <Skills />
        <SkillsContent />
      </div>
  )
}

export default App
