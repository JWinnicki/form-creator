import React from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';

import './FieldsForm.scss';
import BasicFormButton from '../../BasicFormButton/BasicFormButton';

const FieldsForm = props => {

    const formik = useFormik({
        initialValues: {
            textInputLabel: '',
            inputPlaceholder: '',
            fieldType: 'text'
        },
        validationSchema: Yup.object({
            textInputLabel: Yup.string()
        }),
        onSubmit: values => console.log(values)
    });

    const renderFieldsOptions = () => {
        if(formik.values.fieldType === 'text') {
            return (
                <React.Fragment>
                    <div className='FieldsForm-inputDiv'>
                        <label htmlFor={`textInputLabel`} className='FieldsForm-label'>
                            <p className='FieldsForm-labelText'>Please add label/attachment/comment to this input.</p>
                        </label>
                        <input
                            className='FieldsForm-input'
                            id={`textInputLabel`}
                            name={`textInputLabel`}
                            type='text'
                            onChange={formik.handleChange}
                            value={formik.values.textInputLabel}
                        />
                    </div>
                </React.Fragment>
            );
        }
    }



    return (
        <form className='FieldsForm' onSubmit={formik.handleSubmit}>
            <div className='FieldsForm-inlineInputDiv'>
                <label htmlFor='fieldType' className='FieldsForm-inlineInputLabel'>
                    <p className='FieldsForm-labelText'>Field Type:</p>
                </label>
                <select
                    className='FieldsForm-selectInput'
                    id='fieldType'
                    name='fieldType'
                    onChange={formik.handleChange}
                    value={formik.values.fieldType}
                >
                    <option value='text'>Text</option>
                    <option value='select'>Select</option>
                    <option value='Radio'>Radio</option>
                </select>
            </div>
            {renderFieldsOptions()}
            <div className='FieldsForm-buttonDiv'>
                <BasicFormButton type='submit'>Add</BasicFormButton>
            </div>
        </form>
    );
}

export default FieldsForm;