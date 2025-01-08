import axios from "axios"; //imporing axios to make api calls
const apiUrl = "http://localhost:3003"; //creating varible for api url

//creating async function with passed in variables
const deleteStudent = async (
  event,
  studentId,
  lastname,
  firstname,
  refreshStudent
) => {
  //stops from refreshing the page
  event.preventDefault();

  //retreiving the token from local storage
  const token = localStorage.getItem("token");

  //asking user to confrim delete
  const isConfirmed = window.confirm(
    `Are you sure you want to remove ${lastname}, ${firstname}?`
  );

  //if confirmed
  if (isConfirmed) {
    //send axios request to delete, with headers to verify users
    await axios.delete(`${apiUrl}/students/${studentId}`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });

    //alret user success removed
    alert(`${lastname},${firstname} removed`);

    //call functions to reload students
    refreshStudent();
  }
};

//export the function to use else where
export default deleteStudent;
