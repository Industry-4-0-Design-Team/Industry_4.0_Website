// Styles
import './Styles/App.css'

// Pages
import LandingPage from './Pages/Landing'
import Navbar from './Components/Navbar'

import AboutPage from './Pages/landing-page-sections/About'
import MissionPage from './Pages/landing-page-sections/Mission';
import SponserPage from './Pages/landing-page-sections/Sponsers';

function App() {

  return (
    <div className="app bg-[#1b1b1b] min-h-screen overflow-x-hidden overflow-y-hidden">
      <Navbar />
      <LandingPage />
      <AboutPage />
      <MissionPage />
      <SponserPage/>
    </div>
  )
}

export default App
