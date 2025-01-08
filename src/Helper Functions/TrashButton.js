import { TrashIcon } from "@heroicons/react/24/outline"; //importing the TrashIcon component from the Heroicons library

//defining function passing in variables and callbacks
export default function TrashButton({
  studentId,
  lastname,
  firstname,
  onDelete,
  refreshStudents,
}) {
  return (
    <button
      className="text-red-600"
      //add an onClick event handler that calls the onDelete function
      //pass the event, variables and refresh callback as arguments
      onClick={(event) =>
        onDelete(event, studentId, lastname, firstname, refreshStudents)
      }
    >
      <TrashIcon className="h-6 w-6" />
    </button>
  );
}
