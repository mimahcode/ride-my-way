import React from 'react';
import './App.css';
import Profile from './Pages/Profile';
import Landing from './Pages/Landing';
import AvailableRides from './Pages/AvailableRides';
import { Switch, Route } from 'react-router-dom';
import TableDiv from './components/TableDiv';
import Login from './Pages/Login';

const App = () => (
  <div className='app'>
    <Switch>
        <Route path='/Landing' component={Landing}></Route>
        <Route exact path='/' component={Profile}></Route>
        <Route path='/AvailableRides' component={AvailableRides}></Route>
        <Route path='/TableDiv' component={TableDiv}></Route>
        <Route path='/Login' component={Login}></Route>
      </Switch>
    {/* <Login /> */}
  </div>
);


export default App;
