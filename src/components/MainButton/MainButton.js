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
    return (
        <div className='MainButton-buttonDiv'>
            <button style={colorPrimary} type={props.type ? props.type : ''} className={`MainButton MainButton-${props.size}`}>{props.children}</button>
            <div style={colorSecondary} className={`MainButton-background MainButton-${props.size}__background`}></div>
        </div>
    );
}

export default MainButton;