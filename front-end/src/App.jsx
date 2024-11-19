// Styles
import './Styles/App.css'

// Pages
import LandingPage from './Pages/Landing'
import Navbar from './Components/Navbar'
import AboutPage from './Pages/About'

function App() {

  return (
    <div className="app bg-diamonds h-fit">
      <Navbar />
      <LandingPage />
      <AboutPage />
    </div>
  )
}

export default App
