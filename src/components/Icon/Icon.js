import React from 'react';

import './Icon.scss';
import icons from '../../assets/icons.svg';

const Icon = props => {

    const style = {
        fill: props.color
    }
    
    return (
        <svg 
            xmlnsXlink="http://www.w3.org/1999/xlink"
            xmlns="http://www.w3.org/2000/svg"
            style={style}
            className={`icon-${props.icon} ${props.size} ${props.rotate ? props.rotate : null} ${props.inverted ? props.inverted : null}`}
        >
            <use xlinkHref={`${icons}#${props.icon}`} />
        </svg>
    )
}

export default Icon;