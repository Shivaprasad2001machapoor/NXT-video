import './index.css'
import {Link} from 'react-router-dom'
import {formatDistanceToNow} from 'date-fns'

const VideoCard = props => {
  const {videoData} = props
  const {id, title, thumbnailUrl, channel, viewCount, publishedAt} = videoData

  const timeDifference = formatDistanceToNow(new Date(publishedAt))

  return (
    <Link to={`/videos/${id}`} className="link-video">
      <div className="video-container">
        <img className="thumbanil" src={thumbnailUrl} alt={channel.name} />
        <div className="profile-channel">
          <img
            className="thumbanil-profile"
            src={channel.profile_image_url}
            alt={channel.name}
          />
          <p>{title}</p>
        </div>
        <p>{channel.name}</p>
        <p>{viewCount}</p>
        <p>{timeDifference}</p>
      </div>
    </Link>
  )
}

export default VideoCard

/* import './index.css'
import {formatDistanceToNow} from 'date-fns'

const VideoCard = props => {
  const {videoData} = props
  const {title, thumbnailUrl, channel, viewCount, publishedAt} = videoData
  return (
    <div className="video-container">
      <img className="thumbanil" src={thumbnailUrl} alt={channel.name} />
      <p>{title}</p>
      <p>{channel.name}</p>
      <p>{viewCount}</p>
      <p>{ (formatDistanceToNow(new Date(${publishedAt})))}</p>
    </div>
  )
}
export default VideoCard
*/
