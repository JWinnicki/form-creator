import React from 'react';

import './SettingsComponent.scss';
import SettingsToggler from '../SettingsToggler/SettingsToggler';
import TitleForm from '../Forms/TitleForm/TitleForm';
import BackgroundForm from '../Forms/BackgroundForm/BackgroundForm';
import FieldsForm from '../Forms/FieldsForm/FieldsForm';

const SettingsComponent = props => {
    return (
        <div className='SettingsComponent'>
            <SettingsToggler text='Background'>
                <div className='SettingsComponent-content'>
                    <BackgroundForm setFormBackground={props.setFormBackground} />
                </div>
            </SettingsToggler>
            <SettingsToggler text='Title'>
                <div className='SettingsComponent-content'>
                    <TitleForm setFormTitle={props.setFormTitle} />
                </div>
            </SettingsToggler>
            <SettingsToggler text='Fields'>
                <div className='SettingsComponent-content'>
                    <FieldsForm setFormFields={props.setFormFields} />
                </div>
            </SettingsToggler>
        </div>
    );
}

export default SettingsComponent;