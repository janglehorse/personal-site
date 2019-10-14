import React, {Component} from 'react'
import '../../style/content-box.less'
import { longLoremIpsum } from '../constants';
import { string } from 'prop-types';

class ContentBox extends Component {

    render() {
      const { title, blurb } = this.props;
        return (
            <div className="content-box">
              {this.props.text || title}
              <div className="content">
                {blurb || longLoremIpsum}
              </div>
            </div>
        )
    }
}

ContentBox.prototypes = {
  title: string,
  blurb: string
}

export default ContentBox
