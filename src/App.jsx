import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router";
import Homepage from "./pages/Homepage";
import Header from "./components/Header";
import BecomeAPartner from "./pages/BecomeAPartner";
import FundSolarProjects from "./pages/FundSolarProjects";

const App = () => {
  return (
    <div className="font-openSans">
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/become-a-partner" element={<BecomeAPartner />} />
          <Route path="/fund-solar-projects" element={<FundSolarProjects />} />
        </Routes>
      </Router>
    </div>
  );
};

export default App;
