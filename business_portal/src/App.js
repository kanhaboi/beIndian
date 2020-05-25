import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from "./components/home/navbar";
import Routes from "./routes.js";
import { BrowserRouter as Router } from "react-router-dom";
function App() {
  return (

    <Router>
      <div className="bg-light vw-100 vh-100">
        <Navbar />
        <Routes/>
      </div>
    </Router>
  );
}

export default App;
