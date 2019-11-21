import React, {Component} from 'react'
import { string, object, array, number } from 'prop-types';
import '../../style/anchored-content-group.less'
import ExpandBox from './ExpandBox';

// TODO: put in const file
const desktopImageWidth = 350;

// TODO: put in const file? 
const desktopStyles = {
  profileImg: {
    width: `${desktopImageWidth}px`
  },
  childContainer: calculateChildStyle(desktopImageWidth)
}

const style = function() {
  return desktopStyles;
  /* TODO: branch on window height for responsive styles: 
  if (window.innerWidth < 800) {
     return tabletStyles;
  } */
};

// TODO: put in utils file? 
function calculateChildStyle(imageWidth) {
  return {
    // TODO: un-hardcode this with prop? 
    'paddingLeft': `${ imageWidth - 20 }px`
  }
}

class AnchoredContentGroup extends Component {

  render() {
      const { 
        imgLink, 
        childContainerStyles, 
        contentArray
      } = this.props;

      return (
        <div className="content-group-wrapper">
          <div className="img-container">
            <img className="profile-img"
            style={style().profileImg}
            src={imgLink} />
          </div>
          <div className="child-container"
            style={childContainerStyles}>
            { 
              contentArray.map((item) => {
                return <ExpandBox title={item.title}
                  blurb={item.blurb}
                  style={style().childContainer}
                />
              })
            }
          </div>
        </div>
      )
  }

}

AnchoredContentGroup.proptypes = {
  imgLink: string.isRequired,
  childContainerStyles: object,
  contentArray: array
}

export default AnchoredContentGroup
