//creating function with passed in variable to use in app
const openGradesWindow = (studentId, lastname, firstname) => {
  // Open a new window with the student ID in the query string
  const url = `/grades?studentId=${studentId}&lastname=${lastname}&firstname=${firstname}`;
  window.open(url, "_blank", "width=500,height=600");
};

//export function to use else where
export default openGradesWindow;
