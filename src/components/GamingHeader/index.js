import './index.css'
import {FaGamepad} from 'react-icons/fa'
import SaveContext from '../../context/SaveContext'

const GamingHeader = () => (
  <SaveContext.Consumer>
    {value => {
      const {darkMode} = value
      return (
        <nav className={`nav-bar ${darkMode ? 'dark-mode' : ''}`}>
          <FaGamepad size={32} color="red" />
          <h1 className={`gaming ${darkMode ? 'dark-mode-text' : ''}`}>
            Gaming
          </h1>
        </nav>
      )
    }}
  </SaveContext.Consumer>
)

export default GamingHeader
