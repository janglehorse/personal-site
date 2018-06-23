import React, {Component} from 'react'
import '../../style/content-box.less'

class ContentBox extends Component {
    constructor(props) {
        super(props)
    }

    render() {
      console.log('text: ', this.props.text)
        return (
            <div className="content-box grow">
              {this.props.text}
            </div>
        )
    }
}

export default ContentBox
