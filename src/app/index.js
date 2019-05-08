// @flow
import React from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter as Router } from 'react-router-dom';

import Root from '../routes';
import store from './store';

function App() {
  return (
    <Provider store={store}>
      <Router>
        <Root />
      </Router>
    </Provider>
  );
}

export default App;
