import React from "react";
import { Route, Routes, useLocation } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import Dashboard from "../Pages/Dashboard/dashboard.js";
import Library from "../Pages/Library/library.js";
import Discover from "../Pages/Discover/Discover.js";

function AnimatedRoutes() {
  const location = useLocation();
  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<Dashboard />} />
        <Route path="/Library" element={<Library />} />
        <Route path="/Discover" element={<Discover />} />
      </Routes>
    </AnimatePresence>
  );
}

export default AnimatedRoutes;
