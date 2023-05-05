import React from "react";
import HomePage from "./routes/Home";
import ProjectsPage from "./routes/Projects";
import { Route, Routes } from "react-router-dom";

function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage/>}/>
      <Route path="/projects" element={<ProjectsPage/>}/>
    </Routes>
  );
}

export default App;
