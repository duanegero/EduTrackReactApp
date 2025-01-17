import axios from "axios"; //importing axios to send api requests
const apiUrl = "http://localhost:6061"; //creating varible for api url

//defining async function wth passed in variables
const submitUpdateStudent = async (
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
) => {
  event.preventDefault();
  //getting token from local storage
  const token = localStorage.getItem("token");

  //if all fields aren't filled out alert user
  if (!studentId || !lastname || !firstname || !dob || !grade) {
    alert("You must fill in all fields to proceed.");
    return;
  }

  //creating a object with passed in variables
  const updateStudent = {
    lastname: lastname,
    firstname: firstname,
    dob: dob,
    grade: grade,
  };

  try {
    //sending axios request, with object with headers verify user and token
    const response = await axios.put(
      `${apiUrl}/students/${studentId}`,
      updateStudent,
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );
    //log success message and response data
    console.log("Updated Student", response.data);
    //alert user success
    alert(
      `${response.data.updatedStudent.lastname}, ${response.data.updatedStudent.firstname} updated successfully!`
    );
  } catch (error) {
    //alert user if error, log error
    alert("Student Not Updated");
    console.log("Error", error);
  }
  //set of fields to empty
  setStudentId("");
  setLastname("");
  setFirstname("");
  setDob("");
  setGrade("");
};

//exporting function to use in app
export default submitUpdateStudent;
