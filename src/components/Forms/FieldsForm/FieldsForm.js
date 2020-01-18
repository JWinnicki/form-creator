import React from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';

import './FieldsForm.scss';
import TextFieldForm from '../FieldSubForms/TextFieldForm/TextFieldForm';
import SelectFieldForm from '../FieldSubForms/SelectFieldForm/SelectFieldForm';

const FieldsForm = props => {

    const formik = useFormik({
        initialValues: {
            fieldType: 'select'
        },
        validationSchema: Yup.object({
            textInputLabel: Yup.string()
        }),
        onSubmit: values => console.log(values)
    });

    const renderFieldsOptions = () => {
        if(formik.values.fieldType === 'text') {
            return <TextFieldForm />
        } else if(formik.values.fieldType === 'select') {
            return <SelectFieldForm />
        }
    }



    return (
        <div className='FieldsForm'>
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
                    <option value='select'>Select</option>
                    <option value='text'>Text</option>
                    <option value='Radio'>Radio</option>
                </select>
            </div>
            {renderFieldsOptions()}
        </div>
    );
}

export default FieldsForm;