import React, { Component } from 'react';
import PropTypes from "prop-types";
import { withRouter } from "react-router";
import { connect } from 'react-redux';


class Post extends React.Component {
  static propTypes = {
    match: PropTypes.object.isRequired,
    location: PropTypes.object.isRequired,
    history: PropTypes.object.isRequired
  }

    constructor(){
       super()
        this.state = {
          
        };
    }
  render() {
    
    const text = this.props.data.find(i=> i.id === location);
    //  ? (
    //   <div className="post">
    //     <h4 className="center">{this.props.post.title}</h4>
    //     <p>{this.props.post.body}</p>
    //   </div>
    // ) : (
    //   <div className="center">Loading post...</div>
    // );

    return (
      <div className="container">
        {location.pathname}
      </div>
    )
  }
}

const mapStateToProps = (state) => {
    debugger;
    return {
      data: state.posts
    }
}

export default connect(mapStateToProps)(Post);