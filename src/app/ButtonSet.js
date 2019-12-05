import React from 'react';
import '../../style/buttonSet.less'


const ButtonSet = function ButtonSet(props) {
    return (
        <div className='button-grid-container'>
            <button>
                &lt;
            </button>
            <button>
                &gt;
            </button>
        </div>
    )
}

export default ButtonSet