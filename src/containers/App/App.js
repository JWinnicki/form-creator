import React, { useContext } from 'react';
import './App.scss';
import { Route, Switch } from 'react-router-dom';

import Main from '../Main/Main';
import FirstPhaseMain from '../FirstPhaseMain/FirstPhaseMain';
import FinalFormContainer from '../FinalFormContainer/FinalFormContainer';
import Modal from '../../components/ModalComponent/Modal/Modal';
import { ModalContext } from '../../context/modal-context';

const App = () => {

  const { showModal, setShowModal } = useContext(ModalContext)

  return (
    <div className='App'>
      {showModal && <Modal onCloseModal={() => setShowModal(false)} />}
      <div className='App-content'>
        <Switch>
          <Route path='/create-form' component={FirstPhaseMain} />
          <Route path='/final-form' component={FinalFormContainer} />
          <Route path='/' component={Main} />
        </Switch>
      </div>
    </div>
  );
}

export default App;
