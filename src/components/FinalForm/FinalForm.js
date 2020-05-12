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

                const labelStyle = {
                    color: el.textInputLabelFontColor,
                    fontSize: `${el.textInputLabelFontSize}px`,
                    fontWeight: el.textInputLabelFontWeight,
                    fontStyle: el.textInputLabelFontStyle    
                }
    
                const inputStyle = {
                    width: `${el.textInputWidth}px`,
                    backgroundColor: el.textInputBackground,
                    fontSize: `${el.textInputFontSize}px`,
                    color: el.textInputFontColor,
                    border: `1px solid ${el.textInputFontColor}`
                }

                return (
                    <div key={el.fieldId} className='FinalForm-textInputDiv' style={{alignItems: el.elementAlignment, marginLeft: el.margin}}>
                        <p style={labelStyle}>{el.textInputLabel}</p>
                        <input
                            className='FinalForm-textInput'
                            style={inputStyle} 
                            placeholder={el.inputPlaceholder}
                            type='text' 
                        />
                    </div>
                );
            } else if(el.fieldType === 'select') {

                const labelStyle = {
                    color: el.selectInputLabelFontColor,
                    fontSize: `${el.selectInputLabelFontSize}px`,
                    fontWeight: el.selectInputLabelFontWeight,
                    fontStyle: el.selectInputLabelFontStyle    
                }

                const inputStyle = {
                    width: `${el.selectInputWidth}px`,
                    backgroundColor: el.selectInputBackgroundColor,
                    border: `1px solid ${el.selectInputFontColor}`,
                    color: el.selectInputFontColor,
                    fontSize: `${el.selectInputFontSize}px`,
                }

                return (
                    <div key={el.fieldId} className='FinalForm-selectInputDiv' style={{justifyContent: el.elementAlignment, marginLeft: el.margin}}>
                        <p style={labelStyle}>{el.selectInputLabel}</p>
                        <select className='FinalForm-selectInput' style={inputStyle}>
                            {renderSelectOptions(el.options)}
                        </select>
                    </div>
                );
            } else /*if (el.fieldType === 'checkbox')  */{
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