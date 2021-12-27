import React from "react";
import { Routes, Route } from "react-router";
import { BrowserRouter } from "react-router-dom";
import MainPage from "../pages/MainPage/MainPage";

const AppRouter = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="*" element={<MainPage />} />
      </Routes>
    </BrowserRouter>
  );
};

export default AppRouter;
