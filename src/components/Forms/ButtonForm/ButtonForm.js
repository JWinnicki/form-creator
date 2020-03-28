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
            buttonInnerText: '',
            paddingVertical: 0,
            paddingHorizontal: 0,
            buttonHeight: 40,
            buttonWidth: 140,
            fontColor: '#ffffff',
            primaryColor: '#ffffff',
            secondaryColor: '#ffffff'
        },
        validationSchema: Yup.object({
            buttonInnerText: Yup.string().min(1, 'Too short!').max(8, 'Too long!'),
            paddingVertical: Yup.number().max(200, 'Too many!'),
            paddingHorizontal: Yup.number().max(200, 'Too many!'),
            buttonHeight: Yup.number().min(20, 'Too low!').max(80, 'Too heigh'),
            buttonWidth: Yup.number().min(50, 'Too small!').max(250, 'Too big!')
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
                            <p className='ButtonForm-labelText'>Horizontal padding (max 20px):</p>
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
                            <p className='ButtonForm-labelText'>Vertical padding (max 20px):</p>
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
                            <p className='ButtonForm-labelText'>Horizontal padding (max 20px):</p>
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
                        <MainButton fontColor='white' colorPrimary='#cf0000' colorSecondary='black' height='3' width='5' unit='em'>SUBMIT</MainButton>
                        <BasicFormButton primaryColor='#cf0000' fontColor='white' type='button' clicked={() => {}} paddingVertical='1' paddingHorizontal='2' unit='em' >SUBMIT</BasicFormButton>
                        <MainButton fontColor='white' colorPrimary='#cf0000' colorSecondary='black' paddingVertical='1' paddingHorizontal='2' unit='em'>SUBMIT</MainButton>
                        <BasicFormButton primaryColor='#cf0000' fontColor='white' type='button' clicked={() => {}} >SUBMIT</BasicFormButton>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ButtonForm;