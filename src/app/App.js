import React, { Component } from "react";
import ContentBox from './ContentBox';
import ContentGroup from './ContentGroup';
import '../../style/app.less';
import blurbs from '../../static/blurbs/content';

class App extends Component {
    render() {
        return(
          <div>
            <ContentGroup imgLink='../static/img/gram-and-daddy.jpg'>
            <ContentBox title={'Yogi'}
                blurb={blurbs.yogi} />
              <ContentBox title={'Software Engineer'}
                blurb={blurbs["software-engineer"]} />
              <ContentBox title={'Father'}
                blurb={blurbs.father} />
            </ContentGroup>
            <div className="btm-img-container">
                {/* <img className="btm-img"
                src="../static/img/launchCode_laptop_logo.jpg" /> */}
            </div>
          </div>
        )
    }
}

export default App
