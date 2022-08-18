import { Routes, Route, Navigate, useLocation } from "react-router-dom";
import { TransitionGroup, CSSTransition } from "react-transition-group";

import Login from "../pages/Login";
import Register from "../pages/Register";
import Dashboard from "../pages/Dashboard";

function RoutesMain() {
  const location = useLocation();
  return (
    <TransitionGroup>
      <CSSTransition key={location.key} classNames="transition" timeout={500}>
        <Routes location={location}>
          <Route path="/register" element={<Register />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/login" element={<Login />} />
          <Route path="*" element={<Navigate to={"/login"} />} />
        </Routes>
      </CSSTransition>
    </TransitionGroup>
  );
}

export default RoutesMain;
