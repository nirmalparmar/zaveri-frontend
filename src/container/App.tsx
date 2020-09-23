import React from 'react';
import {configureStore} from '../store'
import { Provider } from 'react-redux';
import { BrowserRouter as Router } from 'react-router-dom';
import Navbar from './Navbar';

const store = configureStore()

function App() {
  return (
    <Provider store={store}>
      <Router>
        <Navbar />
      </Router>
    </Provider>
  );
}

export default App;
