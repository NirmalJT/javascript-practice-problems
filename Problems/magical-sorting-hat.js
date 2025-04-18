console.log("Lets start");
// 1. The Magical Sorting Hat:
//    Imagine you are creating a magical sorting hat for a wizard school. Implement a JavaScript function that takes an array of student names and assigns them to one of the four houses (Gryffindor (length less than 6), Hufflepuff(length less than 8), Ravenclaw(length less than 12), or Slytherin(length greater than or equal to 12)) based on the length of their names.

//method 1
function assignHouse(students) {
  let houses = ["Gryffindor", "Hufflepuff", "Ravenclaw", "Slytherin"];
  students.forEach((student) => {
    if (student.length < 6) {
      console.log(`${houses[0]} : ${student}`);
    } else if (student.length < 8) {
      console.log(`${houses[1]} : ${student}`);
    } else if (student.length < 12) {
      console.log(`${houses[2]} : ${student}`);
    } else if (student.length >= 12) {
      console.log(`${houses[3]} : ${student}`);
    }
  });
}
//method 2
function assignHouse_2(students) {
  let houses = [];
  students.forEach((student) => {
    if (student.length < 6) {
      houses.push("Gryffindor");
    } else if (student.length < 8) {
      houses.push("Hufflepuff");
    } else if (student.length < 12) {
      houses.push("Ravenclaw");
    } else if (student.length >= 12) {
      houses.push("Slytherin");
    }
  });
  console.log(houses);
}
let students = [
  "Avi",
  "Priya",
  "Radhika",
  "Siddharth",
  "Anirudh",
  "NaveenKrishna",
  "Maheshwaran",
  "Vikram",
  "Tanu",
  "Shivani",
];
assignHouse(students);
assignHouse_2(students);
