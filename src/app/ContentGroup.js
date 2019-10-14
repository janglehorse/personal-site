import React, {Component} from 'react'
import '../../style/content-group.less'

class ContentGroup extends Component {

  render() {
    try{
      return (
        <div className="content-group-wrapper">
          <img className="profile-img"
            src='../static/img/gram-and-daddy.jpg' />
          <div className="container">
            {this.props.children}
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
