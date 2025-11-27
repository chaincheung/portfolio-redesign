import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { PortfolioPage } from "./portfolio/PortfolioPage";
import { ProjectDetail } from "./portfolio/ProjectDetail";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<PortfolioPage />} />
        <Route path="/project/:projectSlug" element={<ProjectDetail />} />
      </Routes>
    </Router>
  );
}

export default App;

// Force deployment for custom domain cache clear

