import React from 'react'
import 'leaflet/dist/leaflet.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { DarkModeProvider } from './DarkModeContext';
import Section1 from './components/Section1/Section1'
import Contact from './components/Section1/Contactpage/Contact'
import Section2 from './components/Section2/Section2'
import Section3 from './components/Section3/Section3'
import Section4 from './components/Section4/Section4'
import Section5 from './components/Section5/Section5'
import Section6 from './components/Section6/Section6'
import Footer from './components/Footer/Footer'
import './App.css'


const App = () => {

  return (
    <DarkModeProvider>
      <BrowserRouter>
        <Routes>
          <Route
            path="/"
            element={
              <>
                <Section1 />
                <Section2 />
                <Section3 />
                <Section4 />
                <Section5 />
                <Section6 />
                <Footer />
              </>
            }
          />
            <Route path="/contact" element={<Contact />} />
        </Routes>
      </BrowserRouter>
    </DarkModeProvider>
  )
}

export default App