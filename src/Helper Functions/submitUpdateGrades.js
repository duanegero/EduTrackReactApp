import axios from "axios"; //importing axios to sen request to api
const apiUrl = "http://localhost:6061"; //creating varible for api url

//defining async function with passed in variables
const submitUpdateGrades = async (
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
) => {
  event.preventDefault();
  //getting token from the local storage
  const token = localStorage.getItem("token");

  //if all fields aren't filled out alert user
  if (!math || !english || !gym || !science) {
    alert("You must fill in all fields to proceed.");
    return;
  }

  //creating an object with updates passed in
  const updatedGrades = {
    math: math,
    english: english,
    gym: gym,
    science: science,
  };

  try {
    //send axios request, with update object, and headers to verify token and users
    const response = await axios.put(
      `${apiUrl}/grades/${studentId}`,
      updatedGrades,
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );
    //log success message and data
    console.log("Grades Updated Successfully", response.data);
    //alert users
    alert("Grades Updated Successfully");
  } catch (error) {
    //alert user if error, log error
    alert("Grades Not Updated");
    console.log("Error", error);
  }

  //set fields back to empty
  setMath("");
  setEnglish("");
  setGym("");
  setScience("");
};

//export function to use else where
export default submitUpdateGrades;
