import React, { useState } from "react"; //importing react and useState
import { useNavigate } from "react-router-dom"; //importing use nav to go from page to page

//importing helper functions and styles for buttons
import submitLogin from "../Helper Functions/submitLogin";
import buttonClassName from "../Helper Functions/buttonStyles";

export default function LoginForm() {
  //creating a varible to handle navigatiion
  const navigate = useNavigate();

  //creating variables to handle user inputs
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  //creating function to handle submit, call helper function and pass in varibles
  const handleSubmit = (event) => {
    submitLogin(event, username, password, setUsername, setPassword, navigate);
  };
  return (
    <div className="flex flex-col justify-center items-center min-w-fit pt-28">
      <form
        onSubmit={handleSubmit}
        className="flex flex-col justify-center items-center w-96 border-2 border-gray-300 p-0 rounded-lg shadow-lg"
      >
        <div className="bg-gradient-to-r from-cyan-500 to-blue-500 w-full">
          <h5 className="m-12 bg-clip-text text-white font-poppins rounded-lg text-4xl tracking-wide drop-shadow-md mb-12">
            Hello,
            <br />
            <strong>welcome!</strong>
          </h5>
        </div>
        <input
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          type="text"
          placeholder="Enter Username"
          className="p-1 mb-4 mt-12 border border-gray-300 rounded-md w-60"
        ></input>
        <input
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          type="password"
          placeholder="Enter Password"
          className="p-1 border border-gray-300 rounded-md w-60 mb-20"
        ></input>
        <button type="submit" className={buttonClassName()}>
          Login
        </button>
      </form>
    </div>
  );
}
