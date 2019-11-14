import React, { Component } from "react";
import ExpandBox from './ExpandBox';
import AnchoredContentGroup from './AnchoredContentGroup';
import blurbs from '../../static/blurbs/content';

// TODO: pull in styles that will need to be dynamic via media queries for overrids
// anchoredContentGroup
// .profile-img.width
// expandBox.content-box.padding-left

export default class AboutMe extends Component {
    render() {
        return (
            <React.Fragment>
                <AnchoredContentGroup imgLink='../static/img/gram-and-daddy.jpg'
                    childContainerStyles={
                        {
                            'paddingTop': '81px',
                            'paddingLeft': '55px'
                        }
                }>
                <ExpandBox title={'Yogi'}
                    blurb={blurbs.yogi} />
                <ExpandBox title={'Software Engineer'}
                    blurb={blurbs["software-engineer"]} />
                <ExpandBox title={'Father'}
                    blurb={blurbs.father} />
                </AnchoredContentGroup>
            </React.Fragment>
        )
    }
}