import React from 'react';
import HelloWorld from './HelloWorld';

class Application extends React.Component{
    render(){
        return <HelloWorld tech={this.state.tech}/>
    }
}
export default Application;