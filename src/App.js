import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./Pages/Login";
import Home from "./Pages/Home";
import AddStudent from "./Pages/AddStudent";
import Grades from "./Pages/Grades";
import UpdateStudent from "./Pages/UpdateStudent";
import UpdateGrades from "./Pages/UpdateGrades";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="home" element={<Home />} />
        <Route path="add-student" element={<AddStudent />} />
        <Route path="grades" element={<Grades />} />
        <Route path="update-student" element={<UpdateStudent />} />
        <Route path="update-grades" element={<UpdateGrades />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
