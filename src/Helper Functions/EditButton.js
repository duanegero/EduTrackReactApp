//importing the PencilIcon component from the Heroicons library
import { PencilIcon } from "@heroicons/react/24/outline";
//importing helper function
import openEditGradesWindow from "./openEditGradesWindow";

//creating function to export, with passed in variables
export default function EditButton({ studentId, lastname, firstname }) {
  //function to handle click in app, call helper function and pass variables
  const handleClick = () => {
    openEditGradesWindow(studentId, lastname, firstname);
  };
  return (
    <button onClick={handleClick}>
      <PencilIcon className="h-6 w-6" />
    </button>
  );
}
