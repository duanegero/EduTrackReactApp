import { MagnifyingGlassIcon } from "@heroicons/react/24/outline"; //importing the MagnifyingGlassIcon component from the Heroicons library
import openGradesWindow from "./openGradesWindow"; //import helper function to use in function

//defining function to export and use in app, pass in variables
export default function SearchButton({ studentId, lastname, firstname }) {
  //defining function to handle button click
  const handleClick = () => {
    //call helper function pass in ID
    openGradesWindow(studentId, lastname, firstname);
  };
  //return HTLM and CSS to view in app
  return (
    <button
      onClick={handleClick}
      className="flex justify-center items-center bg-gray-300 text-white p-2 rounded"
    >
      <MagnifyingGlassIcon className="h-6 w-6" />
    </button>
  );
}
