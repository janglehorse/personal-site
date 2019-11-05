import React, { Component } from "react";
import ContentBox from './ContentBox';
import ContentGroup from './ContentGroup';
import blurbs from '../../static/blurbs/content';

export default class MainElement extends Component {
    render() {
        return (
            <React.Fragment>
                <ContentGroup imgLink='../static/img/gram-and-daddy.jpg'
                    containerStyles={
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
                </ContentGroup>
            </React.Fragment>
        )
    }
}