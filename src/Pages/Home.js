import React, { useEffect } from "react";
import Header from "../Components/Header";
import Ticker from "../Components/Ticker";
import Footer from "../Components/Footer";
import GetStudentsTable from "../Components/GetStudentsTable";

import openAddStudentWindows from "../Helper Functions/openAddStudentWindow";
import openUpdateStudentWindow from "../Helper Functions/openUpdateStudentWindow";
import buttonClassName from "../Helper Functions/buttonStyles";

export default function Home() {
  useEffect(() => {
    document.title = "Home";
  });

  return (
    <>
      <Header />
      <Ticker />
      <div className="flex space-x-4 justify-center">
        <button
          className={`${buttonClassName()} flex flex-row ml-5`}
          onClick={openAddStudentWindows}
        >
          Add Student
        </button>
        <button
          className={`${buttonClassName()} flex flex-row ml-5`}
          onClick={openUpdateStudentWindow}
        >
          Update Student
        </button>
      </div>
      <GetStudentsTable />
      <Footer />
    </>
  );
}
