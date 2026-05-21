
// const mango = new User({
//  name: 'Mango',
//  age: 2,
//  followers: 20,
// });

// mango.getInfo(); // User Mango is 2 years old and has 20 followers

// const poly = new User({
//  name: 'Poly',
//  age: 3,
//  followers: 17,
// });

// poly.getInfo(); // User Poly is 3 years old and has 17 followers

// class User {
//     constructor(name, age, followers) {
//         this.name = name
//         this.age = age
//         this.followers = followers
//     }
// }
// const poly = new User('Mango', 2, 20);
// const mango = new User('Poly', 3, 17);
// console.log(poly);


// const storage = new Storage([
//  'Нанітоіди',
//  'Пролонгер',
//  'Залізні жупи',
//  'Антигравітатор',
// ]);

// const items = storage.getItems();
// console.table(items); // [ "Нанітоіди", "Пролонгер", "Залізні жупи", "Антигравітатор" ]

// storage.addItem('Дроїд');
// console.table(storage.items); // [ "Нанітоіди", "Пролонгер", "Залізні жупи", "Антигравітатор", "Дроїд" ]

// storage.removeItem('Пролонгер');
// console.table(storage.items); // [ "Нанітоіди", "Залізні жупи", "Антигравітатор", "Дроїд" ]




// class Storage {
//   constructor(items) {
//     this.items = items;
//   }

//   getItems() {
//     return this.items;
//   }

//   addItem(item) {
//     this.items.push(item);
//   }

//   removeItem(item) {
//     this.items = this.items.filter(el => el !== item);
//   }
// }

// const storage = new Storage([
//   'Нанітоіди',
//   'Пролонгер',
//   'Залізні жупи',
//   'Антигравітатор',
// ]);

// const items = storage.getItems();
// console.table(items);

// storage.addItem('Дроїд');
// console.table(storage.items);

// storage.removeItem('Пролонгер');
// console.table(storage.items);