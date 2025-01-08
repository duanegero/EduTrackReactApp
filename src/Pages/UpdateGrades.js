import React, { useEffect } from "react";
import UpdateGradesHeader from "../Components/Update Grades/ug-Headers";
import GradesFooter from "../Components/Grades/grades-Footer";
import UpdateGradesForm from "../Components/Update Grades/ug-form";

export default function UpdateGrades() {
  useEffect(() => {
    document.title = "Update Grade";
  });

  return (
    <div className="flex flex-col min-h-screen">
      <UpdateGradesHeader />
      <main className="flex-grow">
        <UpdateGradesForm />
      </main>
      <GradesFooter />
    </div>
  );
}
