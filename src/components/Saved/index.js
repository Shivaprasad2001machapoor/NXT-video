import {Component} from 'react'
import SaveContext from '../../context/SaveContext'
import './index.css'
import SavedVideoDetail from '../SavedVideoDetail'
import Header from '../Header'
import FilterLinks from '../FilterLinks'
import SavedVideosHeader from '../SavedVideosHeader'

class Saved extends Component {
  renderEmptyView = () => (
    <div className="empty-view-container">
      <div className="filters">
        <FilterLinks />
      </div>
      <div className="content-header">
        <SavedVideosHeader />
        <div>
          <img
            src="https://assets.ccbp.in/frontend/react-js/nxt-watch-no-saved-videos-img.png" // Replace with the actual image URL
            alt="no saved videos"
            className="empty-view-img"
          />
          <h1 className="empty-view-heading">No saved videos found</h1>
          <p className="empty-view-description">
            Save your videos by clicking a button
          </p>
        </div>
      </div>
    </div>
  )

  renderSavedVideos = saveList => (
    <div className="saved-videos-container">
      <FilterLinks />
      <div className="saved-videos">
        <div className="saved-videos-header-and-video">
          <SavedVideosHeader />
        </div>
        {saveList.map(eachVideo => (
          <SavedVideoDetail videoId={eachVideo} key={eachVideo.id} />
        ))}
      </div>
    </div>
  )

  render() {
    return (
      <SaveContext.Consumer>
        {value => {
          const {saveList, darkMode} = value
          console.log(saveList.length)
          return (
            <div className={`saved-container ${darkMode ? 'dark-mode' : ''}`}>
              <Header />
              {saveList.length === 0
                ? this.renderEmptyView()
                : this.renderSavedVideos(saveList)}
            </div>
          )
        }}
      </SaveContext.Consumer>
    )
  }
}

export default Saved

/* import SaveContext from '../../context/SaveContext'
import './index.css'
import SavedVideoDetail from '../SavedVideoDetail'
import Header from '../Header'
import FilterLinks from '../FilterLinks'
import SavedVideosHeader from '../SavedVideosHeader'

const Saved = () => (
  <SaveContext.Consumer>
    {value => {
      const {saveList, darkMode} = value

      return (
        <div className={`saved-container ${darkMode ? 'dark-mode' : ''}`}>
          <Header />
          <div className="saved-videos-container">
            <FilterLinks />
            <div className="saved-videos">
              <div className="saved-videos-header-and-video">
                <SavedVideosHeader />
              </div>
              {saveList.map(eachVideo => (
                <SavedVideoDetail videoId={eachVideo} key={eachVideo.id} />
              ))}
            </div>
          </div>
        </div>
      )
    }}
  </SaveContext.Consumer>
)

export default Saved
*/
