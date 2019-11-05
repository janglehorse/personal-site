import React, { Component } from "react";
import ContentBox from './ContentBox';
import ContentGroup from './ContentGroup';
import '../../style/app.less';
import blurbs from '../../static/blurbs/content';
import MainElement from "./MainElement";

class App extends Component {
    render() {
        return(
          <div>
            <MainElement/>
          </div>
        )
    }
}

export default App