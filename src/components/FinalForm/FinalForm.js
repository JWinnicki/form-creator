import React from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';

import './FinalForm.scss';

const FinalForm = props => {

    const { formTitleData, formBackgroundData, formFieldsData, formButtonStyle } = props.formData;

    const formik = useFormik({
        initialValues: {
        },
        validationSchema: Yup.object({
        }),
        onSubmit: () => {}
    });

    const backgroundStyle = {
        backgroundColor: formBackgroundData.backgroundColor,
        height: formBackgroundData.backgroundHeight,
        width: formBackgroundData.backgroundWidth
    };

    const titleStyle = {
        color: formTitleData.titleColor,
        fontSize: `${formTitleData.fontSize}px`,
        fontWeight: formTitleData.fontWeight,
        fontStyle: formTitleData.fontStyle
    }

    const renderFields = () => {

        const renderSelectOptions = arr => {
            return arr.map(el => {
                return <option key={el.id}>{el.option}</option>
            })
        }

        const renderCheckboxOptions = (arr, fieldId) => {
            return arr.map(el => {
                return (
                    <div key={el.id}>
                        <input
                            type='checkbox'
                            id={`field${fieldId}-option${el.id}`}
                        />
                        <label htmlFor={`field${fieldId}-option${el.id}`}>
                            <p>{el.option}</p>
                        </label>
                    </div>
                );
            })
        }

        return formFieldsData.map(el => {
            if(el.fieldType === 'text') {
                return (
                    <div key={el.fieldId}>
                        <p>{el.textInputLabel}</p>
                        <input 
                            placeholder={el.inputPlaceholder}
                            type='text' 
                        />
                    </div>
                );
            } else if(el.fieldType === 'select') {
                return (
                    <div key={el.fieldId}>
                        <p>{el.selectInputLabel}</p>
                        <select>
                            {renderSelectOptions(el.options)}
                        </select>
                    </div>
                );
            } else if(el.fieldType = 'checkbox') {
                return (
                    <div key={el.fieldId}>
                        {renderCheckboxOptions(el.options, el.fieldId)}
                    </div>
                );
            }
        });
    }

    return (
        <form className='FinalForm' style={backgroundStyle}>
            <h1 className='FinalForm-title' style={titleStyle}>{formTitleData ? formTitleData.title : ''}</h1>
            <div className='FinalForm-fieldsDiv'>
                {renderFields()}
            </div>
        </form>
    );
}

export default FinalForm;