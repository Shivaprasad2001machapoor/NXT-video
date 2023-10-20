import './index.css'
import {FaGamepad} from 'react-icons/fa'

const GamingHeader = () => (
  <nav className="nav-bar">
    <FaGamepad size={32} color="red" />
    <p className="gameing">Gameing</p>
  </nav>
)
export default GamingHeader
