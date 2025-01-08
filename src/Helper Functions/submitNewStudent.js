import axios from "axios"; //importing axios to send requests to api
const apiUrl = "http://localhost:3003"; //creating varible for api url

//defining async function with passed in variables
const submitNewStudent = async (
  event,
  lastname,
  firstname,
  dob,
  grade,
  setLastname,
  setFirstname,
  setDob,
  setGrade
) => {
  event.preventDefault();
  //getting the token from local storage
  const token = localStorage.getItem("token");

  //if of fields aren't filled out alert user
  if (!lastname || !firstname || !dob || !grade) {
    alert("You must fill in all fields to proceed.");
    return;
  }

  //creating a new student object with varibles passed in
  const newStudent = {
    lastname: lastname,
    firstname: firstname,
    dob: dob,
    grade: grade,
  };

  try {
    //try axios post, with new object and headers to verify token and users
    const response = await axios.post(`${apiUrl}/students`, newStudent, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    //log response date
    console.log("New Student", response.data);
    //alert user, success message
    alert(
      `${response.data.newStudent.lastname}, ${response.data.newStudent.firstname} added successfully!`
    );
  } catch (error) {
    //alert user if error, log error
    alert("Student Not Added");
    console.log("Error", error);
  }

  //set of fields to empty
  setLastname("");
  setFirstname("");
  setDob("");
  setGrade("");
};

//export function to use else where
export default submitNewStudent;
