// Напиши скрипт управления личным кабинетом интернет банка.
// Есть объект account в котором необходимо реализовать методы для работы с балансом и историей транзакций.
let id = 0;

const getId = () => {
  return id++;
}
/*
 * Типов транзацкий всего два.
 * Можно положить либо снять деньги со счета.
 */
const transaction = {
  DEPOSIT: 'deposit',
  WITHDRAW: 'withdraw',
};

/*
 * Каждая транзакция это объект со свойствами: id, type и amount
 */

const account = {
  // Текущий баланс счета
  balance: 0,

  // История транзакций
  transactions: [],

  /*
   * Метод создает и возвращает объект транзакции.
   * Принимает сумму и тип транзакции.
   */
  createTransaction(amount, type) {
    return {
      id: getId(),
      amount,
      type,
    }
  },

  /*
   * Метод отвечающий за добавление суммы к балансу.
   * Принимает сумму танзакции.
   * Вызывает createTransaction для создания объекта транзакции
   * после чего добавляет его в историю транзакций
   */
  deposit(amount) {
    if (typeof amount !== 'number' || amount <= 0) {
      console.log('Wrong amount!');
      return;
    }
   
    const transactionObj = this.createTransaction(amount, transaction.DEPOSIT);
    this.transactions.push(transactionObj);
    this.balance += amount;
  },

  /*
   * Метод отвечающий за снятие суммы с баланса.
   * Принимает сумму танзакции.
   * Вызывает createTransaction для создания объекта транзакции
   * после чего добавляет его в историю транзакций.
   *
   * Если amount больше чем текущий баланс, выводи сообщение
   * о том, что снятие такой суммы не возможно, недостаточно средств.
   */
  withdraw(amount) {
    if (typeof amount !== 'number' || amount <= 0) {
      console.log('Wrong amount!');
      return;
    }

    if (typeof amount > this.balance) {
      console.log('Cнятие такой суммы не возможно, недостаточно средств');
      return;
    }

    const transactionObj = this.createTransaction(amount, transaction.WITHDRAW);
    this.transactions.push(transactionObj);
    this.balance -= amount;
  },

  /*
   * Метод возвращает текущий баланс
   */
  getBalance() {
    return this.balance;
  },

  /*
   * Метод ищет и возвращает объект транзации по id
   */
  getTransactionDetails(id) {
    for (const transactionObj of transactions) {
      if (id !== transactionObj.id) continue;

      return transactionObj;
    }

    return null;
  },

  /*
   * Метод возвращает количество средств
   * определенного типа транзакции из всей истории транзакций
   */
  getTransactionTotal(type) {
    let sum = 0;

    for (const transactionObj of this.transactions) {
      if (type !== transactionObj.type) continue;

      sum += transactionObj.amount;
    }
    
    return sum;
  },
};

console.log(account.getBalance());
console.log(account.deposit(100));
console.log(account.deposit(100));
console.log(account.deposit(100));
console.log(account.deposit(100));
console.log(account.deposit(100));
console.log(account.getBalance());
console.log(account.withdraw(100));
console.log(account.withdraw(100));
console.log(account.withdraw(100));
console.log(account.withdraw(100));
console.log(account.getBalance());
console.log(account.getTransactionTotal(transaction.WITHDRAW));
console.log(account.transactions);