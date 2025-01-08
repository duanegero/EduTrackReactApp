import React, { useState } from "react"; //importing react and useState

import submitUpdateGrades from "../../Helper Functions/submitUpdateGrades"; //importing helper function to use in app
import buttonClassName from "../../Helper Functions/buttonStyles"; //importing styling to style buttons

export default function UpdateGradesForm() {
  //creating state variables to handle form submissions
  const [math, setMath] = useState("");
  const [english, setEnglish] = useState("");
  const [gym, setGym] = useState("");
  const [science, setScience] = useState("");

  // Create a URLSearchParams object to parse the query string parameters from the current URL
  const params = new URLSearchParams(window.location.search);

  //getting the variables from the query string
  const studentId = params.get("studentId");
  const lastname = params.get("lastname");
  const firstname = params.get("firstname");

  return (
    <div class="flex flex-col justify-center items-center p-4 mt-8">
      <form
        className="space-y-6 w-full max-w-xs"
        onSubmit={(event) =>
          submitUpdateGrades(
            event,
            studentId,
            math,
            english,
            gym,
            science,
            setMath,
            setEnglish,
            setGym,
            setScience
          )
        }
      >
        <div class="flex flex-col justify-center items-center">
          <p className="p-3 text-xl text-gray-600 font-poppins tracking-widest">
            Student:{" "}
            <strong>
              {lastname}, {firstname}
            </strong>
          </p>
          <p className="p-3 text-xl text-gray-600 font-poppins tracking-widest">
            ID: <strong>{studentId}</strong>
          </p>
        </div>
        <div>
          <label className="text-gray-500 font-poppins mr-4 tracking-wider ">
            Math:
          </label>
          <input
            type="number"
            placeholder="Math"
            value={math}
            onChange={(e) => setMath(e.target.value)}
          ></input>
        </div>
        <div>
          <label className="text-gray-500 font-poppins mr-4 tracking-wider ">
            English:
          </label>
          <input
            type="number"
            placeholder="English"
            value={english}
            onChange={(e) => setEnglish(e.target.value)}
          ></input>
        </div>
        <div>
          <label className="text-gray-500 font-poppins mr-4 tracking-wider ">
            Gym:
          </label>
          <input
            type="number"
            placeholder="Gym"
            value={gym}
            onChange={(e) => setGym(e.target.value)}
          ></input>
        </div>
        <div>
          <label className="text-gray-500 font-poppins mr-4 tracking-wider ">
            Science:
          </label>
          <input
            type="number"
            placeholder="Science"
            value={science}
            onChange={(e) => setScience(e.target.value)}
          ></input>
        </div>
        <div className="flex justify-center items-center">
          <button type="submit" className={buttonClassName()}>
            Save
          </button>
        </div>
      </form>
    </div>
  );
}
