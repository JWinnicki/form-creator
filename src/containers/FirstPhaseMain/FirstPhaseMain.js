import React, {useState} from 'react';

import './FirstPhaseMain.scss';
import SettingsComponent from '../../components/SettingsComponent/SettingsComponent';


const FirstPhaseMain = () => {
    const [ counter, setCounter ] = useState(0);
    const [ formBackgroundData, setFormBackgroundData ] = useState({ backgroundColor: '#ffffff', backgroundWidth: 500, backgroundHeight: 700 });
    const [ formTitleData, setFormTitleData ] = useState({});
    const [ formFieldsData, setFormFieldsData ] = useState([]);

    const onFieldsDataHandler = data => {
        setFormFieldsData(prev => [...prev, {fieldId: counter, order: prev.length + 1, ...data}]);
        setCounter(prev => prev + 1);
    }

    return (
        <div className='FirstPhaseMain'>
            <div className='FirstPhaseMain-settings'>
                <SettingsComponent
                    setFormBackground={setFormBackgroundData}
                    setFormTitle={setFormTitleData}
                    setFormFields={onFieldsDataHandler}
                />
            </div>
            <div className='FirstPhaseMain-composition'>
                <div className='FirstPhaseMain-composition__background'></div>
            </div>
        </div>
    );
}

export default FirstPhaseMain;