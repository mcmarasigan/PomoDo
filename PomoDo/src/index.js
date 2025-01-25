import React from "react";
import ReactDOM from "react-dom/client";
import Welcome from "./components/Welcome";
import Pomodoro from "./components/Pomodoro";
import reportWebVitals from "./reportWebVitals";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./css/Navbar.css";
import Tasklist from "./Tasklist";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Router>
      <Routes>
        <Route path="/" element={<Welcome />} />
        <Route path="/Pomodoro" element={<Pomodoro />} />
        <Route path="/Tasklist" element={<Tasklist />} />
      </Routes>
    </Router>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
