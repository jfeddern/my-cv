// ABOUTME: Main CV application component
// ABOUTME: Renders all sections of the modern CV website

import { useState, useEffect } from 'react'
import Header from './components/Header'
import Hero from './components/Hero'
import Skills from './components/Skills'
import Projects from './components/Projects'
import Contact from './components/Contact'
import Footer from './components/Footer'

function App() {
  useEffect(() => {
    // Force dark mode
    document.documentElement.classList.add('dark')
  }, [])

  return (
    <div className="min-h-screen dark">
      <Header />
      <main>
        <Hero />
        <Skills />
        <Projects />
        <Contact />
      </main>
      <Footer />
    </div>
  )
}

export default App
