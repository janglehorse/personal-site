import React, {Component} from 'react'
import '../../style/header.less'

class Header extends Component {
    constructor(props) {
        super(props)
    }


 // TODO: wire up a .less pluggin to webpack

    render() {
        return (
            <div class="header">
            About Me
            </div>
        )
    }
}

export default Header
