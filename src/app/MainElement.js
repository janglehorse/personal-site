import React, { Component } from "react";
import ContentBox from './ContentBox';
import AnchoredContentGroup from './AnchoredContentGroup';
import blurbs from '../../static/blurbs/content';

export default class MainElement extends Component {
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
                <ContentBox title={'Yogi'}
                    blurb={blurbs.yogi} />
                <ContentBox title={'Software Engineer'}
                    blurb={blurbs["software-engineer"]} />
                <ContentBox title={'Father'}
                    blurb={blurbs.father} />
                </AnchoredContentGroup>
            </React.Fragment>
        )
    }
}