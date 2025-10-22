export const steps = [
  {
    title: "Please choose your year",
    options: ["Year 1", "Year 2", "Year 3", "Year 4"],
    nextStep: 1, // goes to step index 1
  },
  {
    title: "Choose your semester",
    options: ["Semester 1", "Semester 2"],
    nextStep: 2,
  },
  {
    title: "Choose your subject",
    options: ["Maths", 'CS','Physics', 'Ctsd '],
    nextStep: 3, 
  },
  {
    title: "Choose your topic",
    options: ["Unit1dv", 'Unit2','Unit3', 'Unit4 '],
    nextStep: null, // last step
  },
  {
    title: "Confirm",
    options: ["Unit1", 'Unit2','Unit3', 'Unit4 '],
    nextStep: null, // last step
  }
  
];



