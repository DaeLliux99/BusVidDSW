import React from "react";
import { Routes, Route } from "react-router-dom";
import AuthRoute from "../components/ProtectedRoute";
import NoAuthRoute from "../components/NoAuthRoute";
import "../App.css";
import AdminView from "../views/adminView";
import LandingPage from "../views/landing";

const AppRouter = () => (
  <Routes>
    <Route
      path="/AdminView"
      element={
        <AuthRoute>
          <AdminView />
        </AuthRoute>
      }
    />
    <Route
      path="/"
      element={
        <NoAuthRoute>
          <LandingPage />
        </NoAuthRoute>
      }
    />
  </Routes>
);
export default AppRouter;
