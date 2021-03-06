import React from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'

import ErrorBoundary from './providers/errorBoundary'
import Page404 from './components/404'

import LandingContainer from './containers/landing'

export default () => (
  <ErrorBoundary>
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={LandingContainer} />
        <Route component={Page404} />
      </Switch>
    </BrowserRouter>
  </ErrorBoundary>
)
