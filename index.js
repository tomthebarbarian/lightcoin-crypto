let balance = 500.00;


class Transaction {

  constructor(amount, account) {
    this.amount  = amount;
    this.account = account;
  }

  commit() {
    // this.account.balance += this.value;
    this.time = new Date();
    // Add the transaction to the account
    if (this.isAllowed()) {
      this.account.addTransaction(this);
    }
  }

}
class Withdrawal extends Transaction {
  get value() {
    return this.amount * -1;
  }
  isAllowed() {
    // console.log('Balance ',this.account.balance);
    // console.log('value: ', this.value);
    if (this.account.balance + this.value < 0) {
      return false;
    }
    return true;
  }
}

class Deposit extends Transaction {
  get value() {
    return this.amount;
  }
  isAllowed() {
    return true;
  }
}

class Account {

  constructor(username) {
    this._username = username;
    // Have the account balance start at $0 since that makes more sense.
    // this._balance = 0;
    this.transactions = [];
  }
  get balance() {
    let ans = 0;
    this.transactions.forEach((elem) => {
      ans += elem.value;
    });
    return ans;
  }
  // get balance() {
  //   // return
  //   return this._balance;
  // }

  // set balance(value) {
  //   this._balance = value;
  // }

  addTransaction(transaction) {
    this.transactions.push(transaction);
  }


  // get username() {
  //   return this._username;
  // }

}
// DRIVER CODE BELOW
// We use the code below to "drive" the application logic above and make sure it's working as expected
const myAccount = new Account("snow-patrol");
let t3 = new Deposit(120.00, myAccount);
t3.commit();
// console.log('Transaction 3:', t3);

// let t1 = new Withdrawal(50.25,myAccount);
// t1.commit();
// console.log('Transaction 1:', t1);

// let t2 = new Withdrawal(9.99, myAccount);
// t2.commit();
// console.log('Transaction 2:', t2);

let t9 = new Withdrawal(100000, myAccount);
t9.commit();
// console.log('Overdraw:', t9);


console.log('Balance:', myAccount.balance);

