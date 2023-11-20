// Header.js
import {Component} from 'react'
import {Link, withRouter} from 'react-router-dom'
import {FaRegMoon, FaSun} from 'react-icons/fa'
import Popup from 'reactjs-popup'
import Cookies from 'js-cookie'
import './index.css'
import SaveContext from '../../context/SaveContext'

class Header extends Component {
  render() {
    return (
      <SaveContext.Consumer>
        {value => {
          const {darkMode, toggleDarkMode} = value
          const darkModeClass = darkMode ? 'dark-mode' : ''

          const toggleDarkModeIcon = () => {
            toggleDarkMode(!darkMode)
          }

          const handleLogout = () => {
            const {history} = this.props
            Cookies.remove('jwt_token')
            history.replace('/login')
          }

          return (
            <nav className={`nav-header ${darkModeClass}`}>
              <div className={`nav-bar-large-container ${darkModeClass}`}>
                <Link to="/">
                  <img
                    className="website-logo"
                    src={
                      darkMode
                        ? 'https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-dark-theme-img.png'
                        : 'https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-light-theme-img.png'
                    }
                    alt="website logo"
                  />
                </Link>
                <ul className={`nav-menu ${darkModeClass}`}>
                  <li className="nav-menu-item">
                    <button
                      type="button"
                      className="moon-button"
                      data-testid="theme"
                      onClick={toggleDarkModeIcon}
                    >
                      {darkMode ? (
                        <FaSun color="white" /> // Set color to white for FaSun
                      ) : (
                        <FaRegMoon />
                      )}
                    </button>
                  </li>

                  <li className={`nav-menu-item ${darkModeClass}`}>
                    <img
                      src="https://assets.ccbp.in/frontend/react-js/nxt-watch-profile-img.png"
                      alt="profile"
                      className="profileimg"
                    />
                  </li>
                </ul>
                <Popup
                  modal
                  trigger={
                    <button
                      type="button"
                      className={`logout-desktop-btn ${darkModeClass}`}
                    >
                      Logout
                    </button>
                  }
                >
                  {close => (
                    <div className="popUp">
                      <div>
                        <p>Are you sure, you want to logout</p>
                        <button type="button" onClick={handleLogout}>
                          Confirm
                        </button>
                        <button type="button" onClick={close}>
                          Cancel
                        </button>
                      </div>
                    </div>
                  )}
                </Popup>
              </div>
            </nav>
          )
        }}
      </SaveContext.Consumer>
    )
  }
}

export default withRouter(Header)

