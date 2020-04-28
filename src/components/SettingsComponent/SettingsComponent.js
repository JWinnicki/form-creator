import React from 'react';

import './SettingsComponent.scss';
import SettingsToggler from '../SettingsToggler/SettingsToggler';
import TitleForm from '../Forms/TitleForm/TitleForm';
import BackgroundForm from '../Forms/BackgroundForm/BackgroundForm';
import FieldsForm from '../Forms/FieldsForm/FieldsForm';
import ButtonForm from '../Forms/ButtonForm/ButtonForm';

const SettingsComponent = props => {
    return (
        <div className='SettingsComponent'>
            <SettingsToggler text='Background'>
                <div className='SettingsComponent-content'>
                    <BackgroundForm 
                        setFormBackground={props.setFormBackground}
                        initValues={props.initValues}  
                    />
                </div>
            </SettingsToggler>
            <SettingsToggler text='Title'>
                <div className='SettingsComponent-content'>
                    <TitleForm 
                        setFormTitle={props.setFormTitle}
                        titleStyle={props.titleStyle}
                        initValues={props.initValues} 
                    />
                </div>
            </SettingsToggler>
            <SettingsToggler text='Fields'>
                <div className='SettingsComponent-content'>
                    <FieldsForm setFormFields={props.setFormFields} />
                </div>
            </SettingsToggler>
            <SettingsToggler text='Button'>
                <div className='SettingsComponent-content'>
                    <ButtonForm
                        formBackgroundColor={props.formBackgroundColor}
                        setFormButtonStyle={props.setFormButtonStyle}
                        formButtonStyle={props.formButtonStyle}
                    />
                </div>
            </SettingsToggler>
        </div>
    );
}

export default SettingsComponent;