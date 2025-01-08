import React, { useState } from "react"; //importing react and useState

import submitUpdateStudent from "../../Helper Functions/submitUpdateStudent"; //importing helper function
import buttonClassName from "../../Helper Functions/buttonStyles"; //importing styling for buttons

export default function UpdateStudentForm() {
  //creating state variables to handle form submissions
  const [studentId, setStudentId] = useState("");
  const [lastname, setLastname] = useState("");
  const [firstname, setFirstname] = useState("");
  const [dob, setDob] = useState("");
  const [grade, setGrade] = useState("");

  return (
    <div className="flex flex-col justify-center items-center p-4 mt-10">
      <form
        className="space-y-6 w-full max-w-xs"
        onSubmit={(event) =>
          submitUpdateStudent(
            event,
            studentId,
            lastname,
            firstname,
            dob,
            grade,
            setStudentId,
            setLastname,
            setFirstname,
            setDob,
            setGrade
          )
        }
      >
        <div>
          <label className="text-gray-500 font-poppins mr-4 tracking-wider ">
            Student ID:
          </label>
          <input
            type="number"
            placeholder="ID"
            value={studentId}
            onChange={(e) => setStudentId(e.target.value)}
            className="placeholder-slate-400 border border-slate-400 rounded  text-black focus:border-blue-500 text-right w-20 p-1"
          ></input>
        </div>
        <div>
          <label className="text-gray-500 font-poppins mr-4 tracking-wider ">
            Last Name:
          </label>
          <input
            type="text"
            placeholder="E.g., Smith"
            value={lastname}
            onChange={(e) => setLastname(e.target.value)}
            className="placeholder-slate-400 border border-slate-400 rounded  text-black focus:border-blue-500  p-1"
          ></input>
        </div>
        <div>
          <label className="text-gray-500 font-poppins mr-4 tracking-wider ">
            First Name:
          </label>
          <input
            type="text"
            placeholder="E.g., John"
            value={firstname}
            onChange={(e) => setFirstname(e.target.value)}
            className="placeholder-slate-400 border border-slate-400 rounded  text-black focus:border-blue-500  p-1"
          ></input>
        </div>
        <div>
          <label className="text-gray-500 font-poppins mr-4 tracking-wider ">
            DOB:
          </label>
          <input
            type="date"
            placeholder="Date of Birh"
            value={dob}
            onChange={(e) => setDob(e.target.value)}
            className="placeholder-slate-400 border border-slate-400 rounded  text-black focus:border-blue-500 p-1 "
          ></input>
        </div>
        <div>
          <label className="text-gray-500 font-poppins mr-4 tracking-wider ">
            Grade:
          </label>
          <select
            value={grade}
            onChange={(e) => setGrade(e.target.value)}
            className="placeholder-slate-400 border border-slate-400 rounded  text-black focus:border-blue-500 p-1 "
          >
            <option value="" disabled>
              --Choose Grade--
            </option>
            <option value="1">Grade 1</option>
            <option value="2">Grade 2</option>
            <option value="3">Grade 3</option>
            <option value="4">Grade 4</option>
            <option value="5">Grade 5</option>
            <option value="6">Grade 6</option>
          </select>
        </div>
        <div className="flex justify-center items-center">
          <button type="submit" className={buttonClassName()}>
            Update
          </button>
        </div>
      </form>
    </div>
  );
}
