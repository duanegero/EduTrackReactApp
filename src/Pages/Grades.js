import { useEffect } from "react";
import GetGrades from "../Components/GetGrades";
import GradesHeader from "../Components/Grades/grades-Header";
import GradesFooter from "../Components/Grades/grades-Footer";
export default function Grades() {
  useEffect(() => {
    document.title = `Grades`;
  });
  return (
    <div className="flex flex-col min-h-screen">
      <GradesHeader />
      <main className="flex-grow">
        <GetGrades />
      </main>
      <GradesFooter />
    </div>
  );
}
