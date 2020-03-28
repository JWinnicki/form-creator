import React, { useState } from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';

import './SelectFieldForm.scss';
import BasicFormButton from '../../../BasicFormButton/BasicFormButton';

const SelectFieldForm = props => {
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
            selectInputWidth: '100',
            selectInputFontSize: '15',
            selectInputFontColor: '#000000',
            selectInputBackgroundColor: '#ffffff',
            elementAlignment: 'flex-start'
        },
        validationSchema: Yup.object({
            selectInputLabel: Yup.string().max(50, 'Must be 50 characters or less'),
            selectInputLabelFontSize: Yup.number().max(20, 'Too big').min(1, 'Too small'),
            selectInputWidth: Yup.number().max(450, 'Too big').min(50, 'Too small'),
            selectInputFontSize: Yup.number().max(20, 'Too big').min(1, 'Too small')
        }),
        onSubmit: values => console.log(formik)
    });

    const onOptionsInputHandler = e => {
        setLatestOption(e.target.value);
    }

    const onAddOptionHandler = () => {
        setOptions(prev => [...prev, {id: counter, option: latestOption}]);
        setCounter(prev => prev + 1);
        setLatestOption('');
    }

    const onDeleteOptionHandler = e => {
        const currentOptions = options;
        const newArr = [];
        currentOptions.forEach(el => {
            if( Number(e.target.id) !== el.id ) {
                newArr.push({id: Number(el.id), option: el.option})
            }
        });
        setOptions(newArr);
    }

    const renderOptionsList = () => {
        if(options.length > 0) {
            return options.map(el => {
                return (
                    <li className='SelectFieldForm-optionsListElement' key={el.id}>
                        <p>{el.option}</p>
                        <button className='addOptionsButton' type='button' onClick={onDeleteOptionHandler} id={el.id}>-</button>
                    </li>
                )
            });
        }
    }

    let labelError = '';
    if(formik.touched.selectInputLabel && formik.errors.selectInputLabel) {
        labelError='SelectFieldForm-error';
    }

    let labelFontSizeError = '';
    if(formik.touched.selectInputLabelFontSize && formik.errors.selectInputLabelFontSize) {
        labelFontSizeError='SelectFieldForm-error';
    }

    let inputWidthError = '';
    if(formik.touched.selectInputWidth && formik.errors.selectInputWidth) {
        inputWidthError='SelectFieldForm-error';
    }

    let inputFontSizeError = '';
    if(formik.touched.selectInputFontSize && formik.errors.selectInputFontSize) {
        inputFontSizeError='SelectFieldForm-error';
    }

    const onClickHandler = data => {
        if(!formik.errors.selectInputLabel && !formik.errors.selectInputLabelFontSize && !formik.errors.selectInputWidth && !formik.errors.selectInputFontSize) {
            props.setFormFields(data);
        }
    }
    
    return (
        <form className='SelectFieldForm' onSubmit={formik.handleSubmit}>
            <div className='SelectFieldForm-section'>
                <h1 className='SelectFieldForm-sectionTitle'>Label Settings</h1>
                <div className='SelectFieldForm-inputDiv'>
                    <label htmlFor={`selectInputLabel`} className={`SelectFieldForm-label`}>
                        <p className='SelectFieldForm-labelText'>Please add label/attachment/comment to this input:</p>
                    </label>
                    <input
                        className={`SelectFieldForm-textInput ${labelError}`}
                        id={`selectInputLabel`}
                        name={`selectInputLabel`}
                        type='text'
                        onChange={formik.handleChange}
                        value={formik.values.selectInputLabel}
                        placeholder='Label/Attachment/Comment'
                        onBlur={formik.handleBlur}
                    />
                    {formik.touched.selectInputLabel && formik.errors.selectInputLabel ? <p className='SelectFieldForm-errorMsg'>{formik.errors.selectInputLabel}</p> : null}
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
                        className={`SelectFieldForm-numberInput ${labelFontSizeError}`}
                        onBlur={formik.handleBlur}
                    />
                    {formik.touched.selectInputLabelFontSize && formik.errors.selectInputLabelFontSize ? <p className='SelectFieldForm-errorMsg'>{formik.errors.selectInputLabelFontSize}</p> : null}
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
                        className={`SelectFieldForm-numberInput ${inputWidthError}`}
                        onBlur={formik.handleBlur}
                    />
                    {formik.touched.selectInputWidth && formik.errors.selectInputWidth ? <p className='SelectFieldForm-errorMsg'>{formik.errors.selectInputWidth}</p> : null}
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
                        className={`SelectFieldForm-numberInput ${inputFontSizeError}`}
                        onBlur={formik.handleBlur}
                    />
                    {formik.touched.selectInputFontSize && formik.errors.selectInputFontSize ? <p className='SelectFieldForm-errorMsg'>{formik.errors.selectInputFontSize}</p> : null}
                </div>
                <div className='SelectFieldForm-inlineInputDiv'>
                    <label htmlFor='selectInputFontColor' className='SelectFieldForm-colorLabel'>
                        <p className='SelectFieldForm-labelText'>Font Color:</p>
                    </label>
                    <input
                        className='SelectFieldForm-colorInput'
                        id='selectInputFontColor'
                        name='selectInputFontColor'
                        type='color'
                        value={formik.values.selectInputFontColor}
                        onChange={formik.handleChange}
                    />
                </div>
                <div className='SelectFieldForm-inlineInputDiv'>
                    <label htmlFor='selectInputBackgroundColor' className='SelectFieldForm-colorLabel'>
                        <p className='SelectFieldForm-labelText'>Background Color:</p>
                    </label>
                    <input
                        className='SelectFieldForm-colorInput'
                        id='selectInputBackgroundColor'
                        name='selectInputBackgroundColor'
                        type='color'
                        value={formik.values.selectInputBackgroundColor}
                        onChange={formik.handleChange}
                    />
                </div>
                
                <div className='SelectFieldForm-inlineInputDiv'>
                    <label htmlFor='elementAlignment' className='SelectFieldForm-inlineInputLabel'>
                        <p className='SelectFieldForm-labelText'>Element Alignment:</p>
                    </label>
                    <select
                        className='SelectFieldForm-selectInput'
                        id='elementAlignment'
                        name='elementAlignment'
                        onChange={formik.handleChange}
                        value={formik.values.elementAlignment}
                    >
                        <option value='flex-start'>To right</option>
                        <option value='center'>Center</option>
                        <option value='flex-end'>To left</option>
                    </select>
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
                        className='SelectFieldForm-optionsInput'
                    />
                    <button type='button' className='addOptionsButton' disabled={latestOption.length === 0} onClick={onAddOptionHandler}>+</button>
                </div>
                <div className='SelectFieldForm-optionsContainer'>
                    <h2>Options:</h2>
                    <ul className='SelectFieldForm-optionsList'>
                        {renderOptionsList()}
                    </ul>
                </div>
            </div>
            <div className='SelectFieldForm-buttonDiv'>
                <BasicFormButton paddingVertical='.8' paddingHorizontal='1.5' unit='em' primaryColor='#cf0000' fontColor='white' type='button' clicked={onClickHandler} data={{...formik.values, options: options}} >ADD</BasicFormButton>
            </div>
        </form>
    );
}

export default SelectFieldForm;