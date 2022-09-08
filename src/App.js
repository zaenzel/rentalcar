import React from "react";
import { Route, Routes } from "react-router-dom";
import "./App.css";
import Page404 from "./pages/404/Page404";
import Detail from "./pages/Detail/Detail";
import Home from "./pages/Home/Home";
import Layout from "./pages/Layout/Layout";
import ListingCard from "./pages/ListingCard/ListingCard";

const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="*" element={<Page404 />} />
        </Route>
        <Route path="listcar">
          <Route index element={<ListingCard />} />
          <Route path="detail/:id" element={<Detail />} />
        </Route>
      </Routes>
    </>
  );
};

export default App;
