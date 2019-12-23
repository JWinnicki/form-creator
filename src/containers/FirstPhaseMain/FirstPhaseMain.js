import React from 'react';

import './FirstPhaseMain.scss';
import SettingsComponent from '../../components/SettingsComponent/SettingsComponent';


const FirstPhaseMain = () => {
    return (
        <div className='FirstPhaseMain'>
            <div className='FirstPhaseMain-settings'>
                <SettingsComponent />
            </div>
            <div className='FirstPhaseMain-composition'></div>
        </div>
    );
}

export default FirstPhaseMain;