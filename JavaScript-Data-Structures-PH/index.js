//
// const course1 = { name: "Programming Hero" };
// const course2 = { name: "Data Structures" };
// const course3 = { name: "Algorithms" };

// const map = new Map();

// map.set(course1, { courserId: 1, courseName: "Programming Hero" });
// map.set(course2, { courserId: 2, courseName: "Data Structures" });
// map.set(course3, { courserId: 3, courseName: "Algorithms" });

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

// const products = [
//   {
//     id: 1,
//     name: "Apple iPhone 15",
//     price: 999,
//     category: "Electronics",
//   },
//   {
//     id: 2,
//     name: "Nike Air Max 270",
//     price: 150,
//     category: "Footwear",
//   },
//   {
//     id: 3,
//     name: "Samsung QLED TV 55-inch",
//     price: 1200,
//     category: "Electronics",
//   },
//   {
//     id: 4,
//     name: "Levi’s Denim Jacket",
//     price: 89,
//     category: "Clothing",
//   },
//   {
//     id: 5,
//     name: "The Alchemist (Book)",
//     price: 15,
//     category: "Books",
//   },
//   {
//     id: 6,
//     name: "Sony WH-1000XM5 Headphones",
//     price: 399,
//     category: "Electronics",
//   },
//   {
//     id: 7,
//     name: "Adidas Ultraboost",
//     price: 180,
//     category: "Footwear",
//   },
//   {
//     id: 8,
//     name: "Instant Pot Duo 7-in-1",
//     price: 110,
//     category: "Home Appliances",
//   },
//   {
//     id: 9,
//     name: "Casio G-Shock Watch",
//     price: 120,
//     category: "Accessories",
//   },
//   {
//     id: 10,
//     name: "Apple MacBook Air M3",
//     price: 1299,
//     category: "Computers",
//   },
// ];

// const topElectronics = products
//   .filter((product) => product.category === "Electronics")
//   .sort((a, b) => a.price - b.price)
//   .slice(0, 3)
//   .map((product) => ({ name: product.name, price: product.price }));

// console.log("Top Electronics", topElectronics);

// const newProducts = ["apple", "banana", "mango", "apple", "orange"];

// const uniqueProducts = [...new Set(newProducts)];

// console.log(uniqueProducts);

// const range = (start, end, step) =>
//   Array.from(
//     { length: Math.ceil((end - start) / step + 1) },
//     (_, i) => start + i * step
//   );

// console.log(range(1, 10, 2));

// const products = [
//   { id: 1, name: "Apple iPhone 15", quantity: 10, price: 999 },
//   { id: 2, name: "Nike Air Max 270", quantity: 25, price: 150 },
//   { id: 3, name: "Sony WH-1000XM5", quantity: 15, price: 399 },
//   { id: 4, name: "Levi’s Denim Jacket", quantity: 30, price: 89 },
//   { id: 5, name: "Instant Pot Duo 7-in-1", quantity: 20, price: 110 },
// ];

// const subTotal = products.reduce((acc, product) => {
//   return acc + product.price * product.quantity;
// }, 0);

// console.log(subTotal);

// const players = [
//   { name: "Lionel Messi", goals: 32 },
//   { name: "Cristiano Ronaldo", goals: 28 },
//   { name: "Kylian Mbappé", goals: 35 },
//   { name: "Erling Haaland", goals: 41 },
//   { name: "Neymar Jr", goals: 18 },
// ];

// const bestPlayer = players.reduce((acc, player) => {
//   return acc.goals > player.goals ? acc : player;
// }, players[0]);

// console.log(bestPlayer);

// const books = [
//   { id: "i-1", title: "The Alchemist", author: "Paulo Coelho" },
//   { id: "i-2", title: "To Kill a Mockingbird", author: "Harper Lee" },
//   { id: "i-3", title: "1984", author: "George Orwell" },
//   { id: "i-4", title: "The Great Gatsby", author: "F. Scott Fitzgerald" },
//   { id: "i-5", title: "Atomic Habits", author: "James Clear" },
// ];

// const bookLookup = books.reduce((acc, book) => {
//   acc[book.id] = book;
//   return acc;
// }, {});
// console.log(bookLookup);

// console.log(bookLookup['i-4']);

// const surveyResponse = [
//   'A',        // 1 time
//   'B', 'B',   // 2 times
//   'C', 'C', 'C', 'C', 'C', // 5 times
//   'D',        // 1 time
//   'E', 'E',   // 2 times
//   'F'         // 1 time
// ];

// const countResponses = surveyResponse.reduce((acc, response) => {
//   acc[response] = (acc[response] || 0) + 1;
//   return acc;
// }, {});
// console.log(countResponses);

// const products = [
 
//   { category: "Footwear", item: "Nike Air Max 270", price: 150, quantity: 25 },
//   {
//     category: "Electronics",
//     item: "Sony WH-1000XM5 Headphones",
//     price: 399,
//     quantity: 15,
//   },
//   {
//     category: "Clothing",
//     item: "Levi’s Denim Jacket",
//     price: 89,
//     quantity: 30,
//   },
//   {
//     category: "HomeAppliances",
//     item: "Instant Pot Duo 7-in-1",
//     price: 110,
//     quantity: 20,
//   },
// ];

// const revenue = products.reduce((acc, product) => {
//   const { category, price, quantity } = product;

//   if (!acc[category]) {
//     acc[category] = {
//       totalRevenue: 0,
//       totalQuantity: 0,
//     };
//   }

//   acc[category].totalRevenue += price * quantity;
//   acc[category].totalQuantity += quantity;

//   return acc;
// }, {});

// console.log(revenue);
