import React, { Component } from 'react'
import { BrowserRouter as Router,Link,Switch, Route} from 'react-router-dom'
import Country from './Country'
import Signup from './Signup'
import Login from './Login'
import Fillter from './Fillter'


export class App extends Component {
  render() {
    return (
   <Router>
       <div>
        <ul>
        <li> <Link to="/">Signup</Link> </li>
        <li> <Link to="/Country">Country</Link> </li>
        <li> <Link to="/Fillter">Fillter</Link> </li>
       </ul>

        <hr />
   
   <Switch>
     <Route exact path = "/" component = {Signup}/>
     <Route path = "/Country" component = {Country}/>
     <Route path = "/Login" component = {Login}/>
     <Route path = "/Fillter" component = {Fillter}/>
   </Switch>
   
   </div>
   
    </Router>
    
    )
  }
}

export default App
