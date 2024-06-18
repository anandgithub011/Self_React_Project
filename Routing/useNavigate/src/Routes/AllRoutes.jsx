import React from "react";
import Home from "../components/Home";
import Login from "../components/Login";
import { Routes, Route } from "react-router-dom";

const AllRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />}></Route>
      <Route path="/login" element={<Login />}></Route>
    </Routes>
  );
};

export default AllRoutes;
