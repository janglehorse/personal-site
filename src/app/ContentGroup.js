import React, {Component} from 'react'
import '../../style/content-group.less'

class ContentGroup extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    console.log('args: ', this.props.args)
    const args = this.props.args
    try{
      return (
        <div className="content-group-wrapper">
          <img src='../static/gram-and-daddy.jpg' />
          <div className="container">
            {args.map(arg => this.props.render(arg))}
          </div>
        </div>
      )
    }
    catch(e) {
      console.log('error: ', e)
    }

  }
}

export default ContentGroup
