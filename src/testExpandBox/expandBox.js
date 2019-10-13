import React, { Component } from "react";
import '../../style/expandBox.less';

class ExpandBox extends Component {

    render() {
        return (
            <div 
             className="expand-box">
                Hover me to see a height transition. 
                <div className={'content'}>
                    This is my content. Its multi-lined and will need transitions in order to look good. 
                </div>
            </div>
        )
    }
}

export default ExpandBox;