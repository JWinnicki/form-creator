import React from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';

import './FieldsForm.scss';
import BasicFormButton from '../../BasicFormButton/BasicFormButton';
import TextFieldForm from '../FieldSubForms/TextFieldForm';

const FieldsForm = props => {

    const formik = useFormik({
        initialValues: {
            fieldType: 'text'
        },
        validationSchema: Yup.object({
            textInputLabel: Yup.string()
        }),
        onSubmit: values => console.log(values)
    });

    const renderFieldsOptions = () => {
        if(formik.values.fieldType === 'text') {
            return <TextFieldForm />
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