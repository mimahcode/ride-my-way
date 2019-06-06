import React from 'react';
import './App.css';
import TableGDiv from './components/TableGDiv';
import Profile from './Pages/Profile';
import Landing from './Pages/Landing';
import AvailableRides from './Pages/AvailableRides';
import { Switch, Route } from 'react-router-dom';
import TableDiv from './components/TableDiv';
import Login from './Pages/Login';
import Signup from './Pages/Signup';

const App = () => (
  <div className='app'>
    <Switch>
        <Route exact path='/' component={Landing}></Route>
        <Route path='/Profile' component={Profile}></Route>
        <Route path='/AvailableRides' component={AvailableRides}></Route>
        <Route path='/TableDiv' component={TableDiv}></Route>
        <Route path='/TableGDiv' component={TableGDiv}></Route>
        <Route path='/Login' component={Login}></Route>
        <Route path='/Signup' component={Signup}></Route>
      </Switch>
    {/* <TableGDiv /> */}
  </div>
);


export default App;
