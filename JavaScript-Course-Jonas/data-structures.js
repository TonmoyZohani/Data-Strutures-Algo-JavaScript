// Destructure Arrays
// const names = ["Tonmoy", "Taharim", "Inan", "Silmun", ["Riyasat", "Rudro"]];

// const [first, second, ...restBros] = names;
// const [father, , , , [son1, son2]] = names;

// // console.log("First -", first);
// console.log("Rest Bros", restBros);
// console.log("Sons", son1, son2);

// Destructure Objects

const employee = {
  id: 1,
  info: {
    name: "Jane",
    position: "Developer",
  },
  age: "28",
  room: 208,
};

const { info } = employee;
const { id, ...rest } = employee;

// console.log("Info", info);
// console.log("Rest", rest);

const student = { name: "Tonmoy", age: 28, id: 1 };

const { name: perName } = student;

console.log(perName);
