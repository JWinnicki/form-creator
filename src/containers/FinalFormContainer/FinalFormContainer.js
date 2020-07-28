import React, { useContext } from 'react';
import { Link, Redirect } from 'react-router-dom';

import './FinalFormContainer.scss'
import MainButton from '../../components/MainButton/MainButton';
import FinalForm from '../../components/FinalForm/FinalForm';
import { FormContext } from '../../context/form-context';

const FinalFormContainer = () => {

    const { contextFormData } = useContext(FormContext);

    const buttonStyle = {
        buttonDimensionsOption: 'fixed',
        buttonHeight: 5,
        buttonWidth: 16,
        fontColor: '#ffffff',
        primaryColor: '#cf0000',
        secondaryColor: '#000000'
    }

    const renderForm = () => {
        if(contextFormData.formBackgroundData) {
            return <FinalForm formData={contextFormData} />
        } else {
            return <Redirect to='/' />
        }
    }

    return (
        <div className='FinalFormContainer'>
            <div className='FinalFormContainer-FormDiv'>
                {renderForm()}
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