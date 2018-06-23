import React, { Component } from "react";
import Header from './Header'
import '../../style/app.less'

class App extends Component {
    constructor(props) {
        super(props)
    }
// TODO: Rename Header component
// TODO: Create Container for Header 
    render() {
        return(
          <div>
            <div>Hello, World!</div>
            <img src='../static/gram-and-daddy.jpg' />
            <Header text={'Yogi'}/>
            <Header text={'Software Engineer'}/>
            <Header text={'J. Caleb Travers'}/>
          </div>
        )
    }
}

export default App
