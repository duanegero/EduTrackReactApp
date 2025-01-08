import { useState, useEffect } from "react"; //importing "use" to use in function
import { getStudentGrades } from "../Helper Functions/getStudentGrades"; //import helper function

//create function to export and use in app
export default function GetGrades() {
  //creating varibles to handle variable states
  const [grades, setGrades] = useState(null);
  const [studentId, setStudentId] = useState(null);
  const [lastname, setLastname] = useState(null);
  const [firstname, setFirstname] = useState(null);

  // Extract studentId from the URL
  useEffect(() => {
    //creating an object to get values from string in URL
    const params = new URLSearchParams(window.location.search);
    //getting the variables from the query string
    const id = params.get("studentId");
    const lastname = params.get("lastname");
    const firstname = params.get("firstname");
    //set the state with retrieved data
    setStudentId(id);
    setLastname(lastname);
    setFirstname(firstname);
  }, []);

  useEffect(() => {
    //check if id exists
    if (studentId) {
      //defining async function to get grades of student
      const fetchGrades = async () => {
        //call helper function and pass in id to use
        const data = await getStudentGrades(studentId);
        //check if data returned and length is greater than 0
        if (data && data.length > 0) {
          //set the state with the returned data
          setGrades(data[0]);
        }
      };
      //call this function to get the grades
      fetchGrades();
    }
    //run everytime new student ID
  }, [studentId]);

  return (
    <div class="flex flex-col justify-center items-center mt-10">
      {" "}
      {grades ? (
        <>
          <p className="p-3 text-2xl text-gray-600 font-poppins tracking-widest">
            Student:{" "}
            <strong>
              {lastname}, {firstname}
            </strong>
          </p>
          <p className="p-3 text-2xl text-gray-600 font-poppins tracking-widest">
            ID: <strong>{studentId}</strong>
          </p>
          <p className="p-2 text-xl text-gray-500 font-poppins tracking-widest">
            Math: <strong>{grades.math}</strong>
          </p>
          <p className="p-2 text-xl text-gray-500 font-poppins tracking-widest">
            English: <strong>{grades.english}</strong>
          </p>
          <p className="p-2 text-xl text-gray-500 font-poppins tracking-widest">
            Gym: <strong>{grades.gym}</strong>
          </p>
          <p className="p-2 text-xl text-gray-500 font-poppins tracking-widest mb-10">
            Science: <strong>{grades.science}</strong>
          </p>
        </>
      ) : (
        <p className="p-3 text-2xl text-gray-600 font-poppins tracking-widest">
          Loading grades...
        </p>
      )}
    </div>
  );
}
