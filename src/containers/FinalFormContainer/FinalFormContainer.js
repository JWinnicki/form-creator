import React, { useContext, useEffect } from 'react';
import { Link } from 'react-router-dom';

import './FinalFormContainer.scss'
import MainButton from '../../components/MainButton/MainButton';
import { FormContext } from '../../context/form-context';

const FinalFormContainer = props => {

    const { contextFormData } = useContext(FormContext);
    const { formBackgroundData } = contextFormData;

    useEffect(() => {
        if(!contextFormData.formBackgroundData) {
            props.history.push('/');
        }
        //eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    const buttonStyle = {
        buttonDimensionsOption: 'fixed',
        buttonHeight: 5,
        buttonWidth: 16,
        fontColor: '#ffffff',
        primaryColor: '#cf0000',
        secondaryColor: '#000000'
    }

    const renderBackgroundStyle = () => {
        if(contextFormData.formBackgroundData) {
            return {
                backgroundColor: formBackgroundData.backgroundColor,
                height: formBackgroundData.backgroundHeight,
                width: formBackgroundData.backgroundWidth
            }
        }
    }

    return (
        <div className='FinalFormContainer'>
            <div className='FinalFormContainer-FormDiv'>
                <form style={renderBackgroundStyle()}>

                </form>
            </div>
            <div className='FinalFormContainer-buttonDiv'>
                <Link to='/create-form'>
                    <MainButton styleData={buttonStyle} unit='em'>Back</MainButton>
                </Link>
            </div>
        </div>
    )
}

export default FinalFormContainer;