//SelectFieldForm
import React, { useState } from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';

import './SelectFieldForm.scss';
import BasicFormButton from '../../../BasicFormButton/BasicFormButton';

const SelectFieldForm = () => {
    const [ options, setOptions ] = useState([]);
    const [ latestOption, setLatestOption ] = useState('');
    const [ counter, setCounter ] = useState(0);

    const formik = useFormik({
        initialValues: {
            selectInputLabel: '',
            fieldType: 'select',
            selectInputLabelFontSize: '15',
            selectInputLabelFontStyle: 'normal',
            selectInputLabelFontWeight: 'normal',
            selectInputLabelFontColor: '#000000',
            selectInputWidth: '300',
            selectInputFontSize: '15'
        },
        validationSchema: Yup.object({
            textInputLabel: Yup.string()
        }),
        onSubmit: values => console.log(formik)
    });

    const onOptionsInputHandler = e => {
        setLatestOption(e.target.value);
    }

    const onAddOptionHandler = () => {
        setOptions(prev => [...prev, {id: counter, option: latestOption}]);
        setCounter(prev => prev + 1);
    }
    
    return (
        <form className='SelectFieldForm' onSubmit={formik.handleSubmit}>
            <div className='SelectFieldForm-section'>
                <h1 className='SelectFieldForm-sectionTitle'>Label Settings</h1>
                <div className='SelectFieldForm-inputDiv'>
                    <label htmlFor={`selectInputLabel`} className='SelectFieldForm-label'>
                        <p className='SelectFieldForm-labelText'>Please add label/attachment/comment to this input:</p>
                    </label>
                    <input
                        className='SelectFieldForm-textInput'
                        id={`selectInputLabel`}
                        name={`selectInputLabel`}
                        type='text'
                        onChange={formik.handleChange}
                        value={formik.values.selectInputLabel}
                        placeholder='Label/Attachment/Comment'
                    />
                </div>
                <div className='SelectFieldForm-inlineInputDiv'>
                    <label htmlFor='selectInputLabelFontStyle' className='SelectFieldForm-inlineInputLabel'>
                        <p className='SelectFieldForm-labelText'>Font Style:</p>
                    </label>
                    <select
                        className='SelectFieldForm-selectInput'
                        id='selectInputLabelFontStyle'
                        name='selectInputLabelFontStyle'
                        onChange={formik.handleChange}
                        value={formik.values.selectInputLabelFontStyle}
                    >
                        <option value='normal'>Normal</option>
                        <option value='italic'>Italic</option>
                        <option value='oblique'>Oblique</option>
                    </select>
                </div>
                <div className='SelectFieldForm-inlineInputDiv'>
                    <label htmlFor='selectInputLabelFontWeight' className='SelectFieldForm-inlineInputLabel'>
                        <p className='SelectFieldForm-labelText'>Font Weight:</p>
                    </label>
                    <select
                        className='SelectFieldForm-selectInput'
                        id='selectInputLabelFontWeight'
                        name='selectInputLabelFontWeight'
                        onChange={formik.handleChange}
                        value={formik.values.selectInputLabelFontWeight}
                    >
                        <option value='normal'>Normal</option>
                        <option value='bold'>Bold</option>
                    </select>
                </div>
                <div className='SelectFieldForm-inlineInputDiv'>
                    <label htmlFor='selectInputLabelFontSize' className='SelectFieldForm-inlineInputLabel'>
                        <p className='SelectFieldForm-labelText'>Font Size (1-20px):</p>
                    </label>
                    <input
                        type='number'
                        id='selectInputLabelFontSize'
                        name='selectInputLabelFontSize'
                        onChange={formik.handleChange}
                        value={formik.values.selectInputLabelFontSize}
                        className='SelectFieldForm-numberInput'
                        min='1'
                        max='20'
                    />
                </div>
                <div className='SelectFieldForm-inlineInputDiv'>
                    <label htmlFor='selectInputLabelFontColor' className='SelectFieldForm-colorLabel'>
                        <p className='SelectFieldForm-labelText'>Font Color:</p>
                    </label>
                    <input
                        className='SelectFieldForm-colorInput'
                        id='selectInputLabelFontColor'
                        name='selectInputLabelFontColor'
                        type='color'
                        value={formik.values.selectInputLabelFontColor}
                        onChange={formik.handleChange}
                    />
                </div>
            </div>
            {/***********************************************************************************************************************************************************/}
            <div className='SelectFieldForm-section'>
                <h1 className='SelectFieldForm-sectionTitle'>Input Settings</h1>
                <div className='SelectFieldForm-inlineInputDiv'>
                    <label htmlFor='selectInputWidth' className='SelectFieldForm-inlineInputLabel'>
                        <p className='SelectFieldForm-labelText'>Input Width (50-450px):</p>
                    </label>
                    <input
                        type='number'
                        id='selectInputWidth'
                        name='selectInputWidth'
                        onChange={formik.handleChange}
                        value={formik.values.selectInputWidth}
                        className='SelectFieldForm-numberInput'
                        min='50'
                        max='450'
                    />
                </div>
                <div className='SelectFieldForm-inlineInputDiv'>
                    <label htmlFor='selectInputFontSize' className='SelectFieldForm-inlineInputLabel'>
                        <p className='SelectFieldForm-labelText'>Font Size (1-20px):</p>
                    </label>
                    <input
                        type='number'
                        id='selectInputFontSize'
                        name='selectInputFontSize'
                        onChange={formik.handleChange}
                        value={formik.values.selectInputFontSize}
                        className='SelectFieldForm-numberInput'
                        min='1'
                        max='20'
                    />
                </div>
            </div>
            {/***********************************************************************************************************************************************************/}
            <div className='SelectFieldForm-section'>
                <h1 className='SelectFieldForm-sectionTitle'>Input Options</h1>
                <div className='SelectFieldForm-inlineInputDiv'>
                    <label htmlFor='selectInputOptions' className='SelectFieldForm-inlineInputLabel'>
                        <p className='SelectFieldForm-labelText'>Please add input's options:</p>
                    </label>
                    <input
                        type='text'
                        id='selectInputOptions'
                        name='selectInputOptions'
                        onChange={onOptionsInputHandler}
                        value={latestOption}
                        className='SelectFieldForm-numberInput'
                    />
                    <button type='button' onClick={onAddOptionHandler}>+</button>
                </div>
            </div>
            <div className='SelectFieldForm-buttonDiv'>
                <BasicFormButton type='submit'>Add</BasicFormButton>
            </div>
        </form>
    );
}

export default SelectFieldForm;