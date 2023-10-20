import './index.css'
import SaveContext from '../../context/SaveContext'

const SavedVideoDetail = props => (
  <SaveContext.Consumer>
    {value => {
      const {saveList} = value
      const {videoData} = props
      const {
        id,
        title,
        thumbnailUrl,
        channel,
        viewCount,
        publishedAt,
        description,
      } = videoData

      return (
        <div>
          <p>{id}</p>
          <p>{title}</p>
          <p>{thumbnailUrl}</p>
          <p>{viewCount}</p>
          <p>{publishedAt}</p>
          <p>{description}</p>
        </div>
      )
    }}
  </SaveContext.Consumer>
)

export default SavedVideoDetail
