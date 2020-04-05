import React, {useState} from 'react';

export const FormContext = React.createContext({
    contextFormData: {},
    getContextFormData: () => {}
})

const FormContextProvider = props => {
    const [ contextFormData, setContextFormData ] = useState({});

    const getContextFormData = dataObj => {
        setContextFormData(dataObj)
    };

    return (
        <FormContext.Provider value={{ contextFormData: contextFormData, getContextFormData: getContextFormData }}>
            {props.children}
        </FormContext.Provider>
    );
}

export default FormContextProvider;