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

// for (let [key, value] of map) { // key, value
//   console.log(key, value);
// }

// for (let value of map.values()) {
//   console.log(value);
// }

// for (let [key, value] of map.entries()) {
//   console.log(key, value);
// }

const products = [
  {
    id: 1,
    name: "Apple iPhone 15",
    price: 999,
    category: "Electronics",
  },
  {
    id: 2,
    name: "Nike Air Max 270",
    price: 150,
    category: "Footwear",
  },
  {
    id: 3,
    name: "Samsung QLED TV 55-inch",
    price: 1200,
    category: "Electronics",
  },
  {
    id: 4,
    name: "Levi’s Denim Jacket",
    price: 89,
    category: "Clothing",
  },
  {
    id: 5,
    name: "The Alchemist (Book)",
    price: 15,
    category: "Books",
  },
  {
    id: 6,
    name: "Sony WH-1000XM5 Headphones",
    price: 399,
    category: "Electronics",
  },
  {
    id: 7,
    name: "Adidas Ultraboost",
    price: 180,
    category: "Footwear",
  },
  {
    id: 8,
    name: "Instant Pot Duo 7-in-1",
    price: 110,
    category: "Home Appliances",
  },
  {
    id: 9,
    name: "Casio G-Shock Watch",
    price: 120,
    category: "Accessories",
  },
  {
    id: 10,
    name: "Apple MacBook Air M3",
    price: 1299,
    category: "Computers",
  },
];

const topElectronics = products
  .filter((product) => product.category === "Electronics")
  .sort((a, b) => a.price - b.price)
  .slice(0, 3)
  .map((product) => ({ name: product.name, price: product.price }));

// console.log("Top Electronics", topElectronics);

const newProducts = ["apple", "banana", "mango", "apple", "orange"];

const uniqueProducts = [...new Set(newProducts)];

console.log(uniqueProducts);
