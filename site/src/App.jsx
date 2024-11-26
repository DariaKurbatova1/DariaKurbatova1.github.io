import './App.css'
import Experiences from './Experiences'
import Header from './Header'
import Intro from './Intro'
import Projects from './Projects'
import Skills from './Skills'
import Footer from './Footer'
import Contact from './Contact'
import DemoViewer from './DemoViewer'
import UnderConstruction from './UnderConstruction'
import TypingDemo from './TypingDemo'
import { LanguageProvider } from '../LanguageContext'

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {

  return (
    <>
    <LanguageProvider>
      <Router>
      
      
      <Routes>
        <Route path="/" element={
          <>
          <Header />
            <Intro />
            <Projects />
            <Experiences />
            <Skills />
            <Contact />
          </>
        } />
        <Route path="/demo" element={<DemoViewer />} />
        <Route path="/typingDemo" element={<TypingDemo />} />
        <Route path="/underConstruction" element={<UnderConstruction />} />
      </Routes>
      <Footer />
    </Router>
    </LanguageProvider>

    </>
  )
}

export default App
