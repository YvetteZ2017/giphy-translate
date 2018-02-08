import React, { Component } from 'react'
import { Router } from 'react-router'
import { Route, Switch } from 'react-router-dom'
import { Home, Main } from './components'
import createHistory from 'history/createBrowserHistory'

const history = createHistory();

class App extends Component {

  render() {

    return (
      <Router history={history}>
        <Switch>
          <Route path="/main" component={Main} />
          <Route path="/" component={Home} />
          <Route path="*" component={Home} />
        </Switch>
      </Router>
    )
  }
}

export default App