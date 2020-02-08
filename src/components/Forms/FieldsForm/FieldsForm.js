import React from 'react';
import { useFormik } from 'formik';

import './FieldsForm.scss';
import TextFieldForm from '../FieldSubForms/TextFieldForm/TextFieldForm';
import SelectFieldForm from '../FieldSubForms/SelectFieldForm/SelectFieldForm';

const FieldsForm = props => {

    const formik = useFormik({
        initialValues: {
            fieldType: 'select'
        }
    });

    const renderFieldsOptions = () => {
        if(formik.values.fieldType === 'text') {
            return <TextFieldForm setFormFields={props.setFormFields} />
        } else if(formik.values.fieldType === 'select') {
            return <SelectFieldForm setFormFields={props.setFormFields} />
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
                    <option value='Radio'>Check box</option>
                </select>
            </div>
            {renderFieldsOptions()}
        </div>
    );
}

export default FieldsForm;