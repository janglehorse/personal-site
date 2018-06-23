import React, { Component } from "react";
import ContentBox from './ContentBox'
import ContentGroup from './ContentGroup'
import {BLURBS} from './content/content'
import '../../style/app.less'

class App extends Component {
    constructor(props) {
        super(props)
    }
// TODO: Rename ContentBox component
// TODO: Create Container for ContentBox
    render() {
      console.log('blurbs: ', BLURBS)
        return(
          <div>
            <ContentGroup
              render={function(text, content) {return <ContentBox text={text} content={content}/>}}
              args={BLURBS}
              />
          </div>
        )
    }
}

export default App
