import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { PortfolioPage } from "./portfolio/PortfolioPage";
import { ProjectDetail } from "./portfolio/ProjectDetail";
import { PageWrapper } from "./PageWrapper";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<PageWrapper><PortfolioPage /></PageWrapper>} />
        <Route path="/project/:projectSlug" element={<PageWrapper><ProjectDetail /></PageWrapper>} />
      </Routes>
    </Router>
  );
}

export default App;

// Force deployment for custom domain cache clear

