import {Component} from 'react'

import Cookies from 'js-cookie'
import Loader from 'react-loader-spinner'
import Header from '../Header'
import VideoItemDetailedView from '../VideoItemDetailedView'
import FilterLinks from '../FilterLinks'
import './index.css'
import SaveContext from '../../context/SaveContext'

const apiStatusConstants = {
  initial: 'INITIAL',
  success: 'SUCCESS',
  failure: 'FAILURE',
  inProgress: 'IN_PROGRESS',
}

class VideoItemDetails extends Component {
  state = {
    videoData: [],
  }

  componentDidMount() {
    this.getVideoData()
  }

  getVideoData = async () => {
    const {match} = this.props
    const {params} = match
    const {id} = params

    this.setState({
      apiStatus: apiStatusConstants.inProgress,
    })

    const jwtToken = Cookies.get('jwt_token')
    const apiUrl = `https://apis.ccbp.in/videos/${id}`
    const options = {
      headers: {
        Authorization: `Bearer ${jwtToken}`,
      },
      method: 'GET',
    }

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
        videoData: updatedData,
        apiStatus: apiStatusConstants.success,
      })
    } else if (response.status === 404) {
      this.setState({
        apiStatus: apiStatusConstants.failure,
      })
    }
  }

  renderProductDetailsView = () => {
    const {videoData} = this.state
    return (
      <div className="container-video">
        <FilterLinks />
        <VideoItemDetailedView videoData={videoData} />
      </div>
    )
  }

  handleRetry = () => {
    this.getVideoData()
  }

  renderLoadingView = () => (
    <div data-testid="loader" className="products-loader-container">
      <Loader type="ThreeDots" color="#0b69ff" height="50" width="50" />
    </div>
  )

  renderFailureView = () => (
    <SaveContext.Consumer>
      {value => {
        const {darkMode} = value
        const failureImage = darkMode
          ? 'https://assets.ccbp.in/frontend/react-js/nxt-watch-failure-view-dark-theme-img.png'
          : 'https://assets.ccbp.in/frontend/react-js/nxt-watch-failure-view-light-theme-img.png'

        return (
          <div className="product-details-error-view-container">
            <img
              alt="error view"
              src={failureImage}
              className="error-view-image"
            />
            <h1 className="product-not-found-heading">
              Oops! Something Went Wrong
            </h1>
            <p className="products-failure-description">
              We are having some trouble to complete your request. Please try
              again.
            </p>
            <button type="button" className="button" onClick={this.handleRetry}>
              Retry
            </button>
          </div>
        )
      }}
    </SaveContext.Consumer>
  )

  renderProductDetails = () => {
    const {apiStatus} = this.state

    switch (apiStatus) {
      case apiStatusConstants.success:
        return this.renderProductDetailsView()
      case apiStatusConstants.failure:
        return this.renderFailureView()
      case apiStatusConstants.inProgress:
        return this.renderLoadingView()
      default:
        return null
    }
  }

  render() {
    return (
      <>
        <Header />
        <div className="product-item-details-container">
          {this.renderProductDetails()}
        </div>
      </>
    )
  }
}
export default VideoItemDetails
/* import './index.css'
import Cookies from 'js-cookie'

const VideoDetail = ({match}) => {
  const {id} = match.params
  let apiStatus = 'initial'

  const getVideo = async () => {
    apiStatus = 'inProgress'

    const jwtToken = Cookies.get('jwt_token')
    const apiUrl = `https://apis.ccbp.in/videos/${id}`
    const options = {
      headers: {
        Authorization: `Bearer ${jwtToken}`,
      },
      method: 'GET',
    }

    try {
      const response = await fetch(apiUrl, options)

      if (response.ok) {
        const fetchedData = await response.json()
        const updatedData = fetchedData.video_details.map(video => ({
          id: video.id,
          title: video.title,
          videoUrl: video.video_url,
          thumbnailUrl: video.thumbnail_url,
          channel: video.channel,
          viewCount: video.view_count,
          publishedAt: video.published_at,
          description: video.description,
        }))
        apiStatus = 'success'
      } else {
        apiStatus = 'failure'
      }
    } catch (error) {
      console.error('API Request Error:', error)
      apiStatus = 'failure'
    }
  }
  return {getVideo}
}

export default VideoDetail

/* import ReactPlayer from 'react-player'
import Cookies from 'js-cookie'

const VideoDetail = ({match}) => {
  const {id} = match.params

  const getVideo = async () => {
    const jwtToken = Cookies.get('jwt_token')
    const apiUrl = `https://apis.ccbp.in/videos/${id}`
    const options = {
      headers: {
        Authorization: `Bearer ${jwtToken}`,
      },
      method: 'GET',
    }

    const response = await fetch(apiUrl, options)

    if (response.ok) {
      const fetchedData = await response.json()
      const updatedData = fetchedData.video_details.map(video => ({
        id: video.id,
        title: video.title,
        videoUrl: video.video_url,
        thumbnailUrl: video.thumbnail_url,
        channel: video.channel,
        viewCount: video.view_count,
        publishedAt: video.published_at,
        description: video.description,
      }))
      return <h1>hello</h1>
    }
  }

  return {getVideo}
}
export default VideoDetail

getVideoData = async () => {
    const {match} = this.props
    const {params} = match
    const {id} = params

    this.setState({
      apiStatus: apiStatusConstants.inProgress,
    })
    const jwtToken = Cookies.get('jwt_token')
    const apiUrl = `https://apis.ccbp.in/videos/${id}`
    const options = {
      headers: {
        Authorization: `Bearer ${jwtToken}`,
      },
      method: 'GET',
    }
    const response = await fetch(apiUrl, options)
    if (response.ok) {
      const fetchedData = await response.json()
      const updatedData = fetchedData.map(video => ({
        id: video.id,
        title: video.title,
        videoUrl: video.video_url,
        thumbnailUrl: video.thumbnail_url,
        channel: video.channel,
        viewCount: video.view_count,
        publishedAt: video.published_at,
        description: video.description,
      }))
      console.log(updatedData)
      this.setState({
        videoData: updatedData,
        apiStatus: apiStatusConstants.success,
      })
    }
    if (response.status === 404) {
      this.setState({
        apiStatus: apiStatusConstants.failure,
      })
    }
  }
*/
