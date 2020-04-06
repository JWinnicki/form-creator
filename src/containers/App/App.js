import React from 'react';
import './App.scss';
import { Route, Switch } from 'react-router-dom';

import Main from '../Main/Main';
import FirstPhaseMain from '../FirstPhaseMain/FirstPhaseMain';
import FinalFormContainer from '../FinalFormContainer/FinalFormContainer';

const App = () => {
  return (
    <div className='App'>
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
