import React from 'react';
import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { FantaPresenter } from './presenter/FantaPresenter';
import { DevToolPresenter } from './presenter/DevToolPresenter';
import View from './view';
import LoginContainer from './login';
import FantaListContainer from './fanta-list';
import FantaBillContainer from './fanta-bill';
import FantaDashBoardContainer from './dashboard';
import FantaPresenterContext from './context/fantaPresenter';
import MeContainer from './me';




function App() {

  const presenter = new FantaPresenter();
  const devToolPresenter = new DevToolPresenter();

  return (
    <FantaPresenterContext.Provider value={presenter}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<LoginContainer />} />
          <Route
            path="/dashboard"
            element={
              <View
                container={
                  <FantaDashBoardContainer presenter={presenter} />
                }
              ></View>
            }
          />
          <Route
            path="/list"
            element={
              <View
                container={
                  <FantaListContainer presenter={presenter} />
                }
              ></View>
            }
          />
          <Route
            path="/me"
            element={
              <View
                container={
                  <MeContainer />
                }
              ></View>
            }
          />
          <Route
            path="/bill"
            element={
              <View
                container={
                  <FantaBillContainer presenter={presenter} />
                }
              ></View>
            }
          />
      </BrowserRouter>
    </FantaPresenterContext.Provider>
  );
}

export default App;
