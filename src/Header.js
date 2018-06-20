import React, {Component} from 'react'

class Header extends Component {
    constructor(props) {
        super(props)
    }

/*
 * TODO: wire up a .less pluggin to webpack
   TODO: header.less => 
    .header {
    display: flex;
    flex-direction: column;
    align-items: center;
    color: black;
  }
}
 */

    render() {
        return (
            <div class="header">
            About Me
            </div>
        )
    }
}

export default Header
