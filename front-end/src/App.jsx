// Styles
import "./Styles/App.css";

import Aos from "aos";
import "aos/dist/aos.css";

import { useEffect } from "react";
import { BrowserRouter, Route, Routes } from 'react-router'

// Pages
import LandingPage from "./Pages/Landing";
import Navbar from "./Components/Navbar";

import AboutAndMission from "./Pages/landing-page-sections/AboutAndMission";
import AlumniNetwork from "./Pages/landing-page-sections/AlumniNetwork.jsx";
import SponsorPage from "./Pages/landing-page-sections/Sponsors";
import Events from "./Pages/landing-page-sections/Events";
import StoriesPage from "./Pages/landing-page-sections/Stories";
import Footer from "./Components/Footer";
import CompetitionPage from "./Pages/landing-page-sections/Competition";
import Contact from "./Pages/landing-page-sections/Contact.jsx"
import TeamPage from "./Pages/landing-page-sections/Team";
import EventsPage from "./Pages/EventsPage.jsx";
import CountdownSection from "./Components/CompetitionCountdown.jsx";
// this is so like the images are initially loaded to not cause lag later
import { preloadImages, teamData } from "./utils/preloadImages.js"; // Import teamData

function App() {
  useEffect(() => {
    Aos.init();
  }, []);

  useEffect(() => {
    preloadImages(); // Preload team images
  }, []);

  return (
    <div className="app bg-[#1b1b1b] min-h-screen overflow-x-hidden overflow-y-hidden">
      <div className="bg-[#181818] relative">
        <BrowserRouter>
        <Navbar />
        <Routes>
          <Route exact path='/' element={
            <>
              <LandingPage />
              <AboutAndMission />
              <Events/>
              <SponsorPage />
              <StoriesPage />
              <AlumniNetwork />
              <CompetitionPage />
              <CountdownSection />
              <Contact/>
              <TeamPage teamData={teamData} />
              <Footer/>
            </>}/>
            <Route path='/events' element={<EventsPage/>}/>
        </Routes>
        </BrowserRouter>
      </div>
    </div>
  );
}

export default App;
