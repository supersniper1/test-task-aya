import React, { FunctionComponent } from "react";
import "@ui/null.module.scss";

import { Provider } from "react-redux";
import { store } from "@store/store";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import { View } from "@views/export.views";
import { Components } from "@components/export.components";

const AppRouting: FunctionComponent = () => (
  <BrowserRouter>
  <Components.Header/>
    <Routes>
      <Route path="/clothes" element={<View.Clothes />} />
      <Route path="*" element={<Navigate to="/clothes" />} />
      <Route path="/cloth">
        <Route path=":clothId" element={<View.Cloth/>}/>
      </Route>
      <Route path="/cart" element={<View.Cart/>}/>
    </Routes>
  </BrowserRouter>
);

export const AppCore: FunctionComponent = () => {
  return (
    <Provider store={store}>
      <AppRouting />
    </Provider>
  );
};
