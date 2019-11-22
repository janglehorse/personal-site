import React, {Component} from 'react'
import { string, object, array } from 'prop-types';
import '../../../style/anchored-content-group.less'
import ExpandBox from '../ExpandBox';
import {
  desktopStyles
} from './constants';


const style = function() {
  return desktopStyles;
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
        contentArray
      } = this.props;

      return (
        <div className="content-group-wrapper">
          <div className="img-container">
            <img className="anchor-img"
            style={style().anchorImg}
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
