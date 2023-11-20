import {Component} from 'react'
import Loader from 'react-loader-spinner'
import Cookies from 'js-cookie'
import VideoCard from '../VideoCard'
import TrendingHeader from '../TrendingHeader'
import './index.css'
import FilterLinks from '../FilterLinks'
import Header from '../Header'
import SaveContext from '../../context/SaveContext'

const apiStatusConstants = {
  initial: 'INITIAL',
  success: 'SUCCESS',
  failure: 'FAILURE',
  inProgress: 'IN_PROGRESS',
}

class Trending extends Component {
  state = {
    videoList: [],
    apiStatus: apiStatusConstants.initial,
  }

  componentDidMount() {
    this.getVideos()
  }

  getVideos = async () => {
    this.setState({
      apiStatus: apiStatusConstants.inProgress,
    })
    const jwtToken = Cookies.get('jwt_token')
    const apiUrl = `https://apis.ccbp.in/videos/trending`
    const options = {
      headers: {
        Authorization: `Bearer ${jwtToken}`,
      },
      method: 'GET',
    }
    const response = await fetch(apiUrl, options)
    if (response.ok) {
      const fetchedData = await response.json()
      const updatedData = fetchedData.videos.map(video => ({
        id: video.id,
        title: video.title,
        thumbnailUrl: video.thumbnail_url,
        channel: video.channel,
        viewCount: video.view_count,
        publishedAt: video.published_at,
      }))
      this.setState({
        videoList: updatedData,
        apiStatus: apiStatusConstants.success,
      })
    } else {
      this.setState({
        apiStatus: apiStatusConstants.failure,
      })
    }
  }

  onRetry = () => this.getVideos()

  renderFailureView = () => (
    <div className="products-error-view-container">
      <img
        src="https://assets.ccbp.in/frontend/react-js/nxt-watch-failure-view-light-theme-img.png"
        alt="failure view"
        className="products-failure-img"
      />
      <h1 className="product-failure-heading-text">
        Oops! Something Went Wrong
      </h1>
      <p className="products-failure-description">
        We are having some trouble processing your request. Please try again.
      </p>
      <button type="button" className="button" onClick={this.onRetry}>
        Retry
      </button>
    </div>
  )

  renderProductsListView = () => (
    <SaveContext.Consumer>
      {value => {
        const {darkMode} = value
        const {videoList} = this.state
        const shouldShowProductsList = videoList.length > 0

        return shouldShowProductsList ? (
          <div
            className={`all-products-container ${darkMode ? 'dark-mode' : ''}`}
          >
            <TrendingHeader />
            <ul className={`products-list ${darkMode ? 'dark-mode' : ''}`}>
              {videoList.map(video => (
                <VideoCard videoData={video} key={video.id} />
              ))}
            </ul>
          </div>
        ) : (
          <div className={`no-products-view ${darkMode ? 'dark-mode' : ''}`}>
            <img
              src="https://assets.ccbp.in/frontend/react-js/nxt-trendz/nxt-trendz-no-products-view.png"
              className="no-products-img"
              alt="no products"
            />
            <h1 className="no-products-heading">No Products Found</h1>
            <p className="no-products-description">
              We could not find any products. Try other filters.
            </p>
          </div>
        )
      }}
    </SaveContext.Consumer>
  )

  renderLoadingView = () => (
    <div data-testid="loader" className="products-loader-container">
      <Loader type="ThreeDots" color="#0b69ff" height="50" width="50" />
    </div>
  )

  renderAllProducts = () => {
    const {apiStatus} = this.state

    switch (apiStatus) {
      case apiStatusConstants.success:
        return this.renderProductsListView()
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
      <div>
        <Header />
        <div className="getvideos-container">
          <div>
            <FilterLinks />
          </div>
          <div>{this.renderAllProducts()}</div>
        </div>
      </div>
    )
  }
}
export default Trending
