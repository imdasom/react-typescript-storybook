import React from 'react';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import ComponentLibraryPage from './pages/ComponentLibraryPage';
import PositionPlaygroundPage from './pages/PositionPlayground/PositionPlaygroundPage';
import PositionPlaygroundPage2 from './pages/PositionPlayground2/PositionPlaygroundPage2';
import UserPage from './pages/User/UserPage';
import CocktailListPage1 from './pages/CocktailList/Step1/index.page';
import CocktailListPage2 from './pages/CocktailList/Step2/index.page';
import CocktailListPage3 from './pages/CocktailList/Step3/index.page';
import CocktailListPage4 from './pages/CocktailList/Step4/index.page';
import UserListPage1 from './pages/user-list/step1/index.page';
import UserListPage2 from './pages/user-list/step2/index.page';
import UserListPage3 from './pages/user-list/step3/index.page';
import UserListPage4 from './pages/user-list/step4/index.page';

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
        <Route
          path="/list/cocktail/step1"
          element={<CocktailListPage1 />}
        ></Route>
        <Route
          path="/list/cocktail/step2"
          element={<CocktailListPage2 />}
        ></Route>
        <Route
          path="/list/cocktail/step3"
          element={<CocktailListPage3 />}
        ></Route>
        <Route
          path="/list/cocktail/step4"
          element={<CocktailListPage4 />}
        ></Route>
        <Route path="/list/user/step1" element={<UserListPage1 />}></Route>
        <Route path="/list/user/step2" element={<UserListPage2 />}></Route>
        <Route path="/list/user/step3" element={<UserListPage3 />}></Route>
        <Route path="/list/user/step4" element={<UserListPage4 />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
