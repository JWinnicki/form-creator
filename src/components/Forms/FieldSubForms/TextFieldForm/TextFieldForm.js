import React from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';

import './TextFieldForm.scss';
import BasicFormButton from '../../../BasicFormButton/BasicFormButton';

const TextFieldForm = () => {
    const formik = useFormik({
        initialValues: {
            textInputLabel: '',
            inputPlaceholder: '',
            fieldType: 'text',
            textInputLabelFontSize: '15',
            textInputLabelFontStyle: 'normal',
            textInputLabelFontWeight: 'normal',
            textInputLabelFontColor: '#000000',
            textInputWidth: '300',
            textInputBackground: '#FFFFFF',
            textInputFontSize: '15',
            textInputFontColor: '#000000',
        },
        validationSchema: Yup.object({
            textInputLabel: Yup.string(),
            inputPlaceholder: Yup.string()
        }),
        onSubmit: values => console.log(values)
    });

    return (
        <form className='TextFieldForm' onSubmit={formik.handleSubmit}>
            <div className='TextFieldForm-section'>
                <h1 className='TextFieldForm-sectionTitle'>Label Settings</h1>
                <div className='TextFieldForm-inputDiv'>
                    <label htmlFor={`textInputLabel`} className='TextFieldForm-label'>
                        <p className='TextFieldForm-labelText'>Please add label/attachment/comment to this input:</p>
                    </label>
                    <input
                        className='TextFieldForm-textInput'
                        id={`textInputLabel`}
                        name={`textInputLabel`}
                        type='text'
                        onChange={formik.handleChange}
                        value={formik.values.textInputLabel}
                        placeholder='Label/Attachment/Comment'
                    />
                </div>
                <div className='TextFieldForm-inlineInputDiv'>
                    <label htmlFor='textInputLabelFontStyle' className='TextFieldForm-inlineInputLabel'>
                        <p className='TextFieldForm-labelText'>Font Style:</p>
                    </label>
                    <select
                        className='TextFieldForm-selectInput'
                        id='textInputLabelFontStyle'
                        name='textInputLabelFontStyle'
                        onChange={formik.handleChange}
                        value={formik.values.textInputLabelFontStyle}
                    >
                        <option value='normal'>Normal</option>
                        <option value='italic'>Italic</option>
                        <option value='oblique'>Oblique</option>
                    </select>
                </div>
                <div className='TextFieldForm-inlineInputDiv'>
                    <label htmlFor='textInputLabelFontWeight' className='TextFieldForm-inlineInputLabel'>
                        <p className='TextFieldForm-labelText'>Font Weight:</p>
                    </label>
                    <select
                        className='TextFieldForm-selectInput'
                        id='textInputLabelFontWeight'
                        name='textInputLabelFontWeight'
                        onChange={formik.handleChange}
                        value={formik.values.textInputLabelFontWeight}
                    >
                        <option value='normal'>Normal</option>
                        <option value='bold'>Bold</option>
                    </select>
                </div>
                <div className='TextFieldForm-inlineInputDiv'>
                    <label htmlFor='textInputLabelFontSize' className='TextFieldForm-inlineInputLabel'>
                        <p className='TextFieldForm-labelText'>Font Size (1-20px):</p>
                    </label>
                    <input
                        type='number'
                        id='textInputLabelFontSize'
                        name='textInputLabelFontSize'
                        onChange={formik.handleChange}
                        value={formik.values.textInputLabelFontSize}
                        className='TextFieldForm-numberInput'
                        min='1'
                        max='20'
                    />
                </div>
                <div className='TextFieldForm-inlineInputDiv'>
                    <label htmlFor='textInputLabelFontColor' className='TextFieldForm-colorLabel'>
                        <p className='TextFieldForm-labelText'>Font Color:</p>
                    </label>
                    <input
                        className='TextFieldForm-colorInput'
                        id='textInputLabelFontColor'
                        name='textInputLabelFontColor'
                        type='color'
                        value={formik.values.textInputLabelFontColor}
                        onChange={formik.handleChange}
                    />
                </div>
            </div>
            {/***********************************************************************************************************************************************************/}
            <div className='TextFieldForm-section'>
                <h1 className='TextFieldForm-sectionTitle'>Input Settings</h1>
                <div className='TextFieldForm-inputDiv'>
                    <label htmlFor={`inputPlaceholder`} className='TextFieldForm-label'>
                        <p className='TextFieldForm-labelText'>Please add placeholder for this input:</p>
                    </label>
                    <input
                        className='TextFieldForm-textInput'
                        id={`inputPlaceholder`}
                        name={`inputPlaceholder`}
                        type='text'
                        onChange={formik.handleChange}
                        value={formik.values.inputPlaceholder}
                        placeholder='Placeholder'
                    />
                </div>
                <div className='TextFieldForm-inlineInputDiv'>
                    <label htmlFor='textInputWidth' className='TextFieldForm-inlineInputLabel'>
                        <p className='TextFieldForm-labelText'>Input Width (50-450px):</p>
                    </label>
                    <input
                        type='number'
                        id='textInputWidth'
                        name='textInputWidth'
                        onChange={formik.handleChange}
                        value={formik.values.textInputWidth}
                        className='TextFieldForm-numberInput'
                        min='50'
                        max='450'
                    />
                </div>
                <div className='TextFieldForm-inlineInputDiv'>
                    <label htmlFor='textInputFontSize' className='TextFieldForm-inlineInputLabel'>
                        <p className='TextFieldForm-labelText'>Font Size (1-20px):</p>
                    </label>
                    <input
                        type='number'
                        id='textInputFontSize'
                        name='textInputFontSize'
                        onChange={formik.handleChange}
                        value={formik.values.textInputFontSize}
                        className='TextFieldForm-numberInput'
                        min='1'
                        max='20'
                    />
                </div>
                <div className='TextFieldForm-inlineInputDiv'>
                    <label htmlFor='textInputFontColor' className='TextFieldForm-colorLabel'>
                        <p className='TextFieldForm-labelText'>Font Color:</p>
                    </label>
                    <input
                        className='TextFieldForm-colorInput'
                        id='textInputFontColor'
                        name='textInputFontColor'
                        type='color'
                        value={formik.values.textInputFontColor}
                        onChange={formik.handleChange}
                    />
                </div>
                <div className='TextFieldForm-inlineInputDiv'>
                    <label htmlFor='textInputBackground' className='TextFieldForm-colorLabel'>
                        <p className='TextFieldForm-labelText'>Background Color:</p>
                    </label>
                    <input
                        className='TextFieldForm-colorInput'
                        id='textInputBackground'
                        name='textInputBackground'
                        type='color'
                        value={formik.values.textInputBackground}
                        onChange={formik.handleChange}
                    />
                </div>
            </div>
                
                
            {/* <div className='TextFieldForm-inlineInputDiv'>
                    <label htmlFor='textInputFontStyle' className='TextFieldForm-inlineInputLabel'>
                        <p className='TextFieldForm-labelText'>Font Style:</p>
                    </label>
                    <select
                        className='TextFieldForm-selectInput'
                        id='textInputFontStyle'
                        name='textInputFontStyle'
                        onChange={formik.handleChange}
                        value={formik.values.textInputFontStyle}
                    >
                        <option value='normal'>Normal</option>
                        <option value='italic'>Italic</option>
                        <option value='oblique'>Oblique</option>
                    </select>
                </div>
                <div className='TextFieldForm-inlineInputDiv'>
                    <label htmlFor='textInputFontWeight' className='TextFieldForm-inlineInputLabel'>
                        <p className='TextFieldForm-labelText'>Font Weight:</p>
                    </label>
                    <select
                        className='TextFieldForm-selectInput'
                        id='textInputFontWeight'
                        name='textInputFontWeight'
                        onChange={formik.handleChange}
                        value={formik.values.textInputFontWeight}
                    >
                        <option value='normal'>Normal</option>
                        <option value='bold'>Bold</option>
                    </select>
                </div>
                <div className='TextFieldForm-inlineInputDiv'>
                    <label htmlFor='textInputFontSize' className='TextFieldForm-inlineInputLabel'>
                        <p className='TextFieldForm-labelText'>Font Size (1-20px):</p>
                    </label>
                    <input
                        type='number'
                        id='textInputFontSize'
                        name='textInputFontSize'
                        onChange={formik.handleChange}
                        value={formik.values.textInputFontSize}
                        className='TextFieldForm-numberInput'
                        min='1'
                        max='20'
                    />
                </div>
                <div className='TextFieldForm-inlineInputDiv'>
                    <label htmlFor='textInputFontColor' className='TextFieldForm-colorLabel'>
                        <p className='TextFieldForm-labelText'>Font Color:</p>
                    </label>
                    <input
                        className='TextFieldForm-colorInput'
                        id='textInputFontColor'
                        name='textInputFontColor'
                        type='color'
                        value={formik.values.textInputFontColor}
                        onChange={formik.handleChange}
                    />
                </div>




                <div className='TextFieldForm-inputDiv'>
                    <label htmlFor={`inputPlaceholder`} className='TextFieldForm-label'>
                        <p className='TextFieldForm-labelText'>Please add placeholder text for this input:</p>
                    </label>
                    <input
                        className='TextFieldForm-input'
                        id={`inputPlaceholder`}
                        name={`inputPlaceholder`}
                        type='text'
                        onChange={formik.handleChange}
                        value={formik.values.inputPlaceholder}
                        placeholder='Placeholder'
                    />
                </div> */}
            <div className='TextFieldForm-buttonDiv'>
                <BasicFormButton type='submit'>Add</BasicFormButton>
            </div>
        </form>
    );
}

export default TextFieldForm;