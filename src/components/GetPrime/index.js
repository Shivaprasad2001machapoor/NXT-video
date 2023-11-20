import {Component} from 'react'
import './index.css'

class GetPrime extends Component {
  constructor(props) {
    super(props)

    this.state = {
      isPopupOpen: true,
    }
  }

  closePopup = () => {
    this.setState({isPopupOpen: false})
  }

  render() {
    const {isPopupOpen} = this.state
    return (
      <div>
        {isPopupOpen && (
          <div className="popUp-container">
            <div>
              <img
                className="logo-img"
                src="https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-light-theme-img.png"
                alt="nxt watch logo"
              />
              <p>Buy Nxt Watch Premium prepaid plans with UPI</p>
              <button type="button" className="buy-premium">
                GET IT NOW
              </button>
            </div>
            <button
              type="button"
              className="popup-close-button"
              onClick={() => {
                this.closePopup()
              }}
            >
              X
            </button>
          </div>
        )}
      </div>
    )
  }
}

export default GetPrime

// GetPrime.js
/* import {Component} from 'react'
import Popup from 'reactjs-popup'
import './index.css'

class GetPrime extends Component {
  constructor(props) {
    super(props)

    this.state = {
      isPopupOpen: false,
    }
  }

  componentDidMount() {
    // Open the popup when the component mounts
    this.setState({isPopupOpen: true})
  }

  closePopup = () => {
    this.setState({isPopupOpen: false})
  }

  render() {
    const {isPopupOpen} = this.state

    return (
      <div className="popUp">
        <Popup
          modal
          open={isPopupOpen}
          closeOnDocumentClick={false}
          closeOnEscape={false}
          contentStyle={{
            padding: '20px',
          }}
          overlayStyle={{zIndex: 9999}} /* Adjust the z-index if needed 
          className="custom-popup" /* Apply the custom CSS class 
        >
          {close => (
            <div className="popUp-container">
              <div>
                <img
                  className="logo-img"
                  src="https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-light-theme-img.png"
                  alt="website logo"
                />
                <p>Buy NXT Watch premium prepaid plans with UPI</p>
                <button type="button" className="buy-premium">
                  GET IT NOW
                </button>
              </div>
              <button
                type="button"
                className="popup-close-button"
                onClick={() => {
                  this.closePopup()
                  close() // This line uses the 'close' function
                }}
              >
                X
              </button>
            </div>
          )}
        </Popup>
      </div>
    )
  }
}

export default GetPrime

/* import {Component} from 'react'
import Popup from 'reactjs-popup'
import './index.css'

class GetPrime extends Component {
  constructor(props) {
    super(props)

    this.state = {
      isPopupOpen: false,
    }
  }

  componentDidMount() {
    // Open the popup when the component mounts
    this.setState({isPopupOpen: true})
  }

  closePopup = () => {
    this.setState({isPopupOpen: false})
  }

  render() {
    const {isPopupOpen} = this.state

    return (
      <div className="popUp">
        <Popup
          modal
          open={isPopupOpen}
          closeOnDocumentClick={false}
          closeOnEscape={false}
          contentStyle={{
            padding: '20px',
          }}
        >
          {close => (
            <div className="popUp-container">
              <div>
                <img
                  className="logo-img"
                  src="https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-light-theme-img.png"
                  alt="website logo"
                />
                <p>Buy NXT Watch primium prepaid plans with UPI</p>
                <button type="button" className="buy-primium">
                  GET IT NOW
                </button>
              </div>
              <button
                type="button"
                className="popup-close-button"
                onClick={() => {
                  this.closePopup()
                  close() // This line uses the 'close' function
                }}
              >
                X
              </button>
            </div>
          )}
        </Popup>
      </div>
    )
  }
}

export default GetPrime
*/
