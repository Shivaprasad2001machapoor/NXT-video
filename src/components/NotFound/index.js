import SaveContext from '../../context/SaveContext' // Update the path to your SaveContext
import './index.css'

const NotFound = () => (
  <SaveContext.Consumer>
    {value => {
      const {darkMode} = value
      const notFoundImageSrc = darkMode
        ? 'https://assets.ccbp.in/frontend/react-js/nxt-watch-not-found-dark-theme-img.png'
        : 'https://assets.ccbp.in/frontend/react-js/nxt-watch-not-found-light-theme-img.png'

      return (
        <div className="not-found-container">
          <img
            src={notFoundImageSrc}
            alt="not found"
            className="not-found-img"
          />
          <h1>Page Not Found</h1>
          <p>We are sorry, the page you requested could not be found.</p>
        </div>
      )
    }}
  </SaveContext.Consumer>
)

export default NotFound
