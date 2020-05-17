import React from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';

import './FinalForm.scss';
import BasicFormButton from '../BasicFormButton/BasicFormButton';
import MainButton from '../MainButton/MainButton';
const FinalForm = props => {

    const { formTitleData, formBackgroundData, formFieldsData, formButtonStyle } = props.formData;

    const valuesArr = () => {

        const newArr = [];

        [...formFieldsData].forEach(el => {
            let val = "";
            if(el.options) {
                val = el.options[0].option;
            }
            newArr.push({[`field${el.fieldId}`]: val});
        });

        let newObj = {};

        newArr.forEach(el => {
            newObj = {...newObj, ...el}
        });

        return newObj;
    }

    //console.log(valuesArr());

    const formik = useFormik({
        initialValues: valuesArr(),
        validationSchema: Yup.object({
        }),
        onSubmit: values => {
            console.log(values)
            //alert(["elo", "elo2"])
        }
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

                const renderSelectOptions = arr => {
                    return arr.map(el => {
                        return <option key={el.id}>{el.option}</option>
                    })
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

                const labelStyle = {
                    color: el.checkBoxInputLabelFontColor,
                    fontSize: `${el.checkBoxInputLabelFontSize}px`,
                    fontWeight: el.checkBoxInputLabelFontWeight,
                    fontStyle: el.checkBoxInputLabelFontStyle    
                }
    
                const optionStyle = {
                    color: el.checkBoxOptionFontColor,
                    fontSize: `${el.checkBoxOptionFontSize}px`,
                    marginLeft: '4px'
                }
    
                const checkBoxInputStyle = {
                    height: `${Number(el.checkBoxOptionFontSize) - 3}px`,
                    width: `${Number(el.checkBoxOptionFontSize) - 3}px`
                }

                const renderCheckboxOptions = (arr, fieldId) => {
                    return arr.map(el => {
                        return (
                            <div key={el.id} className={`FinalForm-checkBoxOption`}>
                                <input
                                    type='checkbox'
                                    id={`field${fieldId}-option${el.id}`}
                                    style={checkBoxInputStyle}
                                />
                                <label htmlFor={`field${fieldId}-option${el.id}`}>
                                    <p style={optionStyle}>{el.option}</p>
                                </label>
                            </div>
                        );
                    })
                }

                return (
                    <div key={el.fieldId} className='FinalForm-checkBoxInputDiv' style={{alignItems: el.elementAlignment, marginLeft: el.margin}}>
                        <div>
                            <p style={labelStyle}>{el.checkBoxInputLabel}</p>
                        </div>
                        <div className='FinalForm-checkBoxOptionsDiv'>
                            {renderCheckboxOptions(el.options, el.fieldId)}
                        </div>
                    </div>
                );
            }
        });
    }

    const renderButton = () => {
        if(formButtonStyle && (formButtonStyle.buttonStyle === 'optionOne' || formButtonStyle.buttonStyle === 'optionThree')) {
            return <MainButton styleData={formButtonStyle} type='submit' clicked={formik.onSubmit}>{formButtonStyle.buttonInnerText}</MainButton>
        } else if(formButtonStyle && (formButtonStyle.buttonStyle === 'optionTwo' || formButtonStyle.buttonStyle === 'optionFour')) {
            return <BasicFormButton type='submit' clicked={formik.onSubmit} styleData={formButtonStyle}>{formButtonStyle.buttonInnerText}</BasicFormButton>
        }
    }

    return (
        <form className='FinalForm' style={backgroundStyle} onSubmit={formik.handleSubmit}>
            <h1 className='FinalForm-title' style={titleStyle}>{formTitleData ? formTitleData.title : ''}</h1>
            <div className='FinalForm-fieldsDiv'>
                {renderFields()}
            </div>
            <div className='FinalForm-buttonDiv'>
                {renderButton()}
            </div>
        </form>
    );
}

export default FinalForm;