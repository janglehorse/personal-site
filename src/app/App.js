import React, { Component } from "react";
import ContentBox from './ContentBox';
import ContentGroup from './ContentGroup';
import '../../style/app.less';

class App extends Component {
    constructor(props) {
        super(props)
    }
// TODO: Rename ContentBox component
// TODO: Create Container for ContentBox
    render() {
        return(
          <div>
            <ContentGroup
              render={function(text) {return <ContentBox text={text} key={text}/>}}
              args={['Yogi', 'Software Engineer', 'Father']}
              />
          </div>
        )
    }
}

export default App
