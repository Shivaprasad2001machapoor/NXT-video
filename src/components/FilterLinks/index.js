import {Link} from 'react-router-dom'
import {FaHome, FaFire, FaGamepad, FaSave} from 'react-icons/fa'
import './index.css'
import SaveContext from '../../context/SaveContext'

const FilterLinks = () => (
  <SaveContext.Consumer>
    {value => {
      const {darkMode} = value

      const darkModeClass = darkMode ? 'dark-mode' : ''

      const links = [
        {to: '/', text: 'Home', icon: <FaHome />},
        {to: '/trending', text: 'Trending', icon: <FaFire />},
        {to: '/gaming', text: 'Gaming', icon: <FaGamepad />},
        {to: '/saved-videos', text: 'Saved videos', icon: <FaSave />},
      ]

      return (
        <div className={`filter-content ${darkModeClass}`}>
          <div className="filter-link-container">
            {links.map(link => (
              <Link
                to={link.to}
                className={`nav-link ${darkModeClass}`}
                key={link.to}
              >
                {link.icon}
                {link.text}
              </Link>
            ))}
          </div>
          <div className="contact-container">
            <p>CONTACT US</p>
            <div className="app-logos">
              <img
                className="contact-app-logo"
                src="https://assets.ccbp.in/frontend/react-js/nxt-watch-facebook-logo-img.png"
                alt="facebook logo"
              />
              <img
                className="contact-app-logo"
                src="https://assets.ccbp.in/frontend/react-js/nxt-watch-twitter-logo-img.png"
                alt="twitter logo"
              />
              <img
                className="contact-app-logo"
                src="https://assets.ccbp.in/frontend/react-js/nxt-watch-linked-in-logo-img.png"
                alt="linked in logo"
              />
            </div>
            <p>Enjoy! Now to see your channels and recommendations!</p>
          </div>
        </div>
      )
    }}
  </SaveContext.Consumer>
)

export default FilterLinks

/* import {Link} from 'react-router-dom'
import './index.css'
import SaveContext from '../../context/SaveContext'

const FilterLinks = () => (
  <SaveContext.Consumer>
    {value => {
      const {darkMode} = value

      const darkModeClass = darkMode ? 'dark-mode' : ''

      return (
        <div className={`filter-content ${darkModeClass}`}>
          <Link to="/" className={`nav-link ${darkModeClass}`}>
            Home
          </Link>
          <Link to="/trending" className={`nav-link ${darkModeClass}`}>
            Trending
          </Link>
          <Link to="/gaming" className={`nav-link ${darkModeClass}`}>
            Gaming
          </Link>
          <Link to="/saved" className={`nav-link ${darkModeClass}`}>
            Saved
          </Link>
        </div>
      )
    }}
  </SaveContext.Consumer>
)

export default FilterLinks

/* import {Link} from 'react-router-dom'
import './index.css'
import SaveContext from '../../context/SaveContext'

const FilterLinks = () => (
  <SaveContext.Consumer>
    {value => {
      const {darkMode} = value

      return (
        <div className="filter-content">
          <Link to="/" className="nav-link">
            Home
          </Link>
          <Link to="/trending" className="nav-link">
            Trending
          </Link>
          <Link to="/gaming" className="nav-link">
            Gaming
          </Link>
          <Link to="/saved" className="nav-link">
            Saved
          </Link>
        </div>
      )
    }}
  </SaveContext.Consumer>
)
export default FilterLinks
*/
