import React, {useState} from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';

import './ButtonForm.scss';
import MainButton from '../../MainButton/MainButton';
import BasicFormButton from '../../BasicFormButton/BasicFormButton';

const ButtonForm = props => {

    const [ enableBackground, setEnableBackground ] = useState(false);

    const formik = useFormik({
        initialValues: {
            fieldType: 'button',
            buttonDimensionsOption: 'text',
            buttonInnerText: 'SUBMIT',
            paddingVertical: 10,
            paddingHorizontal: 20,
            buttonHeight: 42,
            buttonWidth: 100,
            fontColor: '#ffffff',
            primaryColor: '#cf0000',
            secondaryColor: '#000000',
            buttonStyle: 'optionOne'
        },
        validationSchema: Yup.object({
            buttonInnerText: Yup.string().min(1, 'Too short!').max(8, 'Too long!'),
            paddingVertical: Yup.number().max(20, 'Too many!'),
            paddingHorizontal: Yup.number().max(50, 'Too many!'),
            buttonHeight: Yup.number().min(20, 'Too low!').max(60, 'Too heigh'),
            buttonWidth: Yup.number().min(50, 'Too small!').max(160, 'Too big!')
        })
    });

    const onCheckboxChangeHandler = () => {
        setEnableBackground(prev => !prev);
    }

    const backgroundColor = {
        backgroundColor: enableBackground ? props.formBackgroundColor : '#860101',
    }

    const renderSettings = () => {
        if(formik.values.buttonDimensionsOption === 'text') {
            return (
                <React.Fragment>
                    <div className='ButtonForm-inlineInputDiv'>
                        <label htmlFor='paddingVertical'>
                            <p className='ButtonForm-labelText'>Vertical padding (max 20px):</p>
                        </label>
                        <input 
                            type='number'
                            id='paddingVertical'
                            name='paddingVertical'
                            className={`ButtonForm-numberInlineInput`}
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                            value={formik.values.paddingVertical}
                        />
                    </div>
                    <div className='ButtonForm-inlineInputDiv'>
                        <label htmlFor='paddingHorizontal'>
                            <p className='ButtonForm-labelText'>Horizontal padding (max 50px):</p>
                        </label>
                        <input 
                            type='number'
                            id='paddingHorizontal'
                            name='paddingHorizontal'
                            className={`ButtonForm-numberInlineInput`}
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                            value={formik.values.paddingHorizontal}
                        />
                    </div>
                </React.Fragment>
            );
        } else {
            return (
                <React.Fragment>
                    <div className='ButtonForm-inlineInputDiv'>
                        <label htmlFor='buttonHeight'>
                            <p className='ButtonForm-labelText'>Height (max 60px):</p>
                        </label>
                        <input 
                            type='number'
                            id='buttonHeight'
                            name='buttonHeight'
                            className={`ButtonForm-numberInlineInput`}
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                            value={formik.values.buttonHeight}
                        />
                    </div>
                    <div className='ButtonForm-inlineInputDiv'>
                        <label htmlFor='buttonWidth'>
                            <p className='ButtonForm-labelText'>Width (max 160px):</p>
                        </label>
                        <input 
                            type='number'
                            id='buttonWidth'
                            name='buttonWidth'
                            className={`ButtonForm-numberInlineInput`}
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                            value={formik.values.buttonWidth}
                        />
                    </div>
                </React.Fragment>
            );
        }
    }

    let customOuterRadioStyle = {};
    let customInnerRadioStyle = {};
    let radioDivStyle = {};
    let customRadioInputBackground = {};

    if(enableBackground) {
        radioDivStyle = {
            borderColor: props.formBackgroundColor,
            filter: 'invert(100%)'
        }

        customOuterRadioStyle = {
            borderColor: props.formBackgroundColor,
        }

        customInnerRadioStyle = {
            backgroundColor: props.formBackgroundColor,
        }

        customRadioInputBackground = {
            backgroundColor: props.formBackgroundColor,
            filter: 'invert(100%)'
        }
    }

    return (
        <div className='ButtonForm'>
            <div className='ButtonForm-togglerContainer'>
                <div className='ButtonForm-togglerOptionDiv'>
                    <label htmlFor='text'>
                        <input 
                            type='radio'
                            name='buttonDimensionsOption'
                            id='text'
                            value='text'
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                            checked={formik.values.buttonDimensionsOption === 'text'}
                            className='ButtonForm-radioInput'
                        />
                        <div className='ButtonForm-toggleButton'>
                            <p className='ButtonForm-toggleButtonParagraph'>Dimensions according to inner text settings</p>
                        </div>
                    </label>
                </div>
                <div className='ButtonForm-togglerOptionDiv'>
                    <label htmlFor='fixed'>
                        <input 
                            type='radio'
                            name='buttonDimensionsOption'
                            id='fixed'
                            value='fixed'
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                            checked={formik.values.buttonDimensionsOption === 'fixed'}
                            className='ButtonForm-radioInput'
                        />
                        <div className='ButtonForm-toggleButton'>
                            <p className='ButtonForm-toggleButtonParagraph'>Dimensions fixed by user</p>
                        </div>
                    </label>
                </div>
            </div>
            <div className='ButtonForm-section'>
                <h1 className='ButtonForm-sectionTitle'>Settings</h1>
                <div className='ButtonForm-inlineInputDiv'>
                    <label htmlFor='buttonInnerText'>
                        <p className='ButtonForm-labelText'>Inner text (max 10 characters):</p>
                    </label>
                    <input 
                        type='text'
                        id='buttonInnerText'
                        name='buttonInnerText'
                        className={`ButtonForm-textInlineInput`}
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        value={formik.values.buttonInnerText}
                    />
                </div>
                {renderSettings()}        
            </div>
            <div className='ButtonForm-section'>
                <h1 className='ButtonForm-sectionTitle'>Style</h1>
                <div className='ButtonForm-inlineInputDiv'>
                    <label htmlFor='fontColor' className='ButtonForm-colorLabel'>
                        <p className='ButtonForm-labelText'>Font Color:</p>
                    </label>
                    <input
                        className='ButtonForm-colorInput'
                        id='fontColor'
                        name='fontColor'
                        type='color'
                        value={formik.values.fontColor}
                        onChange={formik.handleChange}
                    />
                </div>
                <div className='ButtonForm-inlineInputDiv'>
                    <label htmlFor='primaryColor' className='ButtonForm-colorLabel'>
                        <p className='ButtonForm-labelText'>Primary Color:</p>
                    </label>
                    <input
                        className='ButtonForm-colorInput'
                        id='primaryColor'
                        name='primaryColor'
                        type='color'
                        value={formik.values.primaryColor}
                        onChange={formik.handleChange}
                    />
                </div>
                <div className='ButtonForm-inlineInputDiv'>
                    <label htmlFor='secondaryColor' className='ButtonForm-colorLabel'>
                        <p className='ButtonForm-labelText'>Secodnary Color:</p>
                    </label>
                    <input
                        className='ButtonForm-colorInput'
                        id='secondaryColor'
                        name='secondaryColor'
                        type='color'
                        value={formik.values.secondaryColor}
                        onChange={formik.handleChange}
                    />
                </div>
                <div className='ButtonForm-inlineInputDiv'>
                    <input 
                        type='checkbox'
                        id='formBackgroundColor'
                        className='ButtonForm-checkboxInput'
                        value={enableBackground}
                        onChange={onCheckboxChangeHandler}
                    />
                    <label htmlFor='formBackgroundColor'>
                        <p className='ButtonForm-labelText'>Use form background color</p>
                    </label>
                </div>
                <div style={backgroundColor} className='ButtonForm-galleryContainer'>
                    <div className='ButtonForm-galleryDiv'>
                        <label htmlFor='optionOne' className='ButtonForm-optionDivLabel'>
                            <div className='ButtonForm-optionDiv' style={radioDivStyle}>
                                <MainButton invertColors={enableBackground} styleData={formik.values}>{formik.values.buttonInnerText}</MainButton>
                                <input
                                    id='optionOne'
                                    type='radio'
                                    name='buttonStyle'
                                    value='optionOne'
                                    onChange={formik.handleChange}
                                    onBlur={formik.handleBlur}
                                    className={`ButtonForm-optionRadioInput`}
                                    checked={formik.values.buttonStyle === 'optionOne'}
                                />
                                <div className='ButtonForm-customInnerRadioInput' style={customInnerRadioStyle}></div>
                                <div className='ButtonForm-customOuterRadioInput' style={customOuterRadioStyle}></div>
                                <div className='ButtonForm-customRadioInputBackground' style={customRadioInputBackground}></div>
                            </div>
                        </label>
                        <label htmlFor='optionTwo' className='ButtonForm-optionDivLabel'>
                            <div className='ButtonForm-optionDiv' style={radioDivStyle}>
                                <BasicFormButton invertColors={enableBackground} styleData={formik.values} type='button' clicked={() => {}}>{formik.values.buttonInnerText}</BasicFormButton>
                                <input
                                    id='optionTwo'
                                    type='radio'
                                    name='buttonStyle'
                                    value='optionTwo'
                                    onChange={formik.handleChange}
                                    onBlur={formik.handleBlur}
                                    className={`ButtonForm-optionRadioInput`}
                                    checked={formik.values.buttonStyle === 'optionTwo'}
                                />
                                <div className='ButtonForm-customInnerRadioInput' style={customInnerRadioStyle}></div>
                                <div className='ButtonForm-customOuterRadioInput' style={customOuterRadioStyle}></div>
                                <div className='ButtonForm-customRadioInputBackground' style={customRadioInputBackground}></div>
                            </div>
                        </label>
                        <label htmlFor='optionThree' className='ButtonForm-optionDivLabel'>
                            <div className='ButtonForm-optionDiv' style={radioDivStyle}>
                                <MainButton invertColors={enableBackground} styleData={formik.values}>{formik.values.buttonInnerText}</MainButton>
                                <input
                                    id='optionThree'
                                    type='radio'
                                    name='buttonStyle'
                                    value='optionThree'
                                    onChange={formik.handleChange}
                                    onBlur={formik.handleBlur}
                                    className={`ButtonForm-optionRadioInput`}
                                    checked={formik.values.buttonStyle === 'optionThree'}
                                />
                                <div className='ButtonForm-customInnerRadioInput' style={customInnerRadioStyle}></div>
                                <div className='ButtonForm-customOuterRadioInput' style={customOuterRadioStyle}></div>
                                <div className='ButtonForm-customRadioInputBackground' style={customRadioInputBackground}></div>
                            </div>
                        </label>
                        <label htmlFor='optionFour' className='ButtonForm-optionDivLabel'>
                            <div className='ButtonForm-optionDiv' style={radioDivStyle}>
                                <BasicFormButton invertColors={enableBackground} styleData={formik.values} type='button' clicked={() => {}} >{formik.values.buttonInnerText}</BasicFormButton>
                                <input
                                    id='optionFour'
                                    type='radio'
                                    name='buttonStyle'
                                    value='optionFour'
                                    onChange={formik.handleChange}
                                    onBlur={formik.handleBlur}
                                    className={`ButtonForm-optionRadioInput`}
                                    checked={formik.values.buttonStyle === 'optionFour'}
                                />
                                <div className='ButtonForm-customInnerRadioInput' style={customInnerRadioStyle}></div>
                                <div className='ButtonForm-customOuterRadioInput' style={customOuterRadioStyle}></div>
                                <div className='ButtonForm-customRadioInputBackground' style={customRadioInputBackground}></div>
                            </div>
                        </label>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ButtonForm;

/* 
fieldType: 'button',
            buttonDimensionsOption: 'text',
            buttonInnerText: '',
            paddingVertical: 0,
            paddingHorizontal: 0,
            buttonHeight: 40,
            buttonWidth: 140,
            fontColor: '#ffffff',
            primaryColor: '#ffffff',
            secondaryColor: '#ffffff' */