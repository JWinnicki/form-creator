import React, {useState} from 'react';

export const ModalContext = React.createContext();

const ModalContextProvider = props => {
    const [showModal, setShowModal] = useState(false);

    return (
        <ModalContext.Provider value={{ showModal: showModal, setShowModal: setShowModal }}>
            {props.children}
        </ModalContext.Provider>
    );
}

export default ModalContextProvider;