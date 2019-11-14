import React, { Component } from "react";
import ExpandBox from './ExpandBox';
import AnchoredContentGroup from './AnchoredContentGroup';
import blurbs from '../../static/blurbs/content';

// TODO: pull in styles that will need to be dynamic via media queries for overrids
// anchoredContentGroup
// .profile-img.width
// expandBox.content-box.padding-left

const contentArray = [
    {
        title: 'Yogi', 
        blurb: blurbs.yogi
    },
    {
        title: 'Software Engineer',
        blurb: blurbs["software-engineer"]
    },
    {
        title: 'Father',
        blurb: blurbs.father
    }
];

const childContainerStyles = {
    'paddingTop': '81px',
    'paddingLeft': '30px'
}

export default class AboutMe extends Component {
    render() {
        return (
            <React.Fragment>
                <AnchoredContentGroup imgLink='../static/img/gram-and-daddy.jpg'
                    childContainerStyles={childContainerStyles}
                    contentArray={contentArray}
                    imageWidth={350}
            />
            </React.Fragment>
        )
    }
}