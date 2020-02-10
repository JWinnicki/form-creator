import React from 'react';

import './CompositionComponent.scss';
import DummyTextInput from '../DummyComponents/DummyTextInput/DummyTextInput';

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
                    fontSize: el.textInputLabelFontSize,
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
                    </div>
                )
            }
        })
    }

    return (
        <div style={containerStyle} className='CompositionComponent'>
            {renderTitle()}
            <div className='CompositionComponent-fieldsContainer'>
                {renderFileds()}
            </div>
        </div>
    );
}

export default CompositionComponent;