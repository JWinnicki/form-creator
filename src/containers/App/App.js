import React from 'react';
import './App.scss';
import { Route, Switch } from 'react-router-dom';

import Main from '../Main/Main';

const App = () => {
  return (
    <div className='App'>
      <div className='App-content'>
        <Switch>
          <Route path='/' component={Main} />
        </Switch>
      </div>
    </div>
  );
}

export default App;
