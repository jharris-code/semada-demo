import React from 'react'
import ReactDOM from 'react-dom'
import {
  BrowserRouter as Router,
  Route,
  Switch
} from 'react-router-dom'
import ProposalContainer from './containers/proposal'
import DaoContainer from './containers/dao'
import UserContainer from './containers/user-profile'
import PayProposalContainer from './containers/pay-proposal'
import PayConfirmedProposalContainer from './containers/pay-confirmed-proposal'
import NewProposalContainer from './containers/new-proposal'
import NewDaoContainer from './containers/new-dao'
import ProposalSwimLanesContainer from './containers/proposal-swim-lanes'
import DaosContainer from './containers/daos'
import registerServiceWorker from './registerServiceWorker'
import store from './store'
import { Provider } from 'react-redux'

ReactDOM.render(
  <Provider store={store}>
    <Router>
      <Switch>
        <Route path="/proposals/new" component={NewProposalContainer} />
        <Route path="/proposals/:id/pay" component={PayProposalContainer} />
        <Route path="/proposals/:id/payconfirmed" 
          component={PayConfirmedProposalContainer} />
        <Route path="/proposals/:id" component={ProposalContainer} />
        <Route path="/proposals" component={ProposalSwimLanesContainer} />
        <Route path="/daos/new" component={NewDaoContainer} />
        <Route path="/daos/:id" component={DaoContainer} />
        <Route path="/daos" component={DaosContainer} />
        <Route path="/users/:email" component={UserContainer} />
        <Route path="/" component={ProposalSwimLanesContainer} />
      </Switch>
    </Router>
  </Provider>, 
  document.getElementById('root')
)
registerServiceWorker()
