import { useState } from 'react'
import heroImg from './assets/hero.png'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import './App.css'

import Nav from './components/layout/Nav';
import About from './sections/About';
import Skills from './sections/Skills';
import Experience from './sections/Experience';
import Projects from './sections/Projects';
import './App.css';

function App() {
  return (
    <>
      <Nav />
      <main>
        <About />
        <Skills />
        <Experience />
        <Projects />
      </main>
    </>
  );
}

export default App
