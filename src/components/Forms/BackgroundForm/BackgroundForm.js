import React from 'react';
import { useFormik } from 'formik';

import './BackgroundForm.scss';
import BasicFormButton from '../../BasicFormButton/BasicFormButton';

const BackgroundForm = props => {

    const formik = useFormik({
        initialValues: {
            backgroundColor: '#ffffff',
            backgroundWidth: 500,
            backgroundHeight: 700
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
            <div className='BackgroundForm-inlineInputDiv'>
                <label htmlFor='backgroundWidth' className='BackgroundForm-inlineInputLabel'>
                    <p className='BackgroundForm-labelText'>Background Width (px):</p>
                </label>
                <input
                    type='number'
                    id='backgroundWidth'
                    name='backgroundWidth'
                    onChange={formik.handleChange}
                    value={formik.values.backgroundWidth}
                    className='BackgroundForm-numberInput'
                    min='100'
                    max='800'
                />
            </div>
            <div className='BackgroundForm-inlineInputDiv'>
                <label htmlFor='backgroundHeight' className='BackgroundForm-inlineInputLabel'>
                    <p className='BackgroundForm-labelText'>Background Height (px):</p>
                </label>
                <input
                    type='number'
                    id='backgroundHeight'
                    name='backgroundHeight'
                    onChange={formik.handleChange}
                    value={formik.values.backgroundHeight}
                    className='BackgroundForm-numberInput'
                    min='100'
                    max='1000'
                />
            </div>
            <div className='BackgroundForm-buttonDiv'>
                <BasicFormButton type='button' clicked={props.setFormBackground} data={formik.values} >Add</BasicFormButton>
            </div>
        </form>
    );
}

export default BackgroundForm;