import React from 'react';

import './CompositionComponent.scss';
import DummyTextInput from '../DummyComponents/DummyTextInput/DummyTextInput';
import Icon from '../Icon/Icon';
import DummyField from '../DummyField/DummyField';

const CompositionComponent = props => {
    const { backgroundStyle, titleStyle, formFields } = props;
    const { backgroundColor, backgroundWidth, backgroundHeight } = backgroundStyle;
    const { title, titleColor, fontStyle, fontWeight, fontSize } = titleStyle;


    const containerStyle = {
        backgroundColor,
        width: `${backgroundWidth}px`,
        height: `${backgroundHeight}px`
    };

    const headerStyle =  {
        color: titleColor,
        fontWeight,
        fontStyle,
        fontSize: `${fontSize}px`
    };

    const renderTitle = () => {
        if(title) {
            return <h1 style={headerStyle} className='CompositionComponent-title' >{title}</h1>;
        }
    }

    const renderFileds = () => {
        return formFields.map(el => {
            if(el.fieldType === 'text') {
                const elLabelStyle = {
                    color: el.textInputLabelFontColor,
                    fontSize: `${el.textInputLabelFontSize}px`,
                    fontWeight: el.textInputLabelFontWeight,
                    fontStyle: el.textInputLabelFontStyle    
                }

                return (
                    <div key={el.fieldId} className='CompositionComponent-textInputDiv'>
                        <div>
                            <p style={elLabelStyle}>{el.textInputLabel}</p>
                        </div>
                        <DummyTextInput 
                            textInputWidth={el.textInputWidth}
                            textInputBackground={el.textInputBackground}
                            textInputFontSize={el.textInputFontSize}
                            textInputFontColor={el.textInputFontColor}
                            inputPlaceholder={el.inputPlaceholder}
                        />
                        <div className='CompositionComponent-fieldControls' style={{backgroundColor: backgroundColor}}>
                            <div className='CompositionComponent-deleteDiv'>
                                <button type='button' className='CompositionComponent-controlsButton'>
                                    <Icon icon='delete' size='tiny' inverted='inverted' backgroundColor={backgroundColor}/>
                                </button>
                            </div>
                            <div className='CompositionComponent-arrowsDiv'>
                                <button type='button' className='CompositionComponent-controlsButton'>
                                    <Icon icon='arrow-right' size='tiny' rotate='deg270' inverted='inverted' backgroundColor={backgroundColor} />
                                </button>
                                <button type='button' className='CompositionComponent-controlsButton'>
                                    <Icon icon='arrow-right' size='tiny' rotate='deg90' inverted='inverted' backgroundColor={backgroundColor} />
                                </button>
                            </div>
                        </div>
                    </div>
                )
            } else {
                return <div>in progress</div>
            }
        })
    }

    const renderFields = () => {
        return formFields.map(el => {
            return <DummyField key={el.fieldId} fieldInfo={el} backgroundColor={backgroundColor} />
        })
    }

    return (
        <div style={containerStyle} className='CompositionComponent'>
            {renderTitle()}
            <div className='CompositionComponent-fieldsContainer'>
                {renderFields()}
            </div>
        </div>
    );
}

export default CompositionComponent;