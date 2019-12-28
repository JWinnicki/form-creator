import React from 'react';

import './BasicFormButton.scss';

const BasicFormButton = props => {
    return (
        <button type={props.type ? props.type : ''} className='BasicFormButton'>{props.children}</button>
    );
}

export default BasicFormButton;