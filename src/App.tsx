import React from 'react';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import ComponentLibraryPage from './pages/ComponentLibraryPage';
import PositionPlaygroundPage from './pages/PositionPlayground/PositionPlaygroundPage';
import PositionPlaygroundPage2 from './pages/PositionPlayground2/PositionPlaygroundPage2';
import UserPage from './pages/User/UserPage';

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
        <Route
          path="/position-playground-2"
          element={<PositionPlaygroundPage2 />}
        ></Route>
        <Route path="/users" element={<UserPage />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
