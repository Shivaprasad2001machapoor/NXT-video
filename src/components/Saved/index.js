import SaveContext from '../../context/SaveContext'
import './index.css'
import SavedVideoDetail from '../SavedVideoDetail'

const Saved = () => (
  <SaveContext.Consumer>
    {value => {
      const {saveList, darkMode} = value

      return (
        <div className={`saved-container ${darkMode ? 'dark-mode' : ''}`}>
          {saveList.map(eachVideo => (
            <SavedVideoDetail videoData={eachVideo} key={eachVideo.id} />
          ))}
        </div>
      )
    }}
  </SaveContext.Consumer>
)

export default Saved
