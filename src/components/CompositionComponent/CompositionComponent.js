import React from 'react';

import './CompositionComponent.scss';
import DummyField from '../DummyField/DummyField';
import MainButton from '../MainButton/MainButton';
import BasicFormButton from '../BasicFormButton/BasicFormButton';

const CompositionComponent = props => {
    const { backgroundStyle, titleStyle, formFields, deleteField, moveUp, moveDown, formButton, increaseMargin, decreaseMargin } = props;
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

    const renderFields = () => {
        return formFields.map(el => {
            return <DummyField 
                key={el.fieldId} 
                fieldInfo={el} 
                backgroundColor={backgroundColor} 
                deleteField={deleteField} 
                moveUp={moveUp} 
                moveDown={moveDown}
                increaseMargin={increaseMargin}
                decreaseMargin={decreaseMargin} 
            />
        })
    }

    const renderButton = () => {
        if(formButton && (formButton.buttonStyle === 'optionOne' || formButton.buttonStyle === 'optionThree')) {
        return <MainButton styleData={formButton}>{formButton.buttonInnerText}</MainButton>
        } else if(formButton && (formButton.buttonStyle === 'optionTwo' || formButton.buttonStyle === 'optionFour')) {
            return <BasicFormButton type='button' clicked={() => {}} styleData={formButton}>{formButton.buttonInnerText}</BasicFormButton>
        }
    }
    
    return (
        <div className='DummyFormContainer'>
            <div style={containerStyle} className='CompositionComponent'>
                {renderTitle()}
                <div className='CompositionComponent-fieldsContainer'>
                    {renderFields()}
                </div>
                <div className='CompositionComponent-buttonDiv'>
                    {renderButton()}
                </div>
            </div>
        </div>
    );
}

export default CompositionComponent;