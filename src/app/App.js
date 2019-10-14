import React, { Component } from "react";
import ContentBox from './ContentBox';
import ContentGroup from './ContentGroup';
import '../../style/app.less';
import blurbs from '../../static/blurbs/content';

class App extends Component {
// TODO: Rename ContentBox component
// TODO: Create Container for ContentBox
    render() {
        return(
          <div>
            <ContentGroup>
            <ContentBox title={'Yogi'}
                blurb={blurbs.yogi} />
              <ContentBox title={'Software Engineer'}
                blurb={blurbs["software-engineer"]} />
              <ContentBox title={'Father'}
                blurb={blurbs.father} />
            </ContentGroup>
          </div>
        )
    }
}

export default App
