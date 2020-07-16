import React, {useState, useContext} from 'react';
import { Link } from 'react-router-dom';

import './FirstPhaseMain.scss';
import SettingsComponent from '../../components/SettingsComponent/SettingsComponent';
import CompositionComponent from '../../components/CompositionComponent/CompositionComponent';
import MainButton from '../../components/MainButton/MainButton';
import { FormContext } from '../../context/form-context';

const FirstPhaseMain = () => {

    const { contextFormData, getContextFormData } = useContext(FormContext)

    const [ counter, setCounter ] = useState(contextFormData.lastId ? contextFormData.lastId : 0);
    const [ formBackgroundData, setFormBackgroundData ] = useState(contextFormData.formBackgroundData ? contextFormData.formBackgroundData : { backgroundColor: '#ffffff', backgroundWidth: 500, backgroundHeight: 650 });
    const [ formTitleData, setFormTitleData ] = useState(contextFormData.formTitleData ? contextFormData.formTitleData : { title: '', titleColor: '#000000', fontStyle: 'normal', fontWeight: 'normal', fontSize: '35' });
    const [ formFieldsData, setFormFieldsData ] = useState(contextFormData.formFieldsData ? contextFormData.formFieldsData : []);
    const [ formButtonStyle, setFormButtonStyle ] = useState(contextFormData.formButtonStyle ? contextFormData.formButtonStyle : null);

    const onFieldsDataHandler = data => {
        setFormFieldsData(prev => [...prev, {fieldId: counter, order: prev.length + 1, margin: 0, ...data}]);
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
                el.order += 1;
                arr[index + 1].order -= 1;
            }
        });
        setFormFieldsData( newArr.sort( (a, b) => a.order - b.order) );
    }

    const onIncreaseMargin = id => {
        const newArr = [...formFieldsData];
        newArr.forEach(el => {
            if(el.fieldId === id && el.margin < 50) {
                el.margin = el.margin + 10;
            }
        });
        setFormFieldsData(newArr);
    }

    const onDecreaseMargin = id => {
        const newArr = [...formFieldsData];
        newArr.forEach(el => {
            if(el.fieldId === id && el.margin > -50) {
                el.margin = el.margin - 10;
            }
        });
        setFormFieldsData(newArr);
    }


    /* if(el.fieldId === id && el.order > 1) {
                originalArr[index-1].order = originalArr[index-1].order + 1;
                el.order = el.order - 1;
            } */

    const buttonStyle = {
        buttonDimensionsOption: 'fixed',
        buttonHeight: 5,
        buttonWidth: 16,
        fontColor: '#ffffff',
        primaryColor: '#cf0000',
        secondaryColor: '#000000'
    }
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
                        setFormButtonStyle={setFormButtonStyle}
                        formButtonStyle={formButtonStyle}
                        titleStyle={formTitleData}
                        initValues={contextFormData}
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
                        formButton={formButtonStyle}
                        increaseMargin={onIncreaseMargin}
                        decreaseMargin={onDecreaseMargin}
                    />
                </div>
            </div>
            <div className='Main-buttonDiv'>
                <Link to='/final-form'>
                    <MainButton clicked={getContextFormData} data={{formBackgroundData, formButtonStyle, formTitleData, formFieldsData, lastId: counter }} styleData={buttonStyle} unit='em'>Generate</MainButton>
                </Link>
            </div>
        </div>
    );
}

export default FirstPhaseMain;