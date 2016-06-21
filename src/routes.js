import React from 'react'
import { Route, IndexRoute } from 'react-router'
import App from './containers/App'
import TopPage from './containers/pages/TopPage'
import ChartListPage from './containers/pages/ChartListPage'
import ChartPage from './containers/pages/ChartPage'
import AnalyticsPage from './containers/pages/AnalyticsPage'
import TradesPage from './containers/pages/TradesPage'
import LoginPage from './containers/pages/LoginPage'
import UserOnly from './containers/UserOnly'
import GuestOnly from './containers/GuestOnly'
import AuthCallbackController from './containers/AuthCallbackController'

export default (
  <Route>
    <Route component={UserOnly}>
      <Route path="/" component={App}>
        <IndexRoute component={TopPage} />
        <Route path="charts" component={ChartListPage} />
        <Route path="chart/:product_id" component={ChartPage} />
        <Route path="analytics" component={AnalyticsPage} />
        <Route path="dev/trades" component={TradesPage} />
      </Route>
     </Route>
    <Route component={GuestOnly}>
      <Route path="/login" component={LoginPage} />
      <Route path="/login/success" component={AuthCallbackController} />
    </Route>
  </Route>
)