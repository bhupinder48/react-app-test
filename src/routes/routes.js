import React from 'react';
import { Route, Router, Switch } from 'react-router-dom';
import history from "./history";
import Home from '../Home'
import Shagun from '../Shagun'
import Barat from '../Barat'

export const Routes = {
  HOME: '/',
  SHAGUN: '/shagun',
  BARAT: '/barat',
};

const AppRouter = () =>
    <Router history={history}>
      <Switch>
        <Route exact path={Routes.HOME} render={(props) => <Home {...props} activeTab='home'/>} />
        <Route exact path={Routes.SHAGUN} render={(props) => <Shagun {...props} activeTab='shagun'/>}/>
        <Route exact path={Routes.BARAT} render={(props) => <Barat {...props} activeTab='barat'/>}/>
      </Switch>
    </Router>

export default AppRouter;