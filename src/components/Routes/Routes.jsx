import React from 'react'
import { BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import Home from '../Home/Home'
import Navbar from '../Navbar/Navbar'
import SignIn from '../SignIn/SignIn';

function Routes() {
  return (
    <Router> 
    <div>
        <Navbar />
        <Switch>
            <Route path="/signIn" component={SignIn}/>
            {/* Define other routes for different pages */}

            {/* <Route path="/" component={HomePage}/> */}
            
             </Switch>
        <Home />
        <h1> All routes </h1>
    </div>
    </Router>
  )
}

export default Routes