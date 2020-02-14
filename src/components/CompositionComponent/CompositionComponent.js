import React from 'react';

import './CompositionComponent.scss';
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