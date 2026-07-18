const dish1 = "Egusi Soup";
const dish2 = "Jollof Rice";
const dish3 = "Suya Platter";
const dish4 = "Pounded Yam";

const menu = ["Egusi Soup", "Jollof Rice", "Suya Platter", "Pounded Yam"];

console.log(menu);

const studentNames = [
  "Temitope Taiwo", // -> 0
  "Ene Leonard", // -> 1
  "Faruk Kabiawu", // -> 2
  "Jade Morolayo", // -> 3
];

console.log(studentNames);

const evenNumbers = [2, 4, 64, , 8, 10, 12, 14, 16, 18, 20];
console.log(evenNumbers);

const cases = [true, false, false, true, false, true, true, false, true];
console.log(cases);

const groups = [
  1,
  2,
  "Faithful Group",
  4,
  "Supreme",
  6,
  7,
  "Chestain",
  9,
  10,
  undefined,
  null,
  false,
];
console.log(groups);

console.log(groups[4]);

menu.push("Efo Riro"); // push — add to the end:
console.log("menu", menu);

studentNames.pop(); // pop — remove from the end:
console.log("Student names", studentNames);

const studentExists = studentNames.includes("Ene Leonard"); // includes — check if an item exists
console.log("Student exists", studentExists);

const studentIndex = studentNames.indexOf("Jade Morolayo"); // indexOf — find the position of an item
console.log("Student Index", studentIndex);

console.log("Total Students", studentNames.length); // .length — number of items

console.log("=========ARRAY FOR LOOP ============");

//  use when you need the index (position) of each item
// Always start loop counter at 0 to match array indexes
for (let i = 0; i < menu.length; i++) {
  console.log(menu[i]);
}

console.log("==== STUDENT NAMES ====");
// use when you just need the value, cleaner syntax
for (const name of studentNames) {
  console.log(name);
}

const prices = [4500, 6000, 3500, 5500, 10000];

let sum = 0;

for (const price of prices) {
  console.log("Current of sum", sum);
  sum += price;
}

console.log("Total Amount", sum);
