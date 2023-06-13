import React, { useContext } from 'react';
import { Route, Routes } from 'react-router-dom';

import { context } from './store/store';

import HomePage from './Screens/HomePage/HomePage';
import SearchPage from './Screens/SearchPage/SearchPage';
import BookmarkPage from './Screens/BookmarkPage/BookmarkPage';
import DetailsPage from './Screens/DetailsPage/DetailsPage';
import Header from './Components/Header/Header';

const App = () => {
  return (
    <div className="app">
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/search" element={<SearchPage />} />
        <Route path="/bookmarks" element={<BookmarkPage />} />
        <Route path="/details" element={<DetailsPage />} />
      </Routes>
    </div>
  );
};

export default App;
