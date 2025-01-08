import axios from "axios"; //imporing axios to make api calls

const apiUrl = "http://localhost:3003"; //creating varible for api url

//creating async function to export, with passed in variable
export const getStudentGrades = async (studentId) => {
  //getting token from local storage
  const token = localStorage.getItem("token");
  try {
    //sending an axios get request, with headers to verify token and users
    const response = await axios.get(`${apiUrl}/grades/${studentId}`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });

    //log data for testing
    console.log("Response Data:", response.data);
    //return data for use in app
    return response.data;
  } catch (error) {
    //catch, log and alert if any errors
    alert("Grades not found");
    console.log("ERROR", error);
  }
};
