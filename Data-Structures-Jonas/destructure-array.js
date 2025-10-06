const names = ["Tonmoy", "Taharim", "Inan", "Silmun", ["Riyasat", "Rudro"]];

const [first, second, ...restBros] = names;
const [father, , , , [son1, son2]] = names;

// console.log("First -", first);
console.log("Rest Bros", restBros);
console.log("Sons", son1, son2);
