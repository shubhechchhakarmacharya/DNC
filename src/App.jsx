import React from 'react';
import Checkin_Success from "./components/Checkin_Success"
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Home from './pages/Home';
import Ticket from './pages/Ticket';
import Form from './pages/Form';
import Scan from './pages/Scan';
import "./App.css"

function App() {
  return (
    // <Router>
    //   <Routes>
    //     <Route path="/" element={<Home />} />
    //     <Route path="/ticket" element={<Ticket />} />
    //     <Route path="/form" element={<Form />} />
    //     <Route path="/scan" element={<Scan />} />
    //   </Routes>
    // </Router>
    <Checkin_Success name = "Trishan Tuladhar"/>
  );
}

export default App;
