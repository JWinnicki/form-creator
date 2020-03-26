import React, {useState} from 'react';
import { Link } from 'react-router-dom';

import './FirstPhaseMain.scss';
import SettingsComponent from '../../components/SettingsComponent/SettingsComponent';
import CompositionComponent from '../../components/CompositionComponent/CompositionComponent';
import MainButton from '../../components/MainButton/MainButton';

const FirstPhaseMain = () => {
    const [ counter, setCounter ] = useState(0);
    const [ formBackgroundData, setFormBackgroundData ] = useState({ backgroundColor: '#ffffff', backgroundWidth: 500, backgroundHeight: 650 });
    const [ formTitleData, setFormTitleData ] = useState({});
    const [ formFieldsData, setFormFieldsData ] = useState([]);

    const onFieldsDataHandler = data => {
        setFormFieldsData(prev => [...prev, {fieldId: counter, order: prev.length + 1, ...data}]);
        setCounter(prev => prev + 1);
    }

    const onDeleteFieldHandler = id => {
        const newArr = formFieldsData.filter(el => el.fieldId !== id);
        newArr.forEach((el, index) => el.order = index + 1);
        setFormFieldsData(newArr.sort( (a, b) => a.order - b.order) );
    }

    const onMoveUpHandler = id => {
        const newArr = [...formFieldsData];
        newArr.forEach((el, index, arr) => {
            if(el.fieldId === id && el.order > 1) {
                //console.log(`order klikniętego elementu: ${el.order}`);
                //console.log(`order elementu wyżej: ${arr[index - 1].order}`);
                el.order -= 1;
                arr[index - 1].order += 1;
            }
        });
        setFormFieldsData(newArr.sort( (a, b) => a.order - b.order) );
    }

    const onMoveDownHanlder = id => {
        const newArr = [...formFieldsData];
        newArr.forEach((el, index, arr) => {
            if(el.fieldId === id && el.order < newArr.length) {
                //console.log(`order klikniętego elementu: ${el.order}`);
                //console.log(`order elementu wyżej: ${arr[index - 1].order}`);
                el.order += 1;
                arr[index + 1].order -= 1;
            }
        });
        setFormFieldsData(newArr.sort( (a, b) => a.order - b.order) );
    }


    /* if(el.fieldId === id && el.order > 1) {
                originalArr[index-1].order = originalArr[index-1].order + 1;
                el.order = el.order - 1;
            } */
    return (
        <div className='FirstPhaseMain'>
            <div className='FirstPhaseMain-content'>
                <div className='FirstPhaseMain-settings'>
                    <div  className='FirstPhaseMain-header'>
                        <p className='FirstPhaseMain-headerText'>Settings</p>
                    </div>
                    <SettingsComponent
                        setFormBackground={setFormBackgroundData}
                        setFormTitle={setFormTitleData}
                        setFormFields={onFieldsDataHandler}
                        formBackgroundColor={formBackgroundData.backgroundColor}
                    />
                </div>
                <div className='FirstPhaseMain-composition'>
                    <div  className='FirstPhaseMain-header'>
                        <p className='FirstPhaseMain-headerText'>Preview</p>
                    </div>
                    <CompositionComponent
                        backgroundStyle={formBackgroundData}
                        titleStyle={formTitleData}
                        formFields={formFieldsData}
                        deleteField={onDeleteFieldHandler}
                        moveUp={onMoveUpHandler}
                        moveDown={onMoveDownHanlder}
                    />
                </div>
            </div>
            <div className='Main-buttonDiv'>
                <Link to='/'>
                    <MainButton fontColor='white' colorPrimary='#cf0000' colorSecondary='black' size='big'>Generate</MainButton>
                </Link>
            </div>
        </div>
    );
}

export default FirstPhaseMain;