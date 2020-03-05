import React, { useState } from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';

import './CheckBoxForm.scss';
import BasicFormButton from '../../../BasicFormButton/BasicFormButton';

const CheckBoxForm = props => {
    const [ options, setOptions ] = useState([]);
    const [ latestOption, setLatestOption ] = useState('');
    const [ counter, setCounter ] = useState(0);

    const formik = useFormik({
        initialValues: {
            checkBoxInputLabel: '',
            fieldType: 'select',
            checkBoxInputLabelFontSize: '15',
            checkBoxInputLabelFontStyle: 'normal',
            checkBoxInputLabelFontWeight: 'normal',
            checkBoxInputLabelFontColor: '#000000',
            checkBoxInputWidth: '100',
            checkBoxInputFontSize: '15',
            checkBoxInputFontColor: '#000000',
            checkBoxInputBackgroundColor: '#ffffff',
            elementAlignment: 'flex-start'
        },
        validationSchema: Yup.object({
            checkBoxInputLabel: Yup.string().max(50, 'Must be 50 characters or less'),
            checkBoxInputLabelFontSize: Yup.number().max(20, 'Too big').min(1, 'Too small'),
            checkBoxInputWidth: Yup.number().max(450, 'Too big').min(50, 'Too small'),
            checkBoxInputFontSize: Yup.number().max(20, 'Too big').min(1, 'Too small')
        }),
        //onSubmit: values => console.log(formik)
    });

    let labelError = '';
    if(formik.touched.checkBoxtInputLabel && formik.errors.checkBoxtInputLabel) {
        labelError='CheckBoxtFieldForm-error';
    }

    let labelFontSizeError = '';
    if(formik.touched.checkBoxtInputLabelFontSize && formik.errors.checkBoxtInputLabelFontSize) {
        labelFontSizeError='CheckBoxtFieldForm-error';
    }

    let inputWidthError = '';
    if(formik.touched.checkBoxtInputWidth && formik.errors.checkBoxtInputWidth) {
        inputWidthError='CheckBoxtFieldForm-error';
    }

    let inputFontSizeError = '';
    if(formik.touched.checkBoxtInputFontSize && formik.errors.checkBoxtInputFontSize) {
        inputFontSizeError='CheckBoxtFieldForm-error';
    }

    return(
        <form className='CheckBoxFieldForm'>
            <div className='CheckBoxFieldForm-section'>
                <h1 className='CheckBoxFieldForm-sectionTitle'>Label Settings</h1>
                <div className='CheckBoxFieldForm-inputDiv'>
                    <label htmlFor={`checkBoxInputLabel`} className={`CheckBoxFieldForm-label`}>
                        <p className='CheckBoxFieldForm-labelText'>Please add label/attachment/comment to this input:</p>
                    </label>
                    <input
                        className={`CheckBoxFieldForm-textInput ${labelError}`}
                        id={`checkBoxInputLabel`}
                        name={`checkBoxInputLabel`}
                        type='text'
                        onChange={formik.handleChange}
                        value={formik.values.checkBoxInputLabel}
                        placeholder='Label/Attachment/Comment'
                        onBlur={formik.handleBlur}
                    />
                    {formik.touched.checkBoxInputLabel && formik.errors.checkBoxInputLabel ? <p className='CheckBoxFieldForm-errorMsg'>{formik.errors.checkBoxInputLabel}</p> : null}
                </div>
                <div className='CheckBoxFieldForm-inlineInputDiv'>
                    <label htmlFor='checkBoxInputLabelFontStyle' className='CheckBoxFieldForm-inlineInputLabel'>
                        <p className='CheckBoxFieldForm-labelText'>Font Style:</p>
                    </label>
                    <select
                        className='CheckBoxFieldForm-selectInput'
                        id='checkBoxInputLabelFontStyle'
                        name='checkBoxInputLabelFontStyle'
                        onChange={formik.handleChange}
                        value={formik.values.checkBoxInputLabelFontStyle}
                    >
                        <option value='normal'>Normal</option>
                        <option value='italic'>Italic</option>
                    </select>
                </div>
                <div className='CheckBoxFieldForm-inlineInputDiv'>
                    <label htmlFor='checkBoxInputLabelFontWeight' className='CheckBoxFieldForm-inlineInputLabel'>
                        <p className='CheckBoxFieldForm-labelText'>Font Weight:</p>
                    </label>
                    <select
                        className='CheckBoxFieldForm-selectInput'
                        id='checkBoxInputLabelFontWeight'
                        name='checkBoxInputLabelFontWeight'
                        onChange={formik.handleChange}
                        value={formik.values.checkBoxInputLabelFontWeight}
                    >
                        <option value='normal'>Normal</option>
                        <option value='bold'>Bold</option>
                    </select>
                </div>
                <div className='CheckBoxFieldForm-inlineInputDiv'>
                    <label htmlFor='checkBoxInputLabelFontSize' className='CheckBoxFieldForm-inlineInputLabel'>
                        <p className='CheckBoxFieldForm-labelText'>Font Size (1-20px):</p>
                    </label>
                    <input
                        type='number'
                        id='checkBoxInputLabelFontSize'
                        name='checkBoxInputLabelFontSize'
                        onChange={formik.handleChange}
                        value={formik.values.checkBoxInputLabelFontSize}
                        className={`CheckBoxFieldForm-numberInput ${labelFontSizeError}`}
                        onBlur={formik.handleBlur}
                    />
                    {formik.touched.checkBoxInputLabelFontSize && formik.errors.checkBoxInputLabelFontSize ? <p className='CheckBoxFieldForm-errorMsg'>{formik.errors.checkBoxInputLabelFontSize}</p> : null}
                </div>
                <div className='CheckBoxFieldForm-inlineInputDiv'>
                    <label htmlFor='checkBoxInputLabelFontColor' className='CheckBoxFieldForm-colorLabel'>
                        <p className='CheckBoxFieldForm-labelText'>Font Color:</p>
                    </label>
                    <input
                        className='CheckBoxFieldForm-colorInput'
                        id='checkBoxInputLabelFontColor'
                        name='checkBoxInputLabelFontColor'
                        type='color'
                        value={formik.values.checkBoxInputLabelFontColor}
                        onChange={formik.handleChange}
                    />
                </div>
            </div>
        </form>
    );
}

export default CheckBoxForm;