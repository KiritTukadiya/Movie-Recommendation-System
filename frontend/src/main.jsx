import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import "./index.css";

// import Login from "./pages/Login.jsx";
// import Register from "./pages/Register.jsx";
import Search from "./pages/Search.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Search />} />
        {/* <Route path="/" element={<Login />} />

        <Route path="/register" element={<Register />} /> */}

      </Routes>
    </BrowserRouter>
  </StrictMode>,
);
