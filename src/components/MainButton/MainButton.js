import React from 'react';

import './MainButton.scss';

const MainButton = props => {

    const colorPrimary = {
        backgroundColor: props.colorPrimary,
        color: props.fontColor
    }

    const colorSecondary = {
        backgroundColor: props.colorSecondary
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
        <div className='MainButton-buttonDiv'>
            <button style={{...colorPrimary, ...dimensionsStyle}} type={props.type ? props.type : ''} className={`MainButton`}><p className='MainButton-text'>{props.children}</p></button>
            <div style={{...colorSecondary, ...dimensionsStyle}} className={`MainButton-background`}></div>
        </div>
    );
}

export default MainButton;