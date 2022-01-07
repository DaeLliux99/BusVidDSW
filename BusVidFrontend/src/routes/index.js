import React from "react";
import { Routes, Route, Link, Router } from "react-router-dom";
import "../App.css";
import AdminView from "../views/adminView";
import LandingPage from "../views/landing";
const AppRouter = () => (
  <Routes>
    <Route path="/" element= {<LandingPage/>}/>
    <Route path="/AdminView" element={<AdminView/>}/>
  </Routes>
)
export default AppRouter;
