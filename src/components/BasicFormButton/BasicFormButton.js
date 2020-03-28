import React from 'react';

import './BasicFormButton.scss';

const BasicFormButton = props => {
    const { clicked, data, type, children, primaryColor, fontColor } = props;

    const style = {
        backgroundColor: primaryColor,
        color: fontColor
    }

    let dimensionsStyle = {};

    if(!props.height || !props.width) {
        dimensionsStyle = { 
            padding: `${props.paddingVertical}${props.unit} ${props.paddingHorizontal}${props.unit}`
        }
    } else if(!props.paddingVertical || !props.paddingHorizontal) {
        dimensionsStyle = {
            height: `${props.height}${props.unit}`,
            width: `${props.width}${props.unit}`
        }
    }

    return (
        <button style={{...style, ...dimensionsStyle}} type={type ? type : 'button'} onClick={() => clicked(data)} className='BasicFormButton'><p className='BasicFormButton-text'>{children}</p></button>
    );
}

export default BasicFormButton;