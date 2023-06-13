import React from 'react';
import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import LoginContainer from './login';
import DevToolContainer from './dev-tool';
import FantaListContainer from './fanta-list';
import FantaBillContainer from './fanta-bill';
import { FantaPresenter } from './presenter/FantaPresenter';
import { DevToolPresenter } from './presenter/DevToolPresenter';
import View from './view';
import FantaDashBoardContainer from './dashboard';
import FantaPresenterContext from './context/fantaPresenter';




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
            path="/bill"
            element={
              <View
                container={
                  <FantaBillContainer presenter={presenter} />
                }
              ></View>
            }
          />
          <Route
            path="/dev-tool"
            element={
              <View
                container={
                  <DevToolContainer devToolPresenter={devToolPresenter} />
                }
              ></View>
            }
          />
        </Routes>
      </BrowserRouter>
    </FantaPresenterContext.Provider>
  );
}

export default App;
