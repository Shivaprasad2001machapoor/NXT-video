import Header from '../Header'
import './index.css'
import GetPrime from '../GetPrime'
import GetVideos from '../GetVideos'
import FilterLinks from '../FilterLinks'

const Home = () => (
  <div className="home-app-container">
    <Header />
    <div className="home-container">
      <FilterLinks />
      <div className="output-content">
        <GetPrime />
        <GetVideos />
      </div>
    </div>
  </div>
)
export default Home
