import React, {Component} from 'react'
import { string, object } from 'prop-types';
import '../../style/content-group.less'

class ContentGroup extends Component {

  render() {
    try{
      const { imgLink } = this.props;
      return (
        <div className="content-group-wrapper">
          { imgLink &&
          <div className="img-container">
            <img className="profile-img"
            src={imgLink} />
          </div>
          }
          <div className="child-container"
            style={this.props.childContainerStyles}>
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

ContentGroup.proptypes = {
  imgLink: string,
  childContainerStyles: object
}

export default ContentGroup
