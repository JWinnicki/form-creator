import React from 'react';

import './SettingsComponent.scss';
import SettingsToggler from '../SettingsToggler/SettingsToggler';
import TitleForm from '../Forms/TitleForm/TitleForm';

const SettingsComponent = () => {
    return (
        <div className='SettingsComponent'>
            <SettingsToggler text='Title'>
                <div className='SettingsComponent-content'>
                    <TitleForm />
                </div>
            </SettingsToggler>
            <SettingsToggler text='Background'>
                <div className='SettingsComponent-content'>
                    Background
                    <div className='test'></div>
                </div>
            </SettingsToggler>
            <SettingsToggler text='Fields'>
                <div className='SettingsComponent-content'>
                    Fields
                    <div className='test'></div>
                </div>
            </SettingsToggler>
        </div>
    );
}

export default SettingsComponent;