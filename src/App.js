import React, { useState } from "react";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
} from "react-router-dom";
import './App.css';
import Nav from "./Components/Nav";
import Login from "./Components/Login";
import Joblist from "./Components/Joblist";
import Createjob from "./Components/Createjob";
import JobModal from "./Components/JobModal";

function App() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleOpenModal = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  return (
    <Router>
      <Nav onOpenModal={handleOpenModal} />
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/dashboard" element={<Joblist />} />
        <Route path="/createjob" element={<JobModal/>} />
        {/* <Route path="/" element={<Home />} /> */}
      </Routes>
      {isModalOpen && <JobModal onClose={handleCloseModal} />}
    </Router>
  );
}

export default App;
