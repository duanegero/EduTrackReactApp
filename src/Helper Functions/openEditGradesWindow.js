//creating fuction to use in app, with passed in variables
const openEditGradesWindow = (studentId, lastname, firstname) => {
  //creating url variable, with own url that can be pared else where
  const url = `/update-grades?studentId=${studentId}&lastname=${lastname}&firstname=${firstname}`;
  window.open(url, "_blank", "width=500,height=600,resizable=no");
};

//export function to use in app
export default openEditGradesWindow;
