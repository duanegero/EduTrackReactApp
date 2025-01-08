//function to handle changes to grade selection
const handleGradeChange = (event, setGrade, getStudents) => {
  //assign the value to select to variable
  const selectedGrade = event.target.value;
  //set grade state to select variable
  setGrade(selectedGrade);
  //if a grade selected
  if (selectedGrade) {
    //fetch students from selected grade
    getStudents(selectedGrade);
  }
};
//export function to use in app
export default handleGradeChange;
