import React, {Component} from 'react'
import '../../style/header.less'

class Header extends Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (
            <div class="header">
            {this.props.text}
            </div>
        )
    }
}

export default Header
