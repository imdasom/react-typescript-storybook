import React from 'react';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import ComponentLibraryPage from './pages/ComponentLibraryPage';
import PositionPlaygroundPage from './pages/PositionPlayground/PositionPlaygroundPage';

function App(): JSX.Element {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/component-library"
          element={<ComponentLibraryPage />}
        ></Route>
        <Route
          path="/position-playground"
          element={<PositionPlaygroundPage />}
        ></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
