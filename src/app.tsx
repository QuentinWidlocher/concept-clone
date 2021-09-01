import React from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import MobileApp from './mobile-app/App'
import TvApp from './tv-app/App'

const App = () => {
  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <MobileApp />
        </Route>
        <Route path="/:gameId">
          <TvApp />
        </Route>
      </Switch>
    </Router>
  )
}

export default App
