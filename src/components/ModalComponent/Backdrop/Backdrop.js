import React from 'react';

import './Backdrop.scss';

const Backdrop = ({onCloseModal, children}) => (
    <div onClick={onCloseModal} className='Backdrop'>
        {children}
    </div>
);

export default Backdrop;