import './App.css'
import './navbarh.css'
import Welcome from './Welcome.jsx'
import About from './About.jsx'
import Summary from './Summary.jsx'
import Skills from './Skills.jsx'
import Education from './Education.jsx'
import BottomPanel from './BottomPanel.jsx'
import { HashLink as Link} from 'react-router-hash-link'

export default function App() {
  return (
    <>
    <div className="navbar">
      <Link to="welcome-page" id="name-link"><h2 id="navbar-name">Bailey Arick</h2></Link>
      <ul className="navbar-list">
        <Link className="navbar-link" id="navto-home" to="#home-page"><p id="navbar-item">Home</p></Link>
        <Link className="navbar-link" id="navto-about" to="#about-page"><p id="navbar-item">About</p></Link>
        <Link className="navbar-link" id="navto-contact" to='#contact-page'><p id="navbar-item">Contact</p></Link>
      </ul>
    </div>
    <div className="container">
      <Welcome/>
      <About/>
      <Summary/>
      <Skills/>
      <Education/>
    </div>
    <BottomPanel/>
    </>
  )
}
