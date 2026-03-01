let students = [
  { id: 1, name: "Nguyen Van An", age: 20, gpa: 8.5, status: "active" },
  { id: 2, name: "Tran Thi Bich", age: 17, gpa: 7.2, status: "active" },
  { id: 3, name: "Le Hoang Cuong", age: 22, gpa: 9.1, status: "inactive" },
  { id: 4, name: "Pham Thi Dung", age: 19, gpa: 6.8, status: "active" },
];

let nextId = 5;

const showMenu = () => {
  return prompt(
`===== MENU =====
1. Add student
2. Show all students
3. Scholarship students
4. Update student
5. Delete student
6. Statistics
0. Exit`
  );
};

const showStudent = (s) => {
  return "ID: " + s.id +
         " | Name: " + s.name +
         " | Age: " + s.age +
         " | GPA: " + s.gpa +
         " | Status: " + s.status;
};

const addStudent = () => {

  let name = prompt("Enter name:");

  if (name == "" || name == null) {
    alert("Invalid name");
    return;
  }

  let age = parseInt(prompt("Enter age:"));

  if (isNaN(age)) {
    alert("Invalid age");
    return;
  }

  let gpa = parseFloat(prompt("Enter GPA:"));

  if (isNaN(gpa)) {
    alert("Invalid GPA");
    return;
  }

  let status = prompt("Enter status:");

  let student = {
    id: nextId,
    name: name,
    age: age,
    gpa: gpa,
    status: status
  };

  nextId++;

  students.push(student);

  alert("Added successfully");
};

const showAll = () => {

  if (students.length == 0) {
    alert("Empty list");
    return;
  }

  let text = "";

  for (let i = 0; i < students.length; i++) {
    text += showStudent(students[i]) + "\n";
  }

  alert(text);
};

const scholarship = () => {

  let text = "";

  for (let i = 0; i < students.length; i++) {

    if (students[i].gpa > 8) {
      text += showStudent(students[i]) + "\n";
    }
  }

  if (text == "")
    alert("No scholarship students");
  else
    alert(text);
};

const updateStudent = () => {

  let id = parseInt(prompt("Enter ID:"));

  let found = null;

  for (let i = 0; i < students.length; i++) {

    if (students[i].id == id) {
      found = students[i];
      break;
    }
  }

  if (found == null) {
    alert("Not found");
    return;
  }

  let newName = prompt("Enter new name:");

  if (newName != "" && newName != null)
    found.name = newName;

  alert("Updated");
};

const deleteStudent = () => {

  let id = parseInt(prompt("Enter ID:"));

  let index = -1;

  for (let i = 0; i < students.length; i++) {

    if (students[i].id == id) {
      index = i;
      break;
    }
  }

  if (index == -1) {
    alert("Not found");
    return;
  }

  students.splice(index, 1);

  alert("Deleted");
};

const statistics = () => {

  let sum = 0;

  for (let i = 0; i < students.length; i++) {
    sum += students[i].gpa;
  }

  let avg = sum / students.length;

  alert("Average GPA: " + avg);
};

const main = () => {

  let run = true;

  while (run) {

    let choice = showMenu();

    switch (choice) {

      case "1":
        addStudent();
        break;

      case "2":
        showAll();
        break;

      case "3":
        scholarship();
        break;

      case "4":
        updateStudent();
        break;

      case "5":
        deleteStudent();
        break;

      case "6":
        statistics();
        break;

      case "0":
        run = false;
        break;

      default:
        alert("Invalid");
    }
  }
};

main();