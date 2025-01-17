import axios from "axios"; //imporing axios to make api calls
const apiUrl = "http://localhost:6061"; //creating varible for api url

//creating a async function passing variables
const submitLogin = async (
  event,
  username,
  password,
  setUsername,
  setPassword,
  navigate
) => {
  event.preventDefault();

  //if no username and password alret user
  if (!username || !password) {
    alert("Enter Username and Password");
    return;
  }

  try {
    //creating a user object with user input
    const user = {
      username: username,
      password: password,
    };
    //send axios request, using helper function
    const response = await axios.post(`${apiUrl}/login`, user);

    //assigning the response to a variable
    const token = response.data;
    //storing token to use later
    localStorage.setItem("token", token);
    //alert user welcome
    alert(`Welcome ${username}`);
    //clear input fields
    setUsername("");
    setPassword("");
    //navigate to home page
    navigate("/Home");
  } catch (error) {
    console.log("Error", error); //logging the error
    alert("Login failed, try again"); //alerting to try again
    //clear input fields
    setUsername("");
    setPassword("");
  }
};
//export function to use else where in app
export default submitLogin;
