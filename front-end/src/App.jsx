// Styles
import './Styles/App.css'

import Aos from 'aos'
import 'aos/dist/aos.css'

import { useEffect } from 'react'

// Pages
import LandingPage from './Pages/Landing'
import Navbar from './Components/Navbar'

import AboutAndMission from "./Pages/landing-page-sections/AboutAndMission"
import SponserPage from './Pages/landing-page-sections/Sponsers';
import EventsPage from './Pages/landing-page-sections/Events';
import StoriesPage from './Pages/landing-page-sections/Stories';
import Footer from './Components/Footer';
import CompetitionPage from './Pages/landing-page-sections/Competition';

function App() {
  useEffect(() => {
    Aos.init()
  }, [])
  return (
    <div className="app bg-[#1b1b1b] min-h-screen overflow-x-hidden overflow-y-hidden">
    <div className='bg-[#181818] relative'>
      <Navbar/>
      <LandingPage/>
      <AboutAndMission/>
      <EventsPage/>
      <SponserPage/>
      <StoriesPage/>
      <CompetitionPage/>
      <Footer/>
    </div>
  </div>
  )
}

export default App
