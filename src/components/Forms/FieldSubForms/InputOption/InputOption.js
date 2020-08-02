import React from 'react';

import './InputOption.scss';

const InputOption = ({text, id, click}) => {
    return (
        <li className='InputOption'>
            <p className='InputOption-text'>{text}</p>
            <button className='InputOption-button' type='button' onClick={click} id={id}>x</button>
        </li>
    );
}

export default InputOption;
