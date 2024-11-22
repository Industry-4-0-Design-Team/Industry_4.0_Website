// Styles
import './Styles/App.css'

// Pages
import LandingPage from './Pages/Landing'
import Navbar from './Components/Navbar'

import AboutPage from './Pages/landing-page-sections/About'
import MissionPage from './Pages/landing-page-sections/Mission';
import SponserPage from './Pages/landing-page-sections/Sponsers';
import EventsPage from './Pages/landing-page-sections/Events';

function App() {

  return (
    <div className="app bg-[#1b1b1b] min-h-screen overflow-x-hidden overflow-y-hidden">
    <div className='bg-[#181818] relative'>
      <Navbar/>
      <LandingPage/>
      <AboutPage/>
      <MissionPage/>
      <EventsPage/>
      <SponserPage/>
    </div>
  </div>
  )
}

export default App
