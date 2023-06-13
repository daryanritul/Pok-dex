import React, { useContext } from 'react';
import { Route, Routes } from 'react-router-dom';

import { context } from './store/store';

import HomePage from './Screens/HomePage/HomePage';

const App = () => {
  return (
    <div className="app">
      <Routes>
        <Route path="/" element={<HomePage />} />
      </Routes>
    </div>
  );
};

export default App;
