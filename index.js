import React from 'react'
import ReactDOM from 'react-dom'
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect,
} from 'react-router-dom'

import './style.css'
import DashboardReports from './views/dashboard-reports'
import Transaction from './views/transaction'
import NotFound from './views/not-found'

const App = () => {
  return (
    <Router>
      <Switch>
        <Route component={DashboardReports} exact path="/dashboard-reports" />
        <Route component={DashboardReports} exact path="/" />
        <Route component={Transaction} exact path="/transaction" />
        <Route component={NotFound} path="**" />
        <Redirect to="**" />
      </Switch>
    </Router>
  )
}

ReactDOM.render(<App />, document.getElementById('app'))
