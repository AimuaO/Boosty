import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router";
import Homepage from "./pages/Homepage";
import Header from "./components/Header";

const App = () => {
  return (
    <div className="font-openSans">
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<Homepage />} />
        </Routes>
      </Router>
    </div>
  );
};

export default App;
