import React from 'react';

import './CompositionComponent.scss';

const CompositionComponent = props => {
    const { backgroundStyle, titleStyle } = props;
    const { backgroundColor, backgroundWidth, backgroundHeight } = backgroundStyle;
    const { title, titleColor, fontStyle, fontWeight, fontSize } = titleStyle;
    const containerStyle = {
        backgroundColor,
        width: `${backgroundWidth}px`,
        height: `${backgroundHeight}px`
    };

    const headerStyle =  {
        color: titleColor,
        fontWeight,
        fontStyle,
        fontSize: `${fontSize}px`
    };

    const renderTitle = () => {
        if(title) {
            return <h1 style={headerStyle}>{title}</h1>;
        }
    }

    return (
        <div style={containerStyle} className='CompositionComponent'>
            {renderTitle()}
        </div>
    );
}

export default CompositionComponent;