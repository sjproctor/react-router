import React, { Component } from "react"
import {
  BrowserRouter as Router,
  Route,
  Link,
  Switch
} from "react-router-dom"
import "./App.css"

import tvshows from "./store/tvshows"
import TVShows from "./pages/TVShows"

class App extends Component{
  constructor(){
    super()
    // Setting the mock data in state
    this.state = {
      allTVShows: tvshows
    }
  }

  render(){
    return(
      <React.Fragment>
        <Router>
          <div>
            <h2>TV Shows</h2>
              <ul>
                { this.state.allTVShows.map((show, index) =>
                <li key={ index }>
                  <Link to={ `/shows/${show.id}` }>
                    { show.name }
                  </Link>
                </li>
                )}
              </ul>
              <Switch>
                <Route
                  path="/shows/:id"
                  render={ (props) => <TVShows {...props} tvshows={ this.state.allTVShows } /> }
                />
              </Switch>
          </div>
        </Router>
      </React.Fragment>
    )
  }
}
export default App
