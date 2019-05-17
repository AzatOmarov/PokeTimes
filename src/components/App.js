import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Switch, BrowserRouter as Router, Route } from 'react-router-dom';
import Home from '../components/Home';
import About from '../components/About';
import Contact from '../components/Contact';
import Post from '../components/Post';
import Child from '../components/Child';
import Navbar from './Navbar';

const User = (match) => {
  return (<h1>Welcome User{match.params.userName} </h1>)
}




class App extends Component {
  render() {
    const { match, location, history } = this.props; 
    return (
      <Router>
        <div className="App">
          <Navbar />
            <Switch>
              <Route exact path='/' component={props=> <Home{...props}/>}/>
              <Route path='/about' component={props=> <About{...props}/>}/>
              <Route path='/child' component={props=> <Child{...props}/>}/>
              <Route path='/contact/:userName' exact strict component={props=> <User{...props}/>}/>
              <Route path='/post/:post_id' exact strict component={Post} />
            </Switch>
        </div>
      </Router>
    );
  }
}

export default App;