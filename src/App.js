import React from "react";
import { Route, Routes } from "react-router-dom";
import "./App.css";
import Page404 from "./pages/404/Page404";
import Navbar from "./pages/Component/Navbar/Navbar";
import Detail from "./pages/Detail/Detail";
import Home from "./pages/Home/Home";

const App = () => {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/">
          <Route index element={<Home />} />
          <Route path="detail/:id" element={<Detail />} />
          <Route path="*" element={<Page404 />} />
        </Route>
      </Routes>
    </>
  );
};

export default App;
