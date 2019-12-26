import React from 'react';

import './SettingsComponent.scss';
import SettingsToggler from '../SettingsToggler/SettingsToggler'

const SettingsComponent = () => {
    return (
        <div className='SettingsComponent'>
            <SettingsToggler text='Title'>
                <div style={{padding: '5em'}}>
                    TITLE
                    <div className='test'></div>
                </div>
            </SettingsToggler>
            <SettingsToggler text='Background'>
                <div style={{padding: '5em'}}>
                    Background
                    <div className='test'></div>
                </div>
            </SettingsToggler>
            <SettingsToggler text='Fields'>
                <div style={{padding: '5em'}}>
                    Fields
                    <div className='test'></div>
                </div>
            </SettingsToggler>
        </div>
    );
}

export default SettingsComponent;