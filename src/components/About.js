import React from 'react';
import { connect } from 'react-redux';


class About extends React.Component{
  constructor(){
    super()
      this.state={
    }
  }
  render(){
    const put = this.props.data.pathname
    return (
      <div>
        <div className="container">
          <h4 className="center">About</h4>
          <p>{put}</p>
        </div>
      </div>
    )
  }
}

const mapStateToProps = (state, ownProps) => {
  let id = ownProps.history.location;
  return {
    data: id // this is a property called "posts"
  }
} 

export default connect(mapStateToProps)(About); // higer order component is wrapping App component