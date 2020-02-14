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
                                <Icon icon='delete' size='tiny' inverted='inverted' backgroundColor={backgroundColor}/>
                            </button>
                        </div>
                        <div className='DummyField-arrowsDiv'>
                            <button type='button' className='DummyField-controlsButton'>
                                <Icon icon='arrow-right' size='tiny' rotate='deg270' inverted='inverted' backgroundColor={backgroundColor} />
                            </button>
                            <button type='button' className='DummyField-controlsButton'>
                                <Icon icon='arrow-right' size='tiny' rotate='deg90' inverted='inverted' backgroundColor={backgroundColor} />
                            </button>
                        </div>
                    </div>
                </div>
            )
        } else {
            return <div>In progress</div>
        }
    }

    return renderField()
    
}

export default DummyField;

/* <DummyTextInput 
                textInputWidth={el.textInputWidth}
                textInputBackground={el.textInputBackground}
                textInputFontSize={el.textInputFontSize}
                textInputFontColor={el.textInputFontColor}
                inputPlaceholder={el.inputPlaceholder}
            /> */