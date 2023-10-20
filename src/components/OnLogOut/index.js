import Popup from 'reactjs-popup'
import Cookies from 'js-cookie'
import {withRouter} from 'react-router-dom'

const OnLogOut = props => {
  const handleLogout = () => {
    const {history} = props
    Cookies.remove('jwt_token')
    history.replace('/login')
  }

  return (
    <Popup modal trigger={<button type="button">Logout</button>}>
      {close => (
        <div>
          <p>Are you sure you want to logout?</p>
          <button type="button" onClick={handleLogout}>
            Confirm
          </button>
          <button type="button" onClick={close}>
            Close
          </button>
        </div>
      )}
    </Popup>
  )
}

export default withRouter(OnLogOut)

/* import Cookies from 'js-cookie'
import {withRouter} from 'react-router-dom'
import Popup from 'reactjs-popup'
import './index.css'

const OnLogOut = props => {
  const handleLogout = () => {
    const {history} = props
    Cookies.remove('jwt_token')
    history.replace('/login')
  }

  return (
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
            <p>Are you sure you want to logout?</p>
            <button
              type="button"
              className="buy-premium"
              onClick={handleLogout}
            >
              Confirm
            </button>
          </div>
          <button
            type="button"
            className="popup-close-button"
            onClick={() => {
              close()
            }}
          >
            Close
          </button>
        </div>
      )}
    </Popup>
  )
}
export default withRouter(OnLogOut);
*/
