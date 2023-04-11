import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
import NavBar from "./assets/Component/NavBar";
import HomePage from "./assets/Component/HomePage";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Create from "./assets/routes/Create";
import Gallery from "./assets/routes/Gallery";
import DetailMate from "./assets/routes/DetailMate";
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<NavBar />}>
          <Route path="/home" element={<HomePage />} />
          <Route path="/new" element={<Create />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/:id" element={<DetailMate />} />
        </Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
