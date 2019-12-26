import React from 'react';

import './SettingsToggler.scss';
import Icon from '../Icon/Icon';

const SettingsToggler = props => {

    return (
        <div className='SettingsToggler'>
            <input type='checkbox' id={props.text} name={props.text} className='SettingsToggler-checkbox' />
            <label htmlFor={props.text} className='SettingsToggler-label'>
                <div className='SettingsToggler-labelDiv'>
                    <p className='SettingsToggler-labelText'>{props.text}</p>
                    <div className='SettingsToggler-iconDiv SettingsToggler-iconPrimary'>
                        <Icon icon='sort-down' size='small' color='darkRed' />
                    </div>
                    <div className='SettingsToggler-iconDiv SettingsToggler-iconSecondary'>
                        <Icon icon='sort-down' size='small' color='white' />
                    </div>
                </div>
            </label>
            <div className='SettingsToggler-content'>
                {props.children}
            </div>
        </div>
    );
}

export default SettingsToggler;