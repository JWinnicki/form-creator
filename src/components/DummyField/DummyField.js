import React from 'react';

import './DummyField.scss';
import Icon from '../Icon/Icon';

const DummyField = props => {
    const { fieldInfo, backgroundColor, deleteField, moveUp, moveDown } = props



    const renderField = () => {
        if(fieldInfo.fieldType === 'text') {

            const labelStyle = {
                color: fieldInfo.textInputLabelFontColor,
                fontSize: `${fieldInfo.textInputLabelFontSize}px`,
                fontWeight: fieldInfo.textInputLabelFontWeight,
                fontStyle: fieldInfo.textInputLabelFontStyle    
            }

            const inputStyle = {
                width: `${fieldInfo.textInputWidth}px`,
                backgroundColor: fieldInfo.textInputBackground,
                fontSize: `${fieldInfo.textInputFontSize}px`,
                color: fieldInfo.textInputFontColor,
                border: `1px solid ${fieldInfo.textInputFontColor}`
            }

            return (
                <div className='DummyField-textInputDiv' style={{alignItems: fieldInfo.elementAlignment}}>
                    <div>
                        <p style={labelStyle}>{fieldInfo.textInputLabel}</p>
                    </div>
                    <div style={inputStyle} className='DummyField-textInput'>{fieldInfo.inputPlaceholder}</div>
                    <div className='DummyField-fieldControls' style={{backgroundColor: backgroundColor}}>
                        <div className='DummyField-horizontalArrowsDiv'>
                            <button type='button' className='DummyField-controlsButton' onClick={() => {}} >
                                <Icon icon='arrow-right' size='tiny' rotate='deg180' inverted='inverted' color={backgroundColor} />
                            </button>
                            <button type='button' className='DummyField-controlsButton' onClick={() => {}}>
                                <Icon icon='arrow-right' size='tiny' rotate='deg0' inverted='inverted' color={backgroundColor} />
                            </button>
                        </div>
                        <div className='DummyField-arrowsDiv'>
                            <button type='button' className='DummyField-controlsButton' onClick={() => moveUp(fieldInfo.fieldId)} >
                                <Icon icon='arrow-right' size='tiny' rotate='deg270' inverted='inverted' color={backgroundColor} />
                            </button>
                            <button type='button' className='DummyField-controlsButton' onClick={() => moveDown(fieldInfo.fieldId)}>
                                <Icon icon='arrow-right' size='tiny' rotate='deg90' inverted='inverted' color={backgroundColor} />
                            </button>
                        </div>
                        <div className='DummyField-deleteDiv'>
                            <button type='button' className='DummyField-controlsButton' onClick={() => deleteField(fieldInfo.fieldId)} >
                                <Icon icon='delete' size='tiny' inverted='inverted' color={backgroundColor}/>
                            </button>
                        </div>
                    </div>
                </div>
            )
        } else if(fieldInfo.fieldType === 'select') {

            const labelStyle = {
                color: fieldInfo.selectInputLabelFontColor,
                fontSize: `${fieldInfo.selectInputLabelFontSize}px`,
                fontWeight: fieldInfo.selectInputLabelFontWeight,
                fontStyle: fieldInfo.selectInputLabelFontStyle    
            }

            const inputStyle = {
                width: `${fieldInfo.selectInputWidth}px`,
                backgroundColor: fieldInfo.selectInputBackgroundColor,
                border: `1px solid ${fieldInfo.selectInputFontColor}`
            }

            const inputTextStyle = {
                color: fieldInfo.selectInputFontColor,
                fontSize: `${fieldInfo.selectInputFontSize}px`,
                overflow: 'hidden',
                width: '100%'
            }

            const optionsDivStyle = {
                minWidth: `${fieldInfo.selectInputWidth}px`,
                backgroundColor: fieldInfo.selectInputBackgroundColor,
                border: `1px solid ${fieldInfo.selectInputFontColor}`
            }

            const optionStyle = {
                color: fieldInfo.selectInputFontColor,
                fontSize: `${fieldInfo.selectInputFontSize}px`,
            }

            const renderOptions = () => {
                return fieldInfo.options.map(el => {
                    return (
                        <li className='DummyField-listElement' style={optionStyle} key={el.id}>{el.option}</li>
                    );
                })
            }

            return (
                <div className='DummyField-selectInputDiv' style={{justifyContent: fieldInfo.elementAlignment}}>
                    <div>
                        <p style={labelStyle}>{fieldInfo.selectInputLabel}</p>
                    </div>
                    <div style={inputStyle} className='DummyField-selectInput'>
                        <p style={inputTextStyle}>
                            {fieldInfo.options[0] ? fieldInfo.options[0].option : ''}
                        </p>
                        <div className='DummyField-selectArrowDiv' style={{backgroundColor: fieldInfo.selectInputBackgroundColor}}>
                            <Icon icon='sort-down' size='micro' color={fieldInfo.selectInputFontColor} />
                        </div>
                        <div className='DummyField-optionsDiv' style={optionsDivStyle} >
                            <ul className='DummyField-optionsList'>
                                {renderOptions()}
                            </ul>
                        </div>
                    </div>
                    <div className='DummyField-fieldControls' style={{backgroundColor: backgroundColor}}>
                        <div className='DummyField-horizontalArrowsDiv'>
                            <button type='button' className='DummyField-controlsButton' onClick={() => {}} >
                                <Icon icon='arrow-right' size='tiny' rotate='deg180' inverted='inverted' color={backgroundColor} />
                            </button>
                            <button type='button' className='DummyField-controlsButton' onClick={() => {}}>
                                <Icon icon='arrow-right' size='tiny' rotate='deg0' inverted='inverted' color={backgroundColor} />
                            </button>
                        </div>
                        <div className='DummyField-arrowsDiv'>
                            <button type='button' className='DummyField-controlsButton' onClick={() => moveUp(fieldInfo.fieldId)}>
                                <Icon icon='arrow-right' size='tiny' rotate='deg270' inverted='inverted' color={backgroundColor} />
                            </button>
                            <button type='button' className='DummyField-controlsButton' onClick={() => moveDown(fieldInfo.fieldId)}>
                                <Icon icon='arrow-right' size='tiny' rotate='deg90' inverted='inverted' color={backgroundColor} />
                            </button>
                        </div>
                        <div className='DummyField-deleteDiv'>
                            <button type='button' className='DummyField-controlsButton' onClick={() => deleteField(fieldInfo.fieldId)} >
                                <Icon icon='delete' size='tiny' inverted='inverted' color={backgroundColor}/>
                            </button>
                        </div>
                    </div>
                </div>
            );
        } else {
            const labelStyle = {
                color: fieldInfo.checkBoxInputLabelFontColor,
                fontSize: `${fieldInfo.checkBoxInputLabelFontSize}px`,
                fontWeight: fieldInfo.checkBoxInputLabelFontWeight,
                fontStyle: fieldInfo.checkBoxInputLabelFontStyle    
            }

            const optionStyle = {
                color: fieldInfo.checkBoxOptionFontColor,
                fontSize: `${fieldInfo.checkBoxOptionFontSize}px`,
                marginLeft: '4px'
            }

            const checkBoxInputStyle = {
                height: `${Number(fieldInfo.checkBoxOptionFontSize) - 3}px`,
                width: `${Number(fieldInfo.checkBoxOptionFontSize) - 3}px`
            }

            const renderOptions = () => {
                return fieldInfo.options.map(el => {
                    return(
                        <label key={el.id} className={`DummyField-checkBoxOptionLabel`}>
                            <input style={checkBoxInputStyle} type='checkbox' />
                            <span style={optionStyle}>{el.option}</span>
                        </label>
                    );
                })
            }

            return (
                <div className='DummyField-checkBoxInputDiv' style={{alignItems: fieldInfo.elementAlignment}}>
                    <div>
                        <p style={labelStyle}>
                            {fieldInfo.checkBoxInputLabel}
                        </p>
                    </div>
                    <div className='DummyField-checkBoxOptionsDiv'>
                        {renderOptions()}
                    </div>
                    <div className='DummyField-fieldControls' style={{backgroundColor: backgroundColor}}>
                        <div className='DummyField-horizontalArrowsDiv'>
                            <button type='button' className='DummyField-controlsButton' onClick={() => {}} >
                                <Icon icon='arrow-right' size='tiny' rotate='deg180' inverted='inverted' color={backgroundColor} />
                            </button>
                            <button type='button' className='DummyField-controlsButton' onClick={() => {}}>
                                <Icon icon='arrow-right' size='tiny' rotate='deg0' inverted='inverted' color={backgroundColor} />
                            </button>
                        </div>
                        <div className='DummyField-arrowsDiv'>
                            <button type='button' className='DummyField-controlsButton' onClick={() => moveUp(fieldInfo.fieldId)}>
                                <Icon icon='arrow-right' size='tiny' rotate='deg270' inverted='inverted' color={backgroundColor} />
                            </button>
                            <button type='button' className='DummyField-controlsButton' onClick={() => moveDown(fieldInfo.fieldId)}>
                                <Icon icon='arrow-right' size='tiny' rotate='deg90' inverted='inverted' color={backgroundColor} />
                            </button>
                        </div>
                        <div className='DummyField-deleteDiv'>
                            <button type='button' className='DummyField-controlsButton' onClick={() => deleteField(fieldInfo.fieldId)} >
                                <Icon icon='delete' size='tiny' inverted='inverted' color={backgroundColor}/>
                            </button>
                        </div>
                    </div>
                </div>
            );
        }
    }

    return renderField()
    
}

export default DummyField;