/* import {Component} from 'react'
import {Link, withRouter} from 'react-router-dom'
import {FaRegMoon} from 'react-icons/fa'
import Popup from 'reactjs-popup'
import Cookies from 'js-cookie'
import './index.css'
import SaveContext from '../../context/SaveContext'

class Header extends Component {
  render() {
    return (
      <SaveContext.Consumer>
        {value => {
          const {darkMode, toggleDarkMode} = value
          const darkModeClass = darkMode ? 'dark-mode' : ''

          const clockOntoggleDarkMode = () => {
            toggleDarkMode(darkMode)
          }

          const handleLogout = () => {
            const {history} = this.props
            Cookies.remove('jwt_token')
            history.replace('/login')
          }

          return (
            <nav className={`nav-header ${darkModeClass}`}>
              <div className={`nav-bar-large-container ${darkModeClass}`}>
                <Link to="/">
                  <img
                    className="website-logo"
                    src={
                      darkMode
                        ? 'https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-dark-theme-img.png'
                        : 'https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-light-theme-img.png'
                    }
                    alt="website logo"
                  />
                </Link>
                <ul className={`nav-menu ${darkModeClass}`}>
                  <li className="nav-menu-item">
                    <button
                      type="button"
                      className="moon-button"
                      onClick={clockOntoggleDarkMode}
                    >
                      <FaRegMoon />
                    </button>
                  </li>

                  <li className={`nav-menu-item ${darkModeClass}`}>
                    <img
                      src="https://assets.ccbp.in/frontend/react-js/nxt-watch-profile-img.png"
                      alt="profile"
                      className="profileimg"
                    />
                  </li>
                </ul>
                <Popup
                  modal
                  trigger={
                    <button
                      type="button"
                      className={`logout-desktop-btn ${darkModeClass}`}
                    >
                      Logout
                    </button>
                  }
                >
                  {close => (
                    <div className="popUp">
                      <div>
                        <p>Are you sure, you want to logout</p>
                        <button type="button" onClick={handleLogout}>
                          Confirm
                        </button>
                        <button type="button" onClick={close}>
                          Cancel
                        </button>
                      </div>
                    </div>
                  )}
                </Popup>
              </div>
            </nav>
          )
        }}
      </SaveContext.Consumer>
    )
  }
}

export default withRouter(Header)

/* import {Component} from 'react'
import {Link, withRouter} from 'react-router-dom'
import {FaRegMoon} from 'react-icons/fa'
import Popup from 'reactjs-popup'
import Cookies from 'js-cookie'
import './index.css'
import SaveContext from '../../context/SaveContext'

class Header extends Component {
  render() {
    return (
      <SaveContext.Consumer>
        {value => {
          const {darkMode, toggleDarkMode} = value
          const darkModeClass = darkMode ? 'dark-mode' : ''

          const clockOntoggleDarkMode = () => {
            toggleDarkMode(darkMode)
          }

          const handleLogout = () => {
            const {history} = this.props
            Cookies.remove('jwt_token')
            history.replace('/login')
          }

          return (
            <nav className={`nav-header ${darkModeClass}`}>
              <div className={`nav-bar-large-container ${darkModeClass}`}>
                <Link to="/">
                  <img
                    className="website-logo"
                    src="https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-light-theme-img.png"
                    alt="website logo"
                  />
                </Link>
                <ul className={`nav-menu ${darkModeClass}`}>
                  <li className="nav-menu-item">
                    <button
                      type="button"
                      className="moon-button"
                      onClick={clockOntoggleDarkMode}
                    >
                      <FaRegMoon />
                    </button>
                  </li>

                  <li className={`nav-menu-item ${darkModeClass}`}>
                    <img
                      src="https://assets.ccbp.in/frontend/react-js/nxt-watch-profile-img.png"
                      alt="profile"
                      className="profileimg"
                    />
                  </li>
                </ul>
                <Popup
                  modal
                  trigger={
                    <button
                      type="button"
                      className={`logout-desktop-btn ${darkModeClass}`}
                    >
                      Logout
                    </button>
                  }
                >
                  {close => (
                    <div className="popUp">
                      <div>
                        <p>Are you sure you want to logout?</p>
                        <button type="button" onClick={handleLogout}>
                          Confirm
                        </button>
                        <button type="button" onClick={close}>
                          Close
                        </button>
                      </div>
                    </div>
                  )}
                </Popup>
              </div>
            </nav>
          )
        }}
      </SaveContext.Consumer>
    )
  }
}

export default withRouter(Header)

/* import {Component} from 'react'
import {Link} from 'react-router-dom'
import {FaRegMoon} from 'react-icons/fa'
import OnLogOut from '../OnLogOut'
import './index.css'
import SaveContext from '../../context/SaveContext'

class Header extends Component {
  onClickLogout = () => {
    console.log('Logout button clicked') // Add this line
    return <OnLogOut />
  }

  render() {
    return (
      <SaveContext.Consumer>
        {value => {
          const {darkMode, toggleDarkMode} = value
          const darkModeClass = darkMode ? 'dark-mode' : ''

          const clockOntoggleDarkMode = () => {
            toggleDarkMode(darkMode)
          }

          return (
            <nav className={`nav-header ${darkModeClass}`}>
              <div className={`nav-bar-large-container ${darkModeClass}`}>
                <Link to="/">
                  <img
                    className="website-logo"
                    src="https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-light-theme-img.png"
                    alt="website logo"
                  />
                </Link>
                <ul className={`nav-menu ${darkModeClass}`}>
                  <li className="nav-menu-item">
                    <button
                      type="button"
                      className="moon-button"
                      onClick={clockOntoggleDarkMode}
                    >
                      <FaRegMoon />
                    </button>
                  </li>

                  <li className={`nav-menu-item ${darkModeClass}`}>
                    <img
                      src="https://assets.ccbp.in/frontend/react-js/nxt-watch-profile-img.png"
                      alt="profile"
                      className="profileimg"
                    />
                  </li>
                </ul>
                <button
                  type="button"
                  className={`logout-desktop-btn ${darkModeClass}`}
                  onClick={this.onClickLogout}
                >
                  Logout
                </button>
              </div>
            </nav>
          )
        }}
      </SaveContext.Consumer>
    )
  }
}

export default Header

 (import {Link} from 'react-router-dom'
import {FaRegMoon} from 'react-icons/fa'
import OnLogOut from '../OnLogOut'
import './index.css'

const Header = () => {
  const onClickLogout = () => <OnLogOut />

  return (
    <nav className="nav-header">
      <div className="nav-bar-large-container">
        <Link to="/">
          <img
            className="website-logo"
            src="https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-light-theme-img.png"
            alt="website logo"
          />
        </Link>
        <ul className="nav-menu">
          <li className="nav-menu-item">
            <button type="button" className="moon-button">
              <FaRegMoon />
            </button>
          </li>

          <li className="nav-menu-item">
            <img
              src="https://assets.ccbp.in/frontend/react-js/nxt-watch-profile-img.png"
              alt="profile"
              className="profileimg"
            />
          </li>
        </ul>
        <button
          type="button"
          className="logout-desktop-btn"
          onClick={onClickLogout}
        >
          Logout
        </button>
      </div>
    </nav>
  )
}

export default Header) */

