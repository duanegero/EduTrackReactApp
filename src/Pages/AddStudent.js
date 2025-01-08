import React, { useEffect } from "react";
import AddStudentHeader from "../Components/Add Student/as-Header";
import AddStudentForm from "../Components/Add Student/as-Form";
import GradesFooter from "../Components/Grades/grades-Footer";

export default function AddStudent() {
  useEffect(() => {
    document.title = "Add Student";
  });

  return (
    <div className="flex flex-col min-h-screen">
      <AddStudentHeader />
      <main className="flex-grow">
        <AddStudentForm />
      </main>
      <GradesFooter />
    </div>
  );
}
