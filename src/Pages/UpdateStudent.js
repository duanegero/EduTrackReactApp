import React, { useEffect } from "react";
import UpdateStudentHeader from "../Components/Update Student/us-Header";
import UpdateStudentForm from "../Components/Update Student/us-Form";
import GradesFooter from "../Components/Grades/grades-Footer";

export default function UpdateStudent() {
  useEffect(() => {
    document.title = "Update Student";
  });

  return (
    <div className="flex flex-col min-h-screen">
      <UpdateStudentHeader />
      <main className="flex-grow">
        <UpdateStudentForm />
      </main>
      <GradesFooter />
    </div>
  );
}
