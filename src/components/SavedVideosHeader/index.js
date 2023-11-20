import {FaSave} from 'react-icons/fa'

const SavedVideosHeader = () => (
  <nav className="nav-bar">
    <FaSave size={32} color="green" />
    <h1 className="saved-videos">Saved Videos</h1>
  </nav>
)

export default SavedVideosHeader
