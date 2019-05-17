import React, { Component } from 'react';
import { connect } from 'react-redux';
// import { Link } from 'react-router-dom'
import {BrowserRouter as Router, Link, Redirect, Route, Switch, withRouter} from 'react-router-dom';
import {hot} from "react-hot-loader";
import Pokeball from '../img/pokeball.png';



class Home extends React.Component {
  // constructor(props) {
  //   super(props);
  //   this.state = {
  //       posts : this.props.posts
  //   };
  constructor() {
    super();
    this.state = {
    };
  }

  render() {
    console.log(this.props);
    const {posts} = this.props;
    
    const postsList = posts.map(function(item){
      debugger;
      return(
        <div className="post card" key={item.id}>
          <img src = {Pokeball} alt="A pokeball"/>
            <div className="card-content">
              <Router>
                <Link to={'/' + item.id}>
                  <span className="card-title red-text">{item.title}</span>
                </Link>
              </Router>   
                <p>{item.body}</p>
            </div>  
        </div>
      )
    })

    return <div className="container home">
              <h4 className="center">Home</h4>
                {postsList}
            </div>
  }
}

// 
// we are taking the state and we are mapping some of that data on the state  //  on the state to the props of THIS component  
// and inside here we get acces to the state of the store 
// so we now we graps them from the state and attach them to props
// the way we do that  is by returning an object inside this func and this object
// represents the diff propertoes we want to add to the props

//map data from the store and MAP them to the props

const mapStateToProps = (state, ownProps) => {
  const location = ownProps;
  debugger;
    return {
      posts: state.posts // this is a property called "posts"
    }
}   
                            
export default connect(mapStateToProps)(Home); // higer order component is wrapping App component