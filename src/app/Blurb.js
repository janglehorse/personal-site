import React, {Component} from 'react'
import '../../style/blurb.less'

class Blurb extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <div className="blurb">
        {this.props.content}
      </div>
    )
  }

}

export default Blurb
