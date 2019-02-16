import React from 'react'
import { Route, Link } from 'react-router-dom'
import Home from '../home'
import About from '../about'
import Trips from '../trips';
import Login from '../login';
import Register from '../register';


const App = () => (
  <div>
    <main>
      <Route exact path="/" component={Home} />
      <Route exact path="/about-us" component={About} />
      <Route exact path="/trips" component={Trips} />
      <Route exact path="/login" component={Login} />
      <Route exact path="/register" component={Register} />
    </main>
  </div>
)

export default App
