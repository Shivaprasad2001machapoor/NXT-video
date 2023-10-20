import {Link} from 'react-router-dom'
import './index.css'
import SaveContext from '../../context/SaveContext'

const FilterLinks = () => (
  <SaveContext.Consumer>
    {value => {
      const {darkMode} = value

      // Define the class name based on darkMode
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
