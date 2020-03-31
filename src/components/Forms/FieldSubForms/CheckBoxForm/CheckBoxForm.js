import React, { useState } from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';

import './CheckBoxForm.scss';
import BasicFormButton from '../../../BasicFormButton/BasicFormButton';

const CheckBoxForm = props => {
    const [ options, setOptions ] = useState([]);
    const [ latestOption, setLatestOption ] = useState('');
    const [ counter, setCounter ] = useState(0);

    const formik = useFormik({
        initialValues: {
            checkBoxInputLabel: '',
            fieldType: 'checkbox',
            checkBoxInputLabelFontSize: '15',
            checkBoxInputLabelFontStyle: 'normal',
            checkBoxInputLabelFontWeight: 'normal',
            checkBoxInputLabelFontColor: '#000000',
            checkBoxOptionFontSize: '15',
            checkBoxOptionFontColor: '#000000',
            elementAlignment: 'flex-start'
        },
        validationSchema: Yup.object({
            checkBoxInputLabel: Yup.string().max(50, 'Must be 50 characters or less'),
            checkBoxInputLabelFontSize: Yup.number().max(20, 'Too big').min(1, 'Too small'),
            checkBoxOptionFontSize: Yup.number().max(20, 'Too big').min(1, 'Too small')
        }),
        //onSubmit: values => console.log(formik)
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
                    <li className='CheckBoxFieldForm-optionsListElement' key={el.id}>
                        <p>{el.option}</p>
                        <button className='addOptionsButton' type='button' onClick={onDeleteOptionHandler} id={el.id}>-</button>
                    </li>
                )
            });
        }
    }

    let labelError = '';
    if(formik.touched.checkBoxInputLabel && formik.errors.checkBoxInputLabel) {
        labelError='CheckBoxFieldForm-error';
    }

    let labelFontSizeError = '';
    if(formik.touched.checkBoxInputLabelFontSize && formik.errors.checkBoxInputLabelFontSize) {
        labelFontSizeError='CheckBoxFieldForm-error';
    }

    let inputFontSizeError = '';
    if(formik.touched.checkBoxOptionFontSize && formik.errors.checkBoxOptionFontSize) {
        inputFontSizeError='CheckBoxFieldForm-error';
    }

    const onClickHandler = data => {
        if(!formik.errors.checkBoxInputLabel && !formik.errors.checkBoxInputLabelFontSize && !formik.errors.checkBoxOptionFontSize) {
            props.setFormFields(data);
            console.log(data);
        }
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

    return(
        <form className='CheckBoxFieldForm'>
            <div className='CheckBoxFieldForm-section'>
                <h1 className='CheckBoxFieldForm-sectionTitle'>Label Settings</h1>
                <div className='CheckBoxFieldForm-inputDiv'>
                    <label htmlFor={`checkBoxInputLabel`} className={`CheckBoxFieldForm-label`}>
                        <p className='CheckBoxFieldForm-labelText'>Please add label/attachment/comment to this input:</p>
                    </label>
                    <input
                        className={`CheckBoxFieldForm-textInput ${labelError}`}
                        id={`checkBoxInputLabel`}
                        name={`checkBoxInputLabel`}
                        type='text'
                        onChange={formik.handleChange}
                        value={formik.values.checkBoxInputLabel}
                        placeholder='Label/Attachment/Comment'
                        onBlur={formik.handleBlur}
                    />
                    {formik.touched.checkBoxInputLabel && formik.errors.checkBoxInputLabel ? <p className='CheckBoxFieldForm-errorMsg'>{formik.errors.checkBoxInputLabel}</p> : null}
                </div>
                <div className='CheckBoxFieldForm-inlineInputDiv'>
                    <label htmlFor='checkBoxInputLabelFontStyle' className='CheckBoxFieldForm-inlineInputLabel'>
                        <p className='CheckBoxFieldForm-labelText'>Font Style:</p>
                    </label>
                    <select
                        className='CheckBoxFieldForm-selectInput'
                        id='checkBoxInputLabelFontStyle'
                        name='checkBoxInputLabelFontStyle'
                        onChange={formik.handleChange}
                        value={formik.values.checkBoxInputLabelFontStyle}
                    >
                        <option value='normal'>Normal</option>
                        <option value='italic'>Italic</option>
                    </select>
                </div>
                <div className='CheckBoxFieldForm-inlineInputDiv'>
                    <label htmlFor='checkBoxInputLabelFontWeight' className='CheckBoxFieldForm-inlineInputLabel'>
                        <p className='CheckBoxFieldForm-labelText'>Font Weight:</p>
                    </label>
                    <select
                        className='CheckBoxFieldForm-selectInput'
                        id='checkBoxInputLabelFontWeight'
                        name='checkBoxInputLabelFontWeight'
                        onChange={formik.handleChange}
                        value={formik.values.checkBoxInputLabelFontWeight}
                    >
                        <option value='normal'>Normal</option>
                        <option value='bold'>Bold</option>
                    </select>
                </div>
                <div className='CheckBoxFieldForm-inlineInputDiv'>
                    <label htmlFor='checkBoxInputLabelFontSize' className='CheckBoxFieldForm-inlineInputLabel'>
                        <p className='CheckBoxFieldForm-labelText'>Font Size (1-20px):</p>
                    </label>
                    <input
                        type='number'
                        id='checkBoxInputLabelFontSize'
                        name='checkBoxInputLabelFontSize'
                        onChange={formik.handleChange}
                        value={formik.values.checkBoxInputLabelFontSize}
                        className={`CheckBoxFieldForm-numberInput ${labelFontSizeError}`}
                        onBlur={formik.handleBlur}
                    />
                    {formik.touched.checkBoxInputLabelFontSize && formik.errors.checkBoxInputLabelFontSize ? <p className='CheckBoxFieldForm-errorMsg'>{formik.errors.checkBoxInputLabelFontSize}</p> : null}
                </div>
                <div className='CheckBoxFieldForm-inlineInputDiv'>
                    <label htmlFor='checkBoxInputLabelFontColor' className='CheckBoxFieldForm-colorLabel'>
                        <p className='CheckBoxFieldForm-labelText'>Font Color:</p>
                    </label>
                    <input
                        className='CheckBoxFieldForm-colorInput'
                        id='checkBoxInputLabelFontColor'
                        name='checkBoxInputLabelFontColor'
                        type='color'
                        value={formik.values.checkBoxInputLabelFontColor}
                        onChange={formik.handleChange}
                    />
                </div>
            </div>
            {/* ******************************************************************************************************** */}
            <div className='CheckBoxFieldForm-section'>
                <h1 className='CheckBoxFieldForm-sectionTitle'>Options Settings</h1>
                <div className='CheckBoxFieldForm-inlineInputDiv'>
                    <label htmlFor='checkBoxOptionFontSize' className='CheckBoxFieldForm-inlineInputLabel'>
                        <p className='CheckBoxFieldForm-labelText'>Font Size (1-20px):</p>
                    </label>
                    <input
                        type='number'
                        id='checkBoxOptionFontSize'
                        name='checkBoxOptionFontSize'
                        onChange={formik.handleChange}
                        value={formik.values.checkBoxOptionFontSize}
                        className={`CheckBoxFieldForm-numberInput ${inputFontSizeError}`}
                        onBlur={formik.handleBlur}
                    />
                    {formik.touched.checkBoxOptionFontSize && formik.errors.checkBoxOptionFontSize ? <p className='CheckBoxFieldForm-errorMsg'>{formik.errors.checkBoxOptionFontSize}</p> : null}
                </div>
                <div className='CheckBoxFieldForm-inlineInputDiv'>
                    <label htmlFor='checkBoxOptionFontColor' className='CheckBoxFieldForm-colorLabel'>
                        <p className='CheckBoxFieldForm-labelText'>Font Color:</p>
                    </label>
                    <input
                        className='CheckBoxFieldForm-colorInput'
                        id='checkBoxOptionFontColor'
                        name='checkBoxOptionFontColor'
                        type='color'
                        value={formik.values.checkBoxOptionFontColor}
                        onChange={formik.handleChange}
                    />
                </div>
                <div className='CheckBoxFieldForm-inlineInputDiv'>
                    <label htmlFor='elementAlignment' className='CheckBoxFieldForm-inlineInputLabel'>
                        <p className='CheckBoxFieldForm-labelText'>Element Alignment:</p>
                    </label>
                    <select
                        className='CheckBoxFieldForm-selectInput'
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
            <div className='CheckBoxFieldForm-section'>
                <h1 className='CheckBoxFieldForm-sectionTitle'>Input Options</h1>
                <div className='CheckBoxFieldForm-inlineInputDiv'>
                    <label htmlFor='selectInputOptions' className='CheckBoxFieldForm-inlineInputLabel'>
                        <p className='CheckBoxFieldForm-labelText'>Please add input's options:</p>
                    </label>
                    <input
                        type='text'
                        id='selectInputOptions'
                        name='selectInputOptions'
                        onChange={onOptionsInputHandler}
                        value={latestOption}
                        className='CheckBoxFieldForm-optionsInput'
                    />
                    <button type='button' className='addOptionsButton' disabled={latestOption.length === 0} onClick={onAddOptionHandler}>+</button>
                </div>
                <div className='CheckBoxFieldForm-optionsContainer'>
                    <h2>Options:</h2>
                    <ul className='CheckBoxFieldForm-optionsList'>
                        {renderOptionsList()}
                    </ul>
                </div>
            </div>
            <div className='CheckBoxFieldForm-buttonDiv'>
                <BasicFormButton styleData={buttonStyle} unit='em' type='button' clicked={onClickHandler} data={{...formik.values, options: options}} >ADD</BasicFormButton>
            </div>
        </form>
    );
}

export default CheckBoxForm;

/* //obsluga checkbox'a z formik

                <div>
                    <label>
                        <input 
                            type='checkbox' 
                            name='checkboxValue' 
                            value='first'
                            checked={formik.values.checkboxValue !== undefined ? formik.values.checkboxValue.includes('first') : false}
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                        />
                    </label>
                    <label>
                        <input 
                            type='checkbox' 
                            name='checkboxValue' 
                            value='second'
                            checked={formik.values.checkboxValue !== undefined ? formik.values.checkboxValue.includes('second') : false}
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                        />
                    </label>
                    <label>
                        <input 
                            type='checkbox' 
                            name='checkboxValue' 
                            value='third'
                            checked={formik.values.checkboxValue !== undefined ? formik.values.checkboxValue.includes('third') : false}
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                        />
                    </label>
                </div>
*/