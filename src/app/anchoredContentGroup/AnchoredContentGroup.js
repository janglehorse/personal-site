import React, {Component} from 'react'
import { string, object, array } from 'prop-types';
import '../../../style/anchored-content-group.less'
import ExpandBox from '../ExpandBox';
import { calculateChildStyle } from './utils';
// import {
//   desktopStyles
// } from './constants';

export const desktopImageWidth = 350;
export const desktopStyles = function(props) {
  const { align } = props;
  return {
    imgContainer: {
      float: align
    },
    anchorImg: {
      width: `${desktopImageWidth}px`
    },
    childContainer: calculateChildStyle(desktopImageWidth)
  }
}


const style = function(props) {
  return desktopStyles(props);
  /* TODO: branch on window height for responsive styles: 
  if (window.innerWidth < 800) {
     return tabletStyles;
  } */
};
class AnchoredContentGroup extends Component {

  render() {
      const { 
        imgLink, 
        childContainerStyles, 
        contentArray,
        children
      } = this.props;

      return (
        <div className="content-group-wrapper">
          <div className="img-container" 
            style={style(this.props).imgContainer}>
            <img className="anchor-img"
            style={style(this.props).anchorImg}
            src={imgLink} />
          </div>
          { contentArray &&
            <div className="child-container"
            style={childContainerStyles}>
              {
                contentArray.map((item) => {
                return <ExpandBox title={item.title}
                  blurb={item.blurb}
                  style={style(this.props).childContainer}
                />
                })
              }
            </div>
          }
          <div className="child-props-container">
            {children}
          </div>
        </div>
      )
  }

}

AnchoredContentGroup.defaultProps = {
  align: 'left'
}

AnchoredContentGroup.proptypes = {
  align: string,
  imgLink: string.isRequired,
  childContainerStyles: object,
  contentArray: array
}

export default AnchoredContentGroup
