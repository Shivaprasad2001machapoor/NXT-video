import {Component} from 'react'
import ReactPlayer from 'react-player'
import {formatDistanceToNow} from 'date-fns'
import {FaThumbsUp, FaThumbsDown, FaBookmark} from 'react-icons/fa'
import SaveContext from '../../context/SaveContext'
import './index.css'

class VideoItemDetailedView extends Component {
  state = {liked: false, disliked: false, saved: false}

  handleLikeClick = () => {
    this.setState(prevState => ({
      liked: !prevState.liked,
      disliked: false,
    }))
  }

  handleDislikeClick = () => {
    this.setState(prevState => ({
      disliked: !prevState.disliked,
      liked: false,
    }))
  }

  render() {
    return (
      <SaveContext.Consumer>
        {value => {
          const {addToSave, darkMode} = value
          const {liked, disliked, saved} = this.state
          const {videoData} = this.props
          const {
            id,
            title,
            videoUrl,
            channel,
            viewCount,
            publishedAt,
            description,
          } = videoData
          const timeDifference = formatDistanceToNow(new Date(publishedAt))

          const onClickAddToSave = () => {
            this.setState(prevState => ({
              saved: !prevState.saved,
            }))
            addToSave({id})
          }

          return (
            <div className={`video-detail-container ${darkMode ? 'dark' : ''}`}>
              <ReactPlayer url={videoUrl} controls width="60vw" height="35vw" />
              <p>{title}</p>
              <div className="view-container">
                <div className="view-time-container">
                  <p className="view-text">{viewCount} views</p>
                  <p>
                    <span className="dot">.</span>
                    {timeDifference}
                  </p>
                </div>
                <div className="like-share-container">
                  <button
                    type="button"
                    className={`button-like ${liked ? 'liked' : ''}`}
                    style={{color: liked ? '#2563eb' : ''}}
                    onClick={this.handleLikeClick}
                  >
                    <FaThumbsUp /> Like
                  </button>
                  <button
                    type="button"
                    className={`button-like ${disliked ? 'disliked' : ''}`}
                    style={{color: disliked ? '#2563eb' : ''}}
                    onClick={this.handleDislikeClick}
                  >
                    <FaThumbsDown /> Dislike
                  </button>
                  <button
                    type="button"
                    className={`button-like ${saved ? 'saved' : ''}`}
                    onClick={onClickAddToSave}
                  >
                    <FaBookmark /> {saved ? 'Saved' : 'Save'}
                  </button>
                </div>
              </div>
              <hr />
              <div className="desc-bottom">
                <div className="channel-details-container">
                  <img
                    src={channel.profile_image_url}
                    alt="channel profile"
                    className="channel-profile"
                  />
                  <div className="channel-desc">
                    <p>{channel.name}</p>
                    <p>{channel.subscriber_count}</p>
                  </div>
                </div>
                <p>{description}</p>
              </div>
            </div>
          )
        }}
      </SaveContext.Consumer>
    )
  }
}

export default VideoItemDetailedView

/* import {Component} from 'react'
import ReactPlayer from 'react-player'
import {formatDistanceToNow} from 'date-fns'
import {FaThumbsUp, FaThumbsDown, FaBookmark} from 'react-icons/fa'
import SaveContext from '../../context/SaveContext'
import './index.css'

class VideoItemDetailedView extends Component {
  state = {liked: false, disliked: false, saved: false}

  handleLikeClick = () => {
    this.setState(prevState => ({
      liked: !prevState.liked,
      disliked: false,
    }))
  }

  handleDislikeClick = () => {
    this.setState(prevState => ({
      disliked: !prevState.disliked,
      liked: false,
    }))
  }

  render() {
    return (
      <SaveContext.Consumer>
        {value => {
          const {addToSave, darkMode} = value
          const {liked, disliked, saved} = this.state
          const {videoData} = this.props
          const {
            id,
            title,
            videoUrl,
            channel,
            viewCount,
            publishedAt,
            description,
          } = videoData
          const timeDifference = formatDistanceToNow(new Date(publishedAt))

          const onClickAddToSave = () => {
            this.setState(prevState => ({
              saved: !prevState.saved,
            }))
            addToSave({id})
          }

          return (
            <div className={`video-detail-container ${darkMode ? 'dark' : ''}`}>
              <ReactPlayer url={videoUrl} controls width="60vw" height="35vw" />
              <p>{title}</p>
              <div className="view-container">
                <div className="view-time-container">
                  <p className="view-text">{viewCount} views</p>
                  <p>
                    <span className="dot">.</span>
                    {timeDifference}
                  </p>
                </div>
                <div className="like-share-container">
                  <button
                    type="button"
                    className={`button-like ${liked ? 'liked' : ''}`}
                    onClick={this.handleLikeClick}
                  >
                    <FaThumbsUp /> Like
                  </button>
                  <button
                    type="button"
                    className={`button-like ${disliked ? 'disliked' : ''}`}
                    onClick={this.handleDislikeClick}
                  >
                    <FaThumbsDown /> Dislike
                  </button>
                  <button
                    type="button"
                    className={`button-like ${saved ? 'saved' : ''}`}
                    onClick={onClickAddToSave}
                  >
                    <FaBookmark /> {saved ? 'Saved' : 'Save'}
                  </button>
                </div>
              </div>
              <hr />
              <div className="desc-bottom">
                <div className="channel-details-container">
                  <img
                    src={channel.profile_image_url}
                    alt="channel profile"
                    className="channel-profile"
                  />
                  <div className="channel-desc">
                    <p>{channel.name}</p>
                    <p>{channel.subscriber_count}</p>
                  </div>
                </div>
                <p>{description}</p>
              </div>
            </div>
          )
        }}
      </SaveContext.Consumer>
    )
  }
}
export default VideoItemDetailedView

/* import {Component} from 'react'

import ReactPlayer from 'react-player'
import {formatDistanceToNow} from 'date-fns'
import {FaThumbsUp, FaThumbsDown, FaBookmark} from 'react-icons/fa'

import Context from '../../context/Context'

import './index.css'

class VideoItemDetailedView extends Component {
  state = {liked: false, disLiked: false, saved: false}

  render() {
    return (
      <Context.Consumer>
        {value => {
          const {toggleDarkMode, saveList} = value
          const {liked, disLiked, saved} = this.state
          const {videoData} = this.props
          const {
            title,
            videoUrl,
            thumbnailUrl,
            channel,
            viewCount,
            publishedAt,
            description,
          } = videoData
          const timeDifference = formatDistanceToNow(new Date(publishedAt))
          return (
            <div>
              <ReactPlayer
                url={videoUrl}
                controls
                width="100vw"
                height="35vw"
              />
              <p>{title}</p>
              <div className="view-container">
                <div className="view-time-container">
                  <p className="view-text">{viewCount} views</p>
                  <p>
                    <span className="dot">.</span>
                    {timeDifference}
                  </p>
                </div>
                <div className="like-share-container">
                  <button type="button" className="button-like">
                    <FaThumbsUp /> Like
                  </button>
                  <button type="button" className="button-like">
                    <FaThumbsDown /> Dislike
                  </button>
                  <button type="button" className="button-like">
                    <FaBookmark /> Save
                  </button>
                </div>
              </div>
              <hr />
              <p>{description}</p>
            </div>
          )
        }}
      </Context.Consumer>
    )
  }
}
export default VideoItemDetailedView
*/
