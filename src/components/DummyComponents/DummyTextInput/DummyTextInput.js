import React from 'react';

import './DummyTextInput.scss';

const DummyTextInput = props => {
    const style = {
        width: `${props.textInputWidth}px`,
        backgroundColor: props.textInputBackground,
        fontSize: `${props.textInputFontSize}px`,
        color: props.textInputFontColor,
        border: `1px solid ${props.textInputFontColor}`
    }

    console.log(props)

    return (
        <div style={style} className='DummyTextInput'>{props.inputPlaceholder}</div>
    )
}

export default DummyTextInput;