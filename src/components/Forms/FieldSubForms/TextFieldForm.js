import React from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';

const TextFieldForm = () => {
    const formik = useFormik({
        initialValues: {
            textInputLabel: '',
            inputPlaceholder: '',
            fieldType: 'text',
            textInputFontSize: '15',
            textInputFontStyle: 'normal',
            textInputFontWeight: 'normal'
        },
        validationSchema: Yup.object({
            textInputLabel: Yup.string()
        }),
        onSubmit: values => console.log(values)
    });

    return (
        <React.Fragment>
            <div className='FieldsForm-inputDiv'>
                <label htmlFor={`textInputLabel`} className='FieldsForm-label'>
                    <p className='FieldsForm-labelText'>Please add label/attachment/comment to this input:</p>
                </label>
                <input
                    className='FieldsForm-input'
                    id={`textInputLabel`}
                    name={`textInputLabel`}
                    type='text'
                    onChange={formik.handleChange}
                    value={formik.values.textInputLabel}
                    placeholder='Label/Attachment/Comment'
                />
            </div>
            <div className='FieldsForm-inputDiv'>
                <label htmlFor={`inputPlaceholder`} className='FieldsForm-label'>
                    <p className='FieldsForm-labelText'>Please add placeholder text for this input:</p>
                </label>
                <input
                    className='FieldsForm-input'
                    id={`inputPlaceholder`}
                    name={`inputPlaceholder`}
                    type='text'
                    onChange={formik.handleChange}
                    value={formik.values.inputPlaceholder}
                    placeholder='Placeholder'
                />
            </div>
            <div className='FieldsForm-inlineInputDiv'>
                <label htmlFor='textInputFontStyle' className='FieldsForm-inlineInputLabel'>
                    <p className='FieldsForm-labelText'>Font Style:</p>
                </label>
                <select
                    className='FieldsForm-selectInput'
                    id='textInputFontStyle'
                    name='textInputFontStyle'
                    onChange={formik.handleChange}
                    value={formik.values.textInputFontStyle}
                >
                    <option value='normal'>Normal</option>
                    <option value='italic'>Italic</option>
                    <option value='oblique'>Oblique</option>
                </select>
            </div>
            <div className='FieldsForm-inlineInputDiv'>
                <label htmlFor='textInputFontWeight' className='FieldsForm-inlineInputLabel'>
                    <p className='FieldsForm-labelText'>Font Weight:</p>
                </label>
                <select
                    className='FieldsForm-selectInput'
                    id='textInputFontWeight'
                    name='textInputFontWeight'
                    onChange={formik.handleChange}
                    value={formik.values.textInputFontWeight}
                >
                    <option value='normal'>Normal</option>
                    <option value='bold'>Bold</option>
                </select>
            </div>
            <div className='FieldsForm-inlineInputDiv'>
                <label htmlFor='textInputFontSize' className='FieldsForm-inlineInputLabel'>
                    <p className='FieldsForm-labelText'>Font Size (1-30px):</p>
                </label>
                <input
                    type='number'
                    id='textInputFontSize'
                    name='textInputFontSize'
                    onChange={formik.handleChange}
                    value={formik.values.textInputFontSize}
                    className='FieldsForm-numberInput'
                    min='1'
                    max='30'
                />
            </div>
        </React.Fragment>
    );
}

export default TextFieldForm;