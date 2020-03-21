import React, { Component } from "react"
import {
  BrowserRouter as Router,
  Route,
  Link,
  Switch
} from "react-router-dom"
import "./App.css"

import Brooklyn99 from "./pages/Brooklyn99"
import GoodPlace from "./pages/GoodPlace"
import Scrubs from "./pages/Scrubs"
import TheOffice from "./pages/TheOffice"
import VeronicaMars from "./pages/VeronicaMars"
import Home from "./pages/Home"
import NotFound from "./pages/NotFound"

class App extends Component{
  render(){
    return(
      <React.Fragment>
        <h1>Here are my favorite TV Shows</h1>
        <p>I have also listed a few characters of each show in case Google fails</p>
        <Router>
          <nav>
            <ul>
              <li>
                <Link to="/brooklyn99">Brooklyn99</Link>
              </li>
              <li>
                <Link to="/good-place">The Good Place</Link>
              </li>
              <li>
                <Link to="/scrubs">Scrubs</Link>
              </li>
              <li>
                <Link to="/office">The Office</Link>
              </li>
              <li>
                <Link to="/veronica-mars">Veronica Mars</Link>
              </li>
            </ul>
          </nav>

          <Switch>
            <Route path="/brooklyn99" component={ Brooklyn99 } />
            <Route path="/good-place" component={ GoodPlace } />
            <Route path="/scrubs" component={ Scrubs } />
            <Route path="/office" component={ TheOffice } />
            <Route path="/veronica-mars" component={ VeronicaMars } />
            <Route exact path="/" component={ Home } />
            <Route component={ NotFound } />
          </Switch>

        </Router>
      </React.Fragment>
    )
  }
}
export default App
