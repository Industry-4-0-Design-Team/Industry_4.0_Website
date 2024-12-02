// Styles
import './Styles/App.css'

import Aos from 'aos'
import 'aos/dist/aos.css'

import { useEffect } from 'react'

// Pages
import LandingPage from './Pages/Landing'
import Navbar from './Components/Navbar'

import AboutAndMission from "./Pages/landing-page-sections/AboutAndMission"
import SponsorPage from './Pages/landing-page-sections/Sponsors';
import EventsPage from './Pages/landing-page-sections/Events';
import StoriesPage from './Pages/landing-page-sections/Stories';
import Footer from './Components/Footer';
import CompetitionPage from './Pages/landing-page-sections/Competition';
import TeamPage from './Pages/landing-page-sections/Team'

// this is so like the images are initially loaded to not cause lag later
import { preloadImages, teamData } from './utils/preloadImages.js';  // Import teamData


function App() {
  useEffect(() => {
    Aos.init()
  }, [])

  useEffect(() => {
    preloadImages(); // Preload team images
  }, []);

  return (
    <div className="app bg-[#1b1b1b] min-h-screen overflow-x-hidden overflow-y-hidden">
    <div className='bg-[#181818] relative'>
      <Navbar/>
      <LandingPage/>
      <AboutAndMission/>
      <EventsPage/>
      <SponsorPage/>
      <StoriesPage/>
      <CompetitionPage/>
      <TeamPage teamData={teamData} />
      <Footer/>
    </div>
  </div>
  )
}

export default App
