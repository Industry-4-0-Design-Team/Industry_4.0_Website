// Styles
import './Styles/App.css'

// Pages
import LandingPage from './Pages/Landing'
import Navbar from './Components/Navbar'

function App() {

  return (
    <div className="app bg-diamonds h-fit">
      <Navbar />
      <LandingPage />
    </div>
  )
}

export default App
