import React from "react";
import "./App.css";
import { BrowserRouter as Router, Routes, Route} from "react-router-dom";
import HorizontalNav from "./components/HorizontalNav";
import SideNav from "./components/SideNav";
import VerticalNav from "./components/VerticalNav";
import DashboardComp from "./pages/DashboardComp";
import BoardComp from "./pages/BoardComp";

function App() {
  return (
    <Router>
      <HorizontalNav />
      <SideNav />
      <VerticalNav />
      
      <Routes>
        <Route path="/DashboardComp" element={ <DashboardComp /> } />
        <Route path="/BoardComp" element={ <BoardComp />}/>
      </Routes>
    </Router>
  );
}

export default App;
