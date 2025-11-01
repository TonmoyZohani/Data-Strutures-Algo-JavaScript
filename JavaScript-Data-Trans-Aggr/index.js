//
const course1 = { name: "Programming Hero" };
const course2 = { name: "Data Structures" };
const course3 = { name: "Algorithms" };

const map = new Map();

map.set(course1, { courserId: 1, courseName: "Programming Hero" });
map.set(course2, { courserId: 2, courseName: "Data Structures" });
map.set(course3, { courserId: 3, courseName: "Algorithms" });

console.log(map);
