import React from 'react';

import './CompositionComponent.scss';

const CompositionComponent = props => {
    const { backgroundStyle } = props;
    const { backgroundColor, backgroundWidth, backgroundHeight } = backgroundStyle;
    const style = {
        backgroundColor,
        width: `${backgroundWidth}px`,
        height: `${backgroundHeight}px`
    }

    return (
        <div style={style}></div>
    );
}

export default CompositionComponent;