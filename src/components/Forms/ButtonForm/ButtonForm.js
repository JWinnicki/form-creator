import React from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';

import './ButtonForm.scss';

const ButtonForm = props => {

    const formik = useFormik({
        initialValues: {
            buttonDimensionsOption: 'text'
        },
        validationSchema: Yup.object({

        })
    });

    return (
        <div className='ButtonForm'>
            <div className='ButtonForm-togglerContainer'>
                <div className='ButtonForm-togglerOptionDiv'>
                    <label htmlFor='text'>
                        <input 
                            type='radio'
                            name='buttonDimensionsOption'
                            id='text'
                            value='text'
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                            checked={formik.values.buttonDimensionsOption === 'text'}
                            className='ButtonForm-radioInput'
                        />
                        <div className='ButtonForm-toggleButton'>
                            <p className='ButtonForm-toggleButtonParagraph'>Dimensions according to inner text settings</p>
                        </div>
                    </label>
                </div>
                <div className='ButtonForm-togglerOptionDiv'>
                    <label htmlFor='fixed'>
                        <input 
                            type='radio'
                            name='buttonDimensionsOption'
                            id='fixed'
                            value='fixed'
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                            checked={formik.values.buttonDimensionsOption === 'fixed'}
                            className='ButtonForm-radioInput'
                        />
                        <div className='ButtonForm-toggleButton'>
                            <p className='ButtonForm-toggleButtonParagraph'>Dimensions fixed by user</p>
                        </div>
                    </label>
                </div>
            </div>
        </div>
    );
}

export default ButtonForm;