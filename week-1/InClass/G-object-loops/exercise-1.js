// You are given an object of student names and grades
// Loop through all the students' grades and console log the name and grade of the ones with grade more than 18
// Try to use both methods shown above to achieve this

const studentGrades = {
    tom: 20,
    george: 17,
    abdul: 19,
  };
  for (const key in studentGrades){
    if (studentGrades[key] > 18){
      console.log(`${key}: ${studentGrades[key]}`);
    }
  }
  // Prints
  // TOM - 20
  // ABDUL - 19

//self pratice
  let namesandAges ={
    Amara: 23,
    Anudeep: 25,
    Thony: 30,
  };
  for (const key in namesandAges){
    if(namesandAges[key] <30){
      console.log(key + " : " + namesandAges[key]);
    }
  };
   
