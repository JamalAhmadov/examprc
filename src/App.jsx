import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Admin from "./pages/Admin";
import Product from "./pages/Product";
import Add from "./pages/Add";
import Edit from "./pages/Edit";
import Header from "./components/Header";

const App = () => {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />

        <Route path="/admin/" element={<Admin />}>
          <Route path="/admin/" element={<Product />} />
          <Route path="add" element={<Add />} />
          <Route path="edit/:id" element={<Edit />} />
        </Route>
      </Routes>
    </>
  );
};

export default App;
