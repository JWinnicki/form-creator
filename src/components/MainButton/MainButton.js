import React from 'react';

import './MainButton.scss';

const MainButton = props => {

    const { styleData } = props;
    const { buttonDimensionsOption, buttonHeight, buttonWidth, fontColor, paddingHorizontal, paddingVertical, primaryColor, secondaryColor } = styleData;
    const unit = props.unit ? props.unit : 'px';

    const colorPrimary = {
        backgroundColor: primaryColor,
        color: fontColor
    }

    const colorSecondary = {
        backgroundColor: secondaryColor
    }

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

    return (
        <div className='MainButton-buttonDiv'>
            <button style={{...colorPrimary, ...dimensionsStyle}} type={props.type ? props.type : ''} className={`MainButton`}><p className='MainButton-text'>{props.children}</p></button>
            <div style={{...colorSecondary, ...dimensionsStyle}} className={`MainButton-background`}></div>
        </div>
    );
}

export default MainButton;