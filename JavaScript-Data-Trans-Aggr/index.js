//
const course1 = { name: "Programming Hero" };
const course2 = { name: "Data Structures" };
const course3 = { name: "Algorithms" };

const map = new Map();

map.set(course1, { courserId: 1, courseName: "Programming Hero" });
map.set(course2, { courserId: 2, courseName: "Data Structures" });
map.set(course3, { courserId: 3, courseName: "Algorithms" });

// map.delete(course1);
// map.has(course1);

// console.log(map);
// console.log(map.size);

// map.forEach((value, key) => {
//   console.log("Value:", value);
//   console.log("Key:", key);
// });

// console.log([...map.keys()]);
// console.log([...map.values()]);
// console.log([...map.entries()]);

for (let [key, value] of map) { // key, value
  console.log(key, value);
}

for (let value of map.values()) {
  console.log(value);
}

for (let [key, value] of map.entries()) {
  console.log(key, value);
}
