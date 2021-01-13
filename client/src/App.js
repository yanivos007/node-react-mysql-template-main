import MainManu from './components/MainManu';
import './App.css';
import React from 'react'

import { Provider } from 'react-redux';
import appStore from './bussiness/appStore'

function App() {
  return (
    <Provider store={appStore}>
      <MainManu />
    </Provider>
  );
}

export default App;
