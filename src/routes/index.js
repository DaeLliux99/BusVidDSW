import React from "react";
import { Routes, Route, Link, Router } from "react-router-dom";
import "../App.css";
import LandingPage from "../views/landing";
import SignInView from "../views/SignInView";
const AppRouter = () => (
  <Routes>
    <Route path="/" element= {<LandingPage />}/>
    <Route path="/SignIn" element= {<SignInView/>}/>
  </Routes>
)
export default AppRouter;
