import React, { Component } from "react";
import AnchoredContentGroup from './anchoredContentGroup/AnchoredContentGroup';
import blurbs from '../../static/blurbs/content';

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
            />
            </React.Fragment>
        )
    }
}