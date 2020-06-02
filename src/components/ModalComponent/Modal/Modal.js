import React from 'react';

import Backdrop from '../Backdrop/Backdrop';
import BasicFormButton from '../../BasicFormButton/BasicFormButton';
import './Modal.scss';

const Modal = ({onCloseModal}) => {
    
    const buttonStyle = {
        buttonDimensionsOption: 'text',
        paddingVertical: .8,
        paddingHorizontal: 1.5,
        fontColor: '#ffffff',
        primaryColor: '#cf0000',
        secondaryColor: '#000000',
        buttonWidth: 8.2,
        buttonHeight: 3.4
    }

    return (
        <>  
            <Backdrop onCloseModal={onCloseModal}>
                <div className='Modal'>
                    <div className='Modal-container' onClick={(e) => e.stopPropagation()}>
                        <BasicFormButton type='button' clicked={onCloseModal} styleData={buttonStyle} unit='em'>CLOSE</BasicFormButton>
                    </div>
                </div>
            </Backdrop>
        </>
    );
}
export default Modal;