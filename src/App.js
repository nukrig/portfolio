import React from "react";
import HomePage from "./routes/Home";
import ProjectsPage from "./routes/Projects";
import AboutPage from "./routes/About";
import { Route, Routes } from "react-router-dom";

function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage/>}/>
      <Route path="/projects" element={<ProjectsPage/>}/>
      <Route path="/about" element={<AboutPage/>}/>
    </Routes>
  );
}

export default App;
