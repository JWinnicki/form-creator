import React from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';

import './BackgroundForm.scss';
import BasicFormButton from '../../BasicFormButton/BasicFormButton';

const BackgroundForm = props => {

    const formik = useFormik({
        initialValues: {
            backgroundColor: '#ffffff',
            backgroundWidth: 500,
            backgroundHeight: 700
        },
        validationSchema: Yup.object({
            backgroundWidth: Yup.number().max(800, 'Must be 800px or less').min(100, 'Must be 100px or more'),
            backgroundHeight: Yup.number().max(1000, 'Must be 1000px or less').min(100, 'Must be 100px or more'),
        }),
        onSubmit: values => {
            console.log(values)
        }
    });

    let backgroundWidthError = '';
    if(formik.touched.backgroundWidth && formik.errors.backgroundWidth) {
        backgroundWidthError='TextFieldForm-error';
    }

    let backgroundHeightError = '';
    if(formik.touched.backgroundHeight && formik.errors.backgroundHeight) {
        backgroundHeightError='TextFieldForm-error';
    }

    const onClickHandler = data => {
        if(!formik.errors.backgroundWidth && !formik.errors.backgroundHeight) {
            props.setFormBackground(data);
        }
    }

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
                    onBlur={formik.handleBlur}
                    value={formik.values.backgroundWidth}
                    className={`BackgroundForm-numberInput ${backgroundWidthError}`}
                    min='100'
                    max='800'
                />
                {formik.touched.backgroundWidth && formik.errors.backgroundWidth ? <p className='TextFieldForm-errorMsg'>{formik.errors.backgroundWidth}</p> : null}
            </div>
            <div className='BackgroundForm-inlineInputDiv'>
                <label htmlFor='backgroundHeight' className='BackgroundForm-inlineInputLabel'>
                    <p className='BackgroundForm-labelText'>Background Height (px):</p>
                </label>
                <input
                    type='number'
                    id='backgroundHeight'
                    name='backgroundHeight'
                    onBlur={formik.handleBlur}
                    onChange={formik.handleChange}
                    value={formik.values.backgroundHeight}
                    className={`BackgroundForm-numberInput ${backgroundHeightError}`}
                    min='100'
                    max='1000'
                />
                {formik.touched.backgroundHeight && formik.errors.backgroundHeight ? <p className='TextFieldForm-errorMsg'>{formik.errors.backgroundHeight}</p> : null}
            </div>
            <div className='BackgroundForm-buttonDiv'>
                <BasicFormButton type='button' clicked={onClickHandler} data={formik.values} >Add</BasicFormButton>
            </div>
        </form>
    );
}

export default BackgroundForm;