/* import {Link, withRouter} from 'react-router-dom'
import Popup from 'reactjs-popup'
import Cookies from 'js-cookie'
import {FaRegMoon} from 'react-icons/fa'

import './index.css'

const Header = props => {
  const onClickLogout = () => (
    <div className="popUp">
      <Popup
        modal
        closeOnDocumentClick={false}
        closeOnEscape={false}
        contentStyle={{
          padding: '20px',
        }}
        overlayStyle={{zIndex: 9999}}
        className="custom-popup"
      >
        {close => (
          <div className="popUp-container">
            <div>
              <p>Buy NXT Watch premium prepaid plans with UPI</p>
              <button type="button" className="buy-premium">
                GET IT NOW
              </button>
            </div>
            <button
              type="button"
              className="popup-close-button"
              onClick={() => {
                close()
              }}
            >
              X
            </button>
          </div>
        )}
      </Popup>
    </div>
  )

  return (
    <nav className="nav-header">
      <div className="nav-bar-large-container">
        <Link to="/">
          <img
            className="website-logo"
            src="https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-light-theme-img.png"
            alt="website logo"
          />
        </Link>
        <ul className="nav-menu">
          <li className="nav-menu-item">
            <button type="button" className="moon-button">
              <FaRegMoon />
            </button>
          </li>

          <li className="nav-menu-item">
            <img
              src="https://assets.ccbp.in/frontend/react-js/nxt-watch-profile-img.png"
              alt="profile"
              className="profileimg"
            />
          </li>
        </ul>
        <button
          type="button"
          className="logout-desktop-btn"
          onClick={onClickLogout}
        >
          Logout
        </button>
      </div>
    </nav>
  )
}

export default withRouter(Header)

/* const {history} = props
    Cookies.remove('jwt_token')
    history.replace('/login') */
