import React from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';

import './TitleForm.scss';

const TitleForm = props => {

    const formik = useFormik({
        initialValues: {
            title: '',
            titleColor: '#ffffff',
            fontStyle: 'normal',
            fontWeight: 'normal',
            fontSize: '20'
        },
        validationSchema: Yup.object({
            title: Yup.string()
                .max(30, 'Must be 30 characters or less')
        }),
        onSubmit: values => {
            console.log(values)
            formik.resetForm();
        }
    });
    return (
        <form onSubmit={formik.handleSubmit} className='TitleForm'>
            <div className='TitleForm-inputDiv'>
                <label htmlFor='title' className='TitleForm-label'>
                    <p className='TitleForm-labelText'>Please add title for your form. If left empty no title will be added.</p>
                </label>
                <input
                    className='TitleForm-input'
                    placeholder='Title' 
                    type='text'
                    name='title'
                    id='title'
                    onChange={formik.handleChange}
                    value={formik.values.title}
                />
                {formik.touched.title && formik.errors.title ? <p className='TitleForm-error'>{formik.errors.title}</p> : null}
            </div>
            <div className='TitleForm-inlineInputDiv'>
                <label htmlFor='titleColor' className='TitleForm-colorLabel'>
                    <p className='TitleForm-labelText'>Font Color:</p>
                </label>
                <input
                    className='TitleForm-colorInput'
                    id='titleColor'
                    name='titleColor'
                    type='color'
                    value={formik.values.titleColor}
                    onChange={formik.handleChange}
                />
            </div>
            <div className='TitleForm-inlineInputDiv'>
                <label htmlFor='fontStyle' className='TitleForm-inlineInputLabel'>
                    <p className='TitleForm-labelText'>Font Style:</p>
                </label>
                <select
                    className='TitleForm-selectInput'
                    id='fontStyle'
                    name='fontStyle'
                    onChange={formik.handleChange}
                    value={formik.values.fontStyle}
                >
                    <option value='normal'>Normal</option>
                    <option value='italic'>Italic</option>
                    <option value='oblique'>Oblique</option>
                </select>
            </div>
            <div className='TitleForm-inlineInputDiv'>
                <label htmlFor='fontWeight' className='TitleForm-inlineInputLabel'>
                    <p className='TitleForm-labelText'>Font Weight:</p>
                </label>
                <select
                    className='TitleForm-selectInput'
                    id='fontWeight'
                    name='fontWeight'
                    onChange={formik.handleChange}
                    value={formik.values.fontWeight}
                >
                    <option value='normal'>Normal</option>
                    <option value='bold'>Bold</option>
                </select>
            </div>
            <div className='TitleForm-inlineInputDiv'>
                <label htmlFor='fontSize' className='TitleForm-inlineInputLabel'>
                    <p className='TitleForm-labelText'>Font Size (1-30px):</p>
                </label>
                <input
                    type='number'
                    id='fontSize'
                    name='fontSize'
                    onChange={formik.handleChange}
                    value={formik.values.fontSize}
                    className='TitleForm-numberInput'
                    min='1'
                    max='30'
                />
            </div>
            <div className='TitleForm-buttonDiv'>
                <button type='submit' className='TitleForm-button'>Add</button>
            </div>
        </form>
    );
}

export default TitleForm;