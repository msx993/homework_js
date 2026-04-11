// const friends = ['mango', 'poly', 'kiwi', 'ajax'];
// let string = friends.join(',')
// console.log(string);


const cards = [
"card-1",
"card-2",
"card-3",
"card-4",
"card-5",
];

const cardToRemove = cards.splice(2, 1)
const cardToInsert = cards.splice(5, 0, 'card-6')
console.log(cardToRemove);
