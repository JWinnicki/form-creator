import React from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';

import './TitleForm.scss';
import BasicFormButton from '../../BasicFormButton/BasicFormButton';

const TitleForm = props => {

    const { initValues } = props;

    const formik = useFormik({
        initialValues: {
            title: initValues.formTitleData ? initValues.formTitleData.title : '',
            titleColor: initValues.formTitleData ? initValues.formTitleData.titleColor : '#000000',
            fontStyle: initValues.formTitleData ? initValues.formTitleData.fontStyle : 'normal',
            fontWeight: initValues.formTitleData ? initValues.formTitleData.fontWeight : 'normal',
            fontSize: initValues.formTitleData ? initValues.formTitleData.fontSize : '35',
        },
        validationSchema: Yup.object({
            title: Yup.string().max(30, 'Must be 30 characters or less'),
            fontSize: Yup.number().min(1, 'Too small').max(45, 'To big')
        }),
        onSubmit: () => {}
    });

    const onClickHandler = data => {
        if(!formik.errors.title && !formik.errors.fontSize) {
            props.setFormTitle(data);
        }
    }

    let titleErrorClass = '';
    if(formik.touched.title && formik.errors.title) {
        titleErrorClass='TitleForm-error';
    }

    let fontSizeError = '';
    if(formik.touched.fontSize && formik.errors.fontSize) {
        fontSizeError='TitleForm-error';
    }

    const buttonStyle = {
        buttonDimensionsOption: 'fixed',
        paddingVertical: .8,
        paddingHorizontal: 1.5,
        fontColor: '#ffffff',
        primaryColor: '#cf0000',
        secondaryColor: '#000000',
        buttonWidth: 8.2,
        buttonHeight: 3.4
    }

    return (
        <form onSubmit={formik.handleSubmit} className='TitleForm'>
            <div className='TitleForm-section'>
                <div className='TitleForm-inputDiv'>
                    <input
                        id='title'
                        name='title'
                        className={`TitleForm-input ${titleErrorClass}`}
                        placeholder='Title' 
                        type='text'
                        onChange={formik.handleChange}
                        value={formik.values.title}
                        onBlur={formik.handleBlur}
                    />
                    {formik.touched.title && formik.errors.title ? <p className='TitleForm-errorMsg'>{formik.errors.title}</p> : null}
                </div>
                <div className='TitleForm-inlineInputDiv'>
                    <label htmlFor='titleColor' className='TitleForm-colorLabel'>
                        <p className='TitleForm-labelText'>Font Color:</p>
                    </label>
                    <input
                        className='TitleForm-colorInput'
                        id='titleColor'
                        name='titleColor'
                        type='color'
                        value={formik.values.titleColor}
                        onChange={formik.handleChange}
                    />
                </div>
                <div className='TitleForm-inlineInputDiv'>
                    <label htmlFor='fontStyle' className='TitleForm-inlineInputLabel'>
                        <p className='TitleForm-labelText'>Font Style:</p>
                    </label>
                    <select
                        className='TitleForm-selectInput'
                        id='fontStyle'
                        name='fontStyle'
                        onChange={formik.handleChange}
                        value={formik.values.fontStyle}
                    >
                        <option value='normal'>Normal</option>
                        <option value='italic'>Italic</option>
                    </select>
                </div>
                <div className='TitleForm-inlineInputDiv'>
                    <label htmlFor='fontWeight' className='TitleForm-inlineInputLabel'>
                        <p className='TitleForm-labelText'>Font Weight:</p>
                    </label>
                    <select
                        className='TitleForm-selectInput'
                        id='fontWeight'
                        name='fontWeight'
                        onChange={formik.handleChange}
                        value={formik.values.fontWeight}
                    >
                        <option value='normal'>Normal</option>
                        <option value='bold'>Bold</option>
                    </select>
                </div>
                <div className='TitleForm-inlineInputDiv'>
                    <label htmlFor='fontSize' className='TitleForm-inlineInputLabel'>
                        <p className='TitleForm-labelText'>Font Size (1-45px):</p>
                    </label>
                    <input
                        type='number'
                        id='fontSize'
                        name='fontSize'
                        onChange={formik.handleChange}
                        value={formik.values.fontSize}
                        className={`TitleForm-numberInput ${fontSizeError}`}
                        onBlur={formik.handleBlur}
                    />
                    {formik.touched.fontSize && formik.errors.fontSize ? <p className='TitleForm-errorMsgInline'>{formik.errors.fontSize}</p> : null}
                </div>
            </div>
            <div className='TitleForm-buttonDiv'>
                <BasicFormButton styleData={buttonStyle} unit='em' type='submit' data={formik.values} clicked={onClickHandler}>{props.titleStyle.title ? 'Update' : 'ADD'}</BasicFormButton>
            </div>
        </form>
    );
}

export default TitleForm;