import React from "react";
import PropTypes from "prop-types";
import { withRouter } from "react-router";

class Child extends React.Component {
  
    static propTypes = {
      match: PropTypes.object.isRequired,
      location: PropTypes.object.isRequired,
      history: PropTypes.object.isRequired
    }
  
    render() {
      debugger;
      const { match, location, history } = this.props
        console.log(match);
        console.log(history);
      return (
        <div>{location.pathname}</div>
        
      )
    }
  }
  
  export default withRouter(Child);