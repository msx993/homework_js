// const user = {
//   name: "John",
//   age: 20,
//   hobby: "reading",
//   premium: true
// };
// user.mood = "happy";
// user.hobby = "skydiving";
// user.premium = false;

// for (const key of Object.keys(user)) {
//   console.log(`${key}: ${user[key]}`);
// }


// function countProps(obj) {
//   return Object.keys(obj).length;
// }

// console.log(countProps({ a: 1, b: 2, c: 3 })); 


// function countTotalSalary(employees) {
//   let total = 0;

//   for (const salary of Object.values(employees)) {
//     total += salary;
//   }

//   return total;
// }


// console.log(countTotalSalary({
//   John: 1000,
//   Mike: 2000,
//   Anna: 1500
// }));


// function getAllPropValues(arr, prop) {
//   const result = [];

//   for (const obj of arr) {
//     if (prop in obj) {
//       result.push(obj[prop]);
//     }
//   }

//   return result;
// }


// const products = [
//   { name: "apple", price: 30 },
//   { name: "banana", price: 20 },
//   { name: "orange", price: 25 }
// ];

// console.log(getAllPropValues(products, "name")); 
