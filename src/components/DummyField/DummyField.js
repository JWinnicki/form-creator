import React from 'react';

import './DummyField.scss';
import Icon from '../Icon/Icon';

const DummyField = props => {
    const { fieldInfo, backgroundColor } = props



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
                <div className='DummyField-textInputDiv'>
                    <div>
                        <p style={labelStyle}>{fieldInfo.textInputLabel}</p>
                    </div>
                    <div style={inputStyle} className='DummyField-textInput'>{fieldInfo.inputPlaceholder}</div>
                    <div className='DummyField-fieldControls' style={{backgroundColor: backgroundColor}}>
                        <div className='DummyField-deleteDiv'>
                            <button type='button' className='DummyField-controlsButton'>
                                <Icon icon='delete' size='tiny' inverted='inverted' color={backgroundColor}/>
                            </button>
                        </div>
                        <div className='DummyField-arrowsDiv'>
                            <button type='button' className='DummyField-controlsButton'>
                                <Icon icon='arrow-right' size='tiny' rotate='deg270' inverted='inverted' color={backgroundColor} />
                            </button>
                            <button type='button' className='DummyField-controlsButton'>
                                <Icon icon='arrow-right' size='tiny' rotate='deg90' inverted='inverted' color={backgroundColor} />
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
                <div className='DummyField-selectInputDiv'>
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
                    <div></div>
                    <div className='DummyField-fieldControls' style={{backgroundColor: backgroundColor}}>
                        <div className='DummyField-deleteDiv'>
                            <button type='button' className='DummyField-controlsButton'>
                                <Icon icon='delete' size='tiny' inverted='inverted' color={backgroundColor}/>
                            </button>
                        </div>
                        <div className='DummyField-arrowsDiv'>
                            <button type='button' className='DummyField-controlsButton'>
                                <Icon icon='arrow-right' size='tiny' rotate='deg270' inverted='inverted' color={backgroundColor} />
                            </button>
                            <button type='button' className='DummyField-controlsButton'>
                                <Icon icon='arrow-right' size='tiny' rotate='deg90' inverted='inverted' color={backgroundColor} />
                            </button>
                        </div>
                    </div>
                </div>
            );
        } else {
            return <div>In progress</div>
        }
    }

    return renderField()
    
}

export default DummyField;