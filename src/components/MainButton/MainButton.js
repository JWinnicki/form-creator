import React from 'react';

import './MainButton.scss';

const MainButton = ({ styleData, ...props }) => {
    
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

    let invertColors = {};

    if(props.invertColors) {
        invertColors = {
            filter: 'invert(1)',
        }
    }

    let animation = {};

    if(props.animation === true) {
        animation = {
            animationName: 'mainButton'
        }
    }

    const onClickHandler = () => {
        if(props.clicked && props.data) {
            props.clicked(props.data);
        }
    }

    return (
        <div className='MainButton-buttonDiv' style={{...invertColors, ...animation}}>
            <button onClick={onClickHandler} style={{...colorPrimary, ...dimensionsStyle}} type={props.type ? props.type : 'button'} className={`MainButton`}><p className='MainButton-text'>{props.children}</p></button>
            <div style={{...colorSecondary, ...dimensionsStyle}} className={`MainButton-background`}></div>
        </div>
    );
}

export default MainButton;