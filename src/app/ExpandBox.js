import React, {Component} from 'react'
import '../../style/expand-box.less'
import { longLoremIpsum } from '../constants';
import { string } from 'prop-types';

class ExpandBox extends Component {

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

ExpandBox.prototypes = {
  title: string,
  blurb: string
}

export default ExpandBox
