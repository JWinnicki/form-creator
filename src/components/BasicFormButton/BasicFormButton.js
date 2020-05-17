import React from 'react';

import './BasicFormButton.scss';

const BasicFormButton = props => {

    const { styleData, clicked, data, type, children } = props;
    const { buttonDimensionsOption, buttonHeight, buttonWidth, fontColor, paddingHorizontal, paddingVertical, primaryColor } = styleData;
    const unit = props.unit ? props.unit : 'px';

    let dimensionsStyle = {};

    if(buttonDimensionsOption === 'text') {
        dimensionsStyle = { 
            padding: `${paddingVertical}${unit} ${paddingHorizontal}${unit}`
        }
    } else if(buttonDimensionsOption === 'fixed') {
        dimensionsStyle = {
            height: `${buttonHeight}${unit}`,
            width: `${buttonWidth}${unit}`
        }
    }
    
    const style = {
        backgroundColor: primaryColor,
        color: fontColor
    }

    let invertColors = {};

    if(props.invertColors) {
        invertColors = {
            filter: 'invert(1)',
        }
    }

    const onClickHandler = () => {
        if(clicked && data) {
            clicked(data);
        }
    }

    return (
        <button style={{...style, ...dimensionsStyle, ...invertColors}} type={type ? type : 'button'} onClick={onClickHandler} className='BasicFormButton'><p className='BasicFormButton-text'>{children}</p></button>
    );
}

export default BasicFormButton;