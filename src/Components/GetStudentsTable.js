import axios from "axios"; //importing axios to send requests
import dayjs from "dayjs"; //importing dayjs to format dates
import { useState } from "react"; //importing react and useState

//importing helper functions to use in app
import TrashButton from "../Helper Functions/TrashButton";
import SearchButton from "../Helper Functions/SearchButton";
import EditButton from "../Helper Functions/EditButton";
import handleGradeChange from "../Helper Functions/handleGradeChange";
import deleteStudent from "../Helper Functions/deleteStudent";

//setting a variable to handle api url
const apiUrl = "http://localhost:3003";

export default function GetStudentsTable() {
  //state to hold and set the grade
  const [grade, setGrade] = useState("");
  //state to hold list of students
  const [students, setStudents] = useState("");
  //state to track id data is fetching
  const [loading, setLoading] = useState(false);

  //function to get students based on grade
  const getStudents = async (selectedGrade) => {
    //retreving token from local storage
    const token = localStorage.getItem("token");
    //set true while fetching
    setLoading(true);
    try {
      //sending api GET to fetch students, adding headers to verify user
      const response = await axios.get(`${apiUrl}/students/${selectedGrade}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      //update variable with response data
      setStudents(response.data);
    } catch (error) {
      //log any errors and alert user
      console.log("Error", error);
      alert("Unable to fetch students. Try again");
    } finally {
      //reset loading state
      setLoading(false);
    }
  };

  return (
    <>
      <div className="flex flex-col justify-center items-center pt-5">
        <label
          htmlFor="grade-select"
          className="font-poppins tracking-widest pb-4"
        >
          Select Student Grade Level
        </label>
        <select
          id="grade-select"
          value={grade}
          onChange={(event) => handleGradeChange(event, setGrade, getStudents)}
          className="border-2 border-gray-300 rounded-lg p-2 focus:ring-2 focus:ring-blue-500 transition duration-300 hover:bg-gray-100 focus:outline-none"
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

      {students.length > 0 && (
        <>
          <h3 className="font-poppins text-4xl pt-6 tracking-wider pl-7 pb-2">
            <strong>{students.length}</strong> <small>students </small>
            <strong>found</strong>
          </h3>
          <table className="w-full border-collapse">
            <thead>
              <tr className="border-b border-gray-300">
                <th className="px-3 py-3 text-center bg-zinc-700 text-white ">
                  Student ID
                </th>
                <th className="px-3 py-3 text-center bg-zinc-700 text-white">
                  Lastname
                </th>
                <th className="px-3 py-3 text-center bg-zinc-700 text-white">
                  Firstname
                </th>
                <th className="px-3 py-3 text-center bg-zinc-700 text-white">
                  Level
                </th>
                <th className="px-3 py-3 text-center bg-zinc-700 text-white">
                  DOB
                </th>
                <th className="px-3 py-3 text-center bg-zinc-700 text-white">
                  Grades
                </th>
                <th className="px-3 py-3 text-center bg-zinc-700 text-white">
                  Edit Grades
                </th>
                <th className="px-3 py-3 text-center bg-zinc-700 text-white">
                  Delete
                </th>
              </tr>
            </thead>
            <tbody>
              {students.map((student) => (
                <tr
                  key={student.studentid}
                  className="border-b border-zinc-200"
                >
                  <td className="px-3 py-3 text-center bg-white text-zinc-500">
                    {student.studentid}
                  </td>
                  <td className="px-3 py-3 text-center bg-white text-zinc-500">
                    {student.lastname}
                  </td>
                  <td className="px-3 py-3 text-center bg-white text-zinc-500">
                    {student.firstname}
                  </td>
                  <td className="px-3 py-3 text-center bg-white text-zinc-500">
                    Grade {student.grade}
                  </td>
                  <td className="px-3 py-3 text-center bg-white text-zinc-500">
                    {dayjs(student.dob).format("MM/DD/YYYY")}
                  </td>
                  <td className="px-3 py-3 text-center bg-white text-zinc-500 flex justify-center items-center">
                    <SearchButton
                      studentId={student.studentid}
                      lastname={student.lastname}
                      firstname={student.firstname}
                    />
                  </td>
                  <td className="px-3 py-3 text-center text-green-700 ">
                    <EditButton
                      studentId={student.studentid}
                      lastname={student.lastname}
                      firstname={student.firstname}
                    ></EditButton>
                  </td>
                  <td className="px-3 py-3 text-center bg-white text-zinc-500">
                    <TrashButton
                      studentId={student.studentid}
                      lastname={student.lastname}
                      firstname={student.firstname}
                      onDelete={deleteStudent}
                      refreshStudents={() => getStudents(grade)}
                    />
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </>
      )}
    </>
  );
}
