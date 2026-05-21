
// const Transaction = {
//   DEPOSIT: 'deposit',
//   WITHDRAW: 'withdraw',
// };

// /*
//  * Кожна транзакція - це об'єкт з властивостями: id, type і amount
//  */
// const account = {
//   // Поточний баланс рахунку
//   balance: 0,

//   // Історія транзакцій
//   transactions: [],

//   /*
//    * Метод створює і повертає об'єкт транзакції.
//    * Приймає суму і тип транзакції.
//    */
//   createTransaction(amount, type) {
//     return {
//       id: this.transactions.length + 1,
//       type,
//       amount,
//     };
//   },

//   /*
//    * Метод відповідає за додавання суми до балансу.
//    */
//   deposit(amount) {
//     this.balance += amount;

//     const transaction = this.createTransaction(
//       amount,
//       Transaction.DEPOSIT
//     );

//     this.transactions.push(transaction);
//   },

//   /*
//    * Метод відповідає за зняття суми з балансу.
//    */
//   withdraw(amount) {
//     if (amount > this.balance) {
//       console.log('Недостатньо коштів');
//       return;
//     }

//     this.balance -= amount;

//     const transaction = this.createTransaction(
//       amount,
//       Transaction.WITHDRAW
//     );

//     this.transactions.push(transaction);
//   },

//   /*
//    * Метод повертає поточний баланс
//    */
//   getBalance() {
//     return this.balance;
//   },

//   /*
//    * Метод шукає і повертає об'єкт транзакції по id
//    */
//   getTransactionDetails(id) {
//     for (const transaction of this.transactions) {
//       if (transaction.id === id) {
//         return transaction;
//       }
//     }
//   },

//   /*
//    * Метод повертає кількість коштів
//    * певного типу транзакції
//    */
//   getTransactionTotal(type) {
//     let total = 0;

//     for (const transaction of this.transactions) {
//       if (transaction.type === type) {
//         total += transaction.amount;
//       }
//     }

//     return total;
//   },
// };

// account.deposit(1000);
// account.deposit(500);
// account.withdraw(300);

// console.log(account.getBalance()); // 1200

// console.log(account.getTransactionDetails(2));
// // { id: 2, type: 'deposit', amount: 500 }

// console.log(account.getTransactionTotal(Transaction.DEPOSIT)); // 1500

// console.log(account.getTransactionTotal(Transaction.WITHDRAW)); // 300