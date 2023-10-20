import './index.css'
import {Link} from 'react-router-dom'

const VideoCardForGaming = props => {
  const {videoData} = props
  const {id, title, thumbnailUrl, viewCount} = videoData

  return (
    <Link to={`/videos/${id}`} className="link-video">
      <div className="video-container">
        <img className="thumbanil" src={thumbnailUrl} alt={title} />
        <div className="profile-channel">
          <p>{title}</p>
        </div>
        <p>{viewCount} Watching Worldwide</p>
      </div>
    </Link>
  )
}

export default VideoCardForGaming
