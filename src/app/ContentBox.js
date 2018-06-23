import React, {Component} from 'react'
import Blurb from './Blurb'
import '../../style/content-box.less'

class ContentBox extends Component {
    constructor(props) {
        super(props)
    }

    render() {
      console.log('text: ', this.props.text)
        return (
            <div className="content-box expand-right">
              {this.props.text}
              {this.props.content && <Blurb content={this.props.content} />}
            </div>
        )
    }
}

export default ContentBox
