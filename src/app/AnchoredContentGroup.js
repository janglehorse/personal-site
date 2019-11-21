import React, {Component} from 'react'
import { string, object, array, number } from 'prop-types';
import '../../style/anchored-content-group.less'
import ExpandBox from './ExpandBox';

class AnchoredContentGroup extends Component {

  render() {
      const { 
        imgLink, 
        childContainerStyles, 
        contentArray,
        imageWidth
      } = this.props;

      const childStyle = this.calculateChildStyle(imageWidth);
      return (
        <div className="content-group-wrapper">
          <div className="img-container">
            <img className="profile-img"
            style={
                {width: `${imageWidth}px`}
              }
            src={imgLink} />
          </div>
          <div className="child-container"
            style={childContainerStyles}>
            { 
              contentArray.map((item) => {
                return <ExpandBox title={item.title}
                  blurb={item.blurb}
                  style={childStyle}
                />
              })
            }
          </div>
        </div>
      )
  }

  calculateChildStyle(imageWidth) {
    return {
      // TODO: un-hardcode this 
      'paddingLeft': `${ imageWidth - 20 }px`
    }
  }

}

AnchoredContentGroup.proptypes = {
  imgLink: string.isRequired,
  childContainerStyles: object,
  contentArray: array,
  imageWidth: number
}

export default AnchoredContentGroup
