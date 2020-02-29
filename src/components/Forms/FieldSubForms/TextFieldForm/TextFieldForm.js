import React from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';

import './TextFieldForm.scss';
import BasicFormButton from '../../../BasicFormButton/BasicFormButton';

const TextFieldForm = props => {
    const formik = useFormik({
        initialValues: {
            textInputLabel: '',
            inputPlaceholder: '',
            fieldType: 'text',
            textInputLabelFontSize: '15',
            textInputLabelFontStyle: 'normal',
            textInputLabelFontWeight: 'normal',
            textInputLabelFontColor: '#000000',
            textInputWidth: '300',
            textInputBackground: '#FFFFFF',
            textInputFontSize: '15',
            textInputFontColor: '#000000',
            elementAlignment: 'flex-start'
        },
        validationSchema: Yup.object({
            textInputLabel: Yup.string().max(50, 'Must be 50 characters or less'),
            inputPlaceholder: Yup.string(),
            textInputLabelFontSize: Yup.number().max(20, 'Too big').min(1, 'Too small').required('It is required'),
            textInputWidth: Yup.number(450, 'Too big').max(450, 'Too big').min(50, 'Too small').required('It is required'),
            textInputFontSize: Yup.number().max(20, 'Too big').min(1, 'Too small').required('It is required')
        }),
        onSubmit: ()=> {}
    });

    let labelErrorClass = '';
    if(formik.touched.textInputLabel && formik.errors.textInputLabel) {
        labelErrorClass='TextFieldForm-error';
    }

    let labelFontSizeError = '';
    if(formik.touched.textInputLabelFontSize && formik.errors.textInputLabelFontSize) {
        labelFontSizeError='TextFieldForm-error';
    }

    let inputWidthError = '';
    if(formik.touched.textInputWidth && formik.errors.textInputWidth) {
        inputWidthError='TextFieldForm-error';
    }

    let inputFontSizeError = '';
    if(formik.touched.textInputFontSize && formik.errors.textInputFontSize) {
        inputFontSizeError='TextFieldForm-error';
    }

    const onClickHandler = data => {
        if(!formik.errors.textInputLabel && !formik.errors.textInputLabelFontSize && !formik.errors.textInputWidth && !formik.errors.textInputFontSize) {
            props.setFormFields(data);
        }
    }

    return (
        <form className='TextFieldForm' onSubmit={formik.handleSubmit}>
            <div className='TextFieldForm-section'>
                <h1 className='TextFieldForm-sectionTitle'>Label Settings</h1>
                <div className='TextFieldForm-inputDiv'>
                    <label htmlFor='textInputLabel' className='TextFieldForm-label'>
                        <p className='TextFieldForm-labelText'>Please add label/attachment/comment to this input:</p>
                    </label>
                    <input
                        className={`TextFieldForm-textInput ${labelErrorClass}`}
                        id='textInputLabel'
                        name='textInputLabel'
                        type='text'
                        onChange={formik.handleChange}
                        value={formik.values.textInputLabel}
                        placeholder='Label/Attachment/Comment'
                        onBlur={formik.handleBlur}
                    />
                    {formik.touched.textInputLabel && formik.errors.textInputLabel ? <p className='TextFieldForm-errorMsg'>{formik.errors.textInputLabel}</p> : null}
                </div>
                <div className='TextFieldForm-inlineInputDiv'>
                    <label htmlFor='textInputLabelFontStyle' className='TextFieldForm-inlineInputLabel'>
                        <p className='TextFieldForm-labelText'>Font Style:</p>
                    </label>
                    <select
                        className='TextFieldForm-selectInput'
                        id='textInputLabelFontStyle'
                        name='textInputLabelFontStyle'
                        onChange={formik.handleChange}
                        value={formik.values.textInputLabelFontStyle}
                    >
                        <option value='normal'>Normal</option>
                        <option value='italic'>Italic</option>
                        <option value='oblique'>Oblique</option>
                    </select>
                </div>
                <div className='TextFieldForm-inlineInputDiv'>
                    <label htmlFor='textInputLabelFontWeight' className='TextFieldForm-inlineInputLabel'>
                        <p className='TextFieldForm-labelText'>Font Weight:</p>
                    </label>
                    <select
                        className='TextFieldForm-selectInput'
                        id='textInputLabelFontWeight'
                        name='textInputLabelFontWeight'
                        onChange={formik.handleChange}
                        value={formik.values.textInputLabelFontWeight}
                    >
                        <option value='normal'>Normal</option>
                        <option value='bold'>Bold</option>
                    </select>
                </div>
                <div className='TextFieldForm-inlineInputDiv'>
                    <label htmlFor='textInputLabelFontSize' className='TextFieldForm-inlineInputLabel'>
                        <p className='TextFieldForm-labelText'>Font Size (1-20px):</p>
                    </label>
                    <input
                        type='number'
                        id='textInputLabelFontSize'
                        name='textInputLabelFontSize'
                        onChange={formik.handleChange}
                        value={formik.values.textInputLabelFontSize}
                        className={`TextFieldForm-numberInput ${labelFontSizeError}`}
                        onBlur={formik.handleBlur}
                    />
                    {formik.touched.textInputLabelFontSize && formik.errors.textInputLabelFontSize ? <p className='TextFieldForm-errorMsg'>{formik.errors.textInputLabelFontSize}</p> : null}
                </div>
                <div className='TextFieldForm-inlineInputDiv'>
                    <label htmlFor='textInputLabelFontColor' className='TextFieldForm-colorLabel'>
                        <p className='TextFieldForm-labelText'>Font Color:</p>
                    </label>
                    <input
                        className='TextFieldForm-colorInput'
                        id='textInputLabelFontColor'
                        name='textInputLabelFontColor'
                        type='color'
                        value={formik.values.textInputLabelFontColor}
                        onChange={formik.handleChange}
                    />
                </div>
            </div>
            {/***********************************************************************************************************************************************************/}
            <div className='TextFieldForm-section'>
                <h1 className='TextFieldForm-sectionTitle'>Input Settings</h1>
                <div className='TextFieldForm-inputDiv'>
                    <label htmlFor={`inputPlaceholder`} className='TextFieldForm-label'>
                        <p className='TextFieldForm-labelText'>Please add placeholder for this input:</p>
                    </label>
                    <input
                        className='TextFieldForm-textInput'
                        id={`inputPlaceholder`}
                        name={`inputPlaceholder`}
                        type='text'
                        onChange={formik.handleChange}
                        value={formik.values.inputPlaceholder}
                        placeholder='Placeholder'
                    />
                </div>
                <div className='TextFieldForm-inlineInputDiv'>
                    <label htmlFor='textInputWidth' className='TextFieldForm-inlineInputLabel'>
                        <p className='TextFieldForm-labelText'>Input Width (50-450px):</p>
                    </label>
                    <input
                        type='number'
                        id='textInputWidth'
                        name='textInputWidth'
                        onChange={formik.handleChange}
                        value={formik.values.textInputWidth}
                        className={`TextFieldForm-numberInput ${inputWidthError}`}
                        onBlur={formik.handleBlur}
                    />
                    {formik.touched.textInputWidth && formik.errors.textInputWidth ? <p className='TextFieldForm-errorMsg'>{formik.errors.textInputWidth}</p> : null}
                </div>
                <div className='TextFieldForm-inlineInputDiv'>
                    <label htmlFor='textInputFontSize' className='TextFieldForm-inlineInputLabel'>
                        <p className='TextFieldForm-labelText'>Font Size (1-20px):</p>
                    </label>
                    <input
                        type='number'
                        id='textInputFontSize'
                        name='textInputFontSize'
                        onChange={formik.handleChange}
                        value={formik.values.textInputFontSize}
                        className={`TextFieldForm-numberInput ${inputFontSizeError}`}
                        onBlur={formik.handleBlur}
                    />
                    {formik.touched.textInputFontSize && formik.errors.textInputFontSize ? <p className='TextFieldForm-errorMsg'>{formik.errors.textInputFontSize}</p> : null}
                </div>
                <div className='TextFieldForm-inlineInputDiv'>
                    <label htmlFor='textInputFontColor' className='TextFieldForm-colorLabel'>
                        <p className='TextFieldForm-labelText'>Font Color:</p>
                    </label>
                    <input
                        className='TextFieldForm-colorInput'
                        id='textInputFontColor'
                        name='textInputFontColor'
                        type='color'
                        value={formik.values.textInputFontColor}
                        onChange={formik.handleChange}
                    />
                </div>
                <div className='TextFieldForm-inlineInputDiv'>
                    <label htmlFor='elementAlignment' className='TextFieldForm-inlineInputLabel'>
                        <p className='TextFieldForm-labelText'>Element Alignment:</p>
                    </label>
                    <select
                        className='TextFieldForm-selectInput'
                        id='elementAlignment'
                        name='elementAlignment'
                        onChange={formik.handleChange}
                        value={formik.values.elementAlignment}
                    >
                        <option value='flex-start'>To right</option>
                        <option value='center'>Center</option>
                        <option value='flex-end'>To left</option>
                    </select>
                </div>
            </div>
            <div className='TextFieldForm-buttonDiv'>
                <BasicFormButton type='button' data={formik.values} clicked={onClickHandler} >Add</BasicFormButton>
            </div>
        </form>
    );
}

export default TextFieldForm;