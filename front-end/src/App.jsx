// Styles
import './Styles/App.css'

// Pages
import LandingPage from './Pages/Landing'
import AboutPage from './Pages/About'
import Navbar from './Components/Navbar'

function App() {

  return (
    <div className="app">
      <Navbar />
      <LandingPage />
      <AboutPage/>
    </div>
  )
}

export default App
