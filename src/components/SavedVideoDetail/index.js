import {Component} from 'react'
import Cookies from 'js-cookie'
import SaveContext from '../../context/SaveContext'
import './index.css'

const apiStatusConstants = {
  initial: 'INITIAL',
  success: 'SUCCESS',
  failure: 'FAILURE',
  inProgress: 'IN_PROGRESS',
}

class SavedVideoDetail extends Component {
  state = {
    savedVideoData: {},
    apiStatus: apiStatusConstants.initial,
  }

  componentDidMount() {
    this.getSavedVideoData()
  }

  getSavedVideoData = async () => {
    const {videoId} = this.props
    const {id} = videoId
    const jwtToken = Cookies.get('jwt_token')
    const apiUrl = `https://apis.ccbp.in/videos/${id}`
    const options = {
      headers: {
        Authorization: `Bearer ${jwtToken}`,
      },
      method: 'GET',
    }

    this.setState({
      apiStatus: apiStatusConstants.inProgress,
    })

    try {
      const response = await fetch(apiUrl, options)

      if (response.ok) {
        const fetchedData = await response.json()
        const updatedData = {
          id: fetchedData.video_details.id,
          title: fetchedData.video_details.title,
          videoUrl: fetchedData.video_details.video_url,
          thumbnailUrl: fetchedData.video_details.thumbnail_url,
          channel: fetchedData.video_details.channel,
          viewCount: fetchedData.video_details.view_count,
          publishedAt: fetchedData.video_details.published_at,
          description: fetchedData.video_details.description,
        }

        this.setState({
          savedVideoData: updatedData,
          apiStatus: apiStatusConstants.success,
        })
      } else if (response.status === 404) {
        this.setState({
          apiStatus: apiStatusConstants.failure,
        })
      }
    } catch (error) {
      console.error('Error fetching saved video details:', error)
      this.setState({
        apiStatus: apiStatusConstants.failure,
      })
    }
  }

  render() {
    return (
      <SaveContext.Consumer>
        {value => {
          const {darkMode} = value
          const {savedVideoData, apiStatus} = this.state
          const {channel} = savedVideoData

          return (
            <div
              className={`saved-video-detail-container ${
                darkMode ? 'dark' : ''
              }`}
            >
              {apiStatus === apiStatusConstants.inProgress && <p>Loading...</p>}
              {apiStatus === apiStatusConstants.success && (
                <div className="saved-videos-container">
                  <div className="saved-video">
                    <img
                      src={savedVideoData.thumbnailUrl}
                      alt="saved video"
                      className="thumbanil_saved"
                    />
                    <div className="saved-video-desc">
                      <p>{savedVideoData.title}</p>
                      <div className="saved-video-channel-details">
                        <p>{channel.name}</p>
                        <p>{channel.subscriber_count}</p>
                      </div>
                    </div>
                  </div>
                </div>
              )}
              {apiStatus === apiStatusConstants.failure && (
                <div>
                  <p>Error loading saved video details</p>
                </div>
              )}
            </div>
          )
        }}
      </SaveContext.Consumer>
    )
  }
}

export default SavedVideoDetail

/* import './index.css'
import SaveContext from '../../context/SaveContext'

const SavedVideoDetail = props => (
  <SaveContext.Consumer>
    {value => {
      const {darkMode} = value
      const {videoId} = props
      const {id} = videoId

      return (
        <div>
          <p>{id}</p>
        </div>
      )
    }}
  </SaveContext.Consumer>
)

export default SavedVideoDetail
*/
