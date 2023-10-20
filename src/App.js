import {Component} from 'react'
import {Route, Switch, Redirect} from 'react-router-dom'
import LoginForm from './components/LoginForm'
import Home from './components/Home'
import NotFound from './components/NotFound'
import ProtectedRoute from './components/ProtectedRoute'
import VideoItemDetail from './components/VideoItemDetails'
import Gaming from './components/Gaming'
import Trending from './components/Trending'
import Saved from './components/Saved'
import SaveContext from './context/SaveContext'
import './App.css'

class App extends Component {
  state = {
    saveList: [],
    darkMode: false,
  }

  addToSave = videoData => {
    this.setState(prevState => ({saveList: [...prevState.saveList, videoData]}))
  }

  toggleDarkMode = () => {
    this.setState(prevState => ({
      darkMode: !prevState.darkMode,
    }))
  }

  render() {
    const {saveList, darkMode} = this.state

    return (
      <SaveContext.Provider
        value={{
          saveList,
          darkMode,
          addToSave: this.addToSave,
          toggleDarkMode: this.toggleDarkMode,
        }}
      >
        <Switch>
          <Route exact path="/login" component={LoginForm} />
          <Route path="/not-found" component={NotFound} />
          <ProtectedRoute exact path="/" component={Home} />
          <ProtectedRoute
            exact
            path="/videos/:id"
            component={VideoItemDetail}
          />
          <ProtectedRoute exact path="/gaming" component={Gaming} />
          <ProtectedRoute exact path="/trending" component={Trending} />
          <ProtectedRoute exact path="/saved" component={Saved} />
          <Redirect to="/not-found" />
        </Switch>
      </SaveContext.Provider>
    )
  }
}

export default App

/* import {Route, Switch, Redirect} from 'react-router-dom'
import LoginForm from './components/LoginForm'
import Home from './components/Home'
import NotFound from './components/NotFound'
import ProtectedRoute from './components/ProtectedRoute'
import VideoDetail from './components/VideoDetail'
import './App.css'

const App = () => (
  <Switch>
    <Route exact path="/login" component={LoginForm} />
    <ProtectedRoute exact path="/" component={Home} />
    <ProtectedRoute exact path="/video/:id" component={VideoDetail} />
    <Route path="/not-found" component={NotFound} />
    <Redirect to="not-found" />
  </Switch>
)

export default App */
