import React from 'react';

import './BasicFormButton.scss';

const BasicFormButton = props => {
    const { clicked, data, type, children, primaryColor, fontColor } = props;

    const style = {
        backgroundColor: primaryColor,
        color: fontColor
    }

    return (
        <button style={style} type={type ? type : 'button'} onClick={() => clicked(data)} className='BasicFormButton'>{children}</button>
    );
}

export default BasicFormButton;