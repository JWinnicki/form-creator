import React from 'react';
import { useFormik } from 'formik';

import './BackgroundForm.scss';
import BasicFormButton from '../../BasicFormButton/BasicFormButton';

const BackgroundForm = props => {

    const formik = useFormik({
        initialValues: {
            backgroundColor: '#ffffff'
        },
        onSubmit: values => {
            console.log(values)
        }
    });

    return (
        <form className='BackgroundForm' onSubmit={formik.handleSubmit}>
            <div className='BackgroundForm-inlineInputDiv'>
                <label htmlFor='backgroundColor' className='BackgroundForm-colorLabel'>
                    <p className='BackgroundForm-labelText'>Background Color:</p>
                </label>
                <input
                    className='BackgroundForm-colorInput'
                    id='backgroundColor'
                    name='backgroundColor'
                    type='color'
                    value={formik.values.backgroundColor}
                    onChange={formik.handleChange}
                />
            </div>
            <div className='BackgroundForm-buttonDiv'>
                <BasicFormButton type='submit'>Add</BasicFormButton>
            </div>
        </form>
    );
}

export default BackgroundForm;