import React, { Component } from "react";
import AnchoredContentGroup from './anchoredContentGroup/AnchoredContentGroup';
import blurbs from '../../static/blurbs/content';
import ButtonSet from './ButtonSet'

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

const bottomContent = [
    {
        title: 'Music',
        blurb: blurbs.music,
        img: '../static/img/caleb_music.jpg'
    },
    {
        title: 'LaunchCode',
        blurb: blurbs.launchCode
    },
    {   title: 'More',
        blurb: 'Stay tuned!'
    }
]

const childContainerStyles = {
    'paddingTop': '81px',
    'paddingLeft': '30px'
}

const childContainerStylesRight = {
    'paddingTop': '81px',
    'paddingRight': '30px'
}

export default class AboutMe extends Component {
    render() {
        return (
            <React.Fragment>
                <AnchoredContentGroup imgLink='../static/img/gram-and-daddy.jpg'
                    align={'left'}
                    childContainerStyles={childContainerStyles}
                    contentArray={contentArray}
                />
                <AnchoredContentGroup imgLink='../static/img/launchCodelogo.png'
                    align={'right'}
                    childContainerStyles={childContainerStylesRight}
                    contentArray={bottomContent}
                >
                    {/* <ButtonSet/> */}
                </AnchoredContentGroup>
            </React.Fragment>
        )
    }
} 