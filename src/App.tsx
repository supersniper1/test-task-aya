import React, {FunctionComponent} from "react";
import "@ui/null.module.scss";

import { Provider } from "react-redux";
import { store } from '@store/store';
import {BrowserRouter, Navigate, Route, Routes} from "react-router-dom";
import { View } from "@views/export.views";

const AppRouting: FunctionComponent = () => (
  <BrowserRouter>
    <Routes>
      <Route path='/clothes' element={<View.Clothes/>}/>
      <Route path='*' element={<Navigate to="/clothes"/>}/>
    </Routes>
  </BrowserRouter>
);

export const AppCore: FunctionComponent = () => {
  return (
    <Provider store={store}>
      <AppRouting/>
    </Provider>
  )
};
