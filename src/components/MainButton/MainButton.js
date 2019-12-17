import React from 'react';

import './MainButton.scss';

const MainButton = props => {
    return (
        <React.Fragment>
            <button className={`MainButton MainButton-${props.size}`}>{props.children}</button>
            <div className={`MainButton-background MainButton-${props.size}__background`}></div>
        </React.Fragment>
    );
}

export default MainButton;