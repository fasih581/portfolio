import { Routes, Route } from "react-router-dom";

import MainPage from './components/NavMenu/MainPage/MainPage'
import ContactPage from './components/NavMenu/Contact/Contact'
import ProjectPage from './components/NavMenu/ProjectPage/ProjectPage'
import AboutPage from './components/NavMenu/About/AboutPage'

import './App.css'

function App() {

  return (
    <>
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/About" element={<AboutPage />} />
        <Route path="/Contact" element={<ContactPage />} />
        <Route path="/Project" element={<ProjectPage />} />
      </Routes>
    </>
  )
}

export default App
