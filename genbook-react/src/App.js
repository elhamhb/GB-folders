import React, { useEffect, Suspense } from 'react';
import { Route, Switch, withRouter, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import logo from './logo.svg';
import './App.css';

import  Layout  from './layouts/Layout/Layout';
import Login from './containers/Login/Login';
import EmployeeDashboard from './containers/EmployeeDashboard/EmployeeDashboard';

const App = (props) =>{

  let routes = (
    <Switch>
      <Route path="/Login"  component={Login}  />
      <Route path="/" exact component={EmployeeDashboard} />
      <Redirect to="/" />
    </Switch>
  );


  return (

    <React.Fragment>
      <Layout>
        {routes}
      </Layout>
    </React.Fragment>
  );
}

const mapStateToProps = state => {
  return {
  };
};

const mapDispatchToProps = dispatch => {
  return {

  };
};
export default withRouter(
  connect(
    mapStateToProps,
    mapDispatchToProps
  )(App)
);

