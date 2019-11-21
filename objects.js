"use strict";

const accountOne = {
    name: "John Doe",
    balance: 1000,
    showBalance: function () {
        document.write(
            `<p>Balance: ${this.balance}&euro;</p>`
        );
    },
    withdraw: function (amount) {
        let message;
        if (amount <= 0) {
            message = `This doesn't make sense.`;
        } else if (amount >= this.balance) {
            message = "Insufficient funds."
        } else {
            this.balance -= amount;
            message = `Withdrew ${amount}&euro;.<br>New balance is ${this.balance}&euro;.`;
        }
        document.write(`<p>${message}</p>`);
    },
    deposit: function (amount) {
        let message;
        if (amount <= 0) {
            message = `This doesn't make sense.`;
        } else {
            this.balance += amount;
            message = `Deposited ${amount}&euro;.<br>New balance is ${this.balance}&euro;.`;
        }
        document.write(`<p>${message}</p>`);
    }
};

accountOne.showBalance();
accountOne.withdraw(50);
accountOne.deposit(120);



function Account(name = "John Doe", initialAmount = 0) {
    if(!initialAmount || !(initialAmount instanceof Number)){
        initialAmount = 0;
    }
    if(!name){
        name = "Unknown";
    }
    this.name = name;
    this.balance = initialAmount;
}

Account.prototype.showBalance = function() {
    document.write(
        `<p>Balance: ${this.balance}&euro;</p>`
    );
};

Account.prototype.deposit = function(amount) {
    let message;
    if(!amount || !(amount instanceof Number)){
        amount = 0;
    }
    if (amount <= 0) {
        message = `This doesn't make sense.`;
    } else {
        this.balance += amount;
        message = `Deposited ${amount}&euro;.<br>New balance is ${this.balance}&euro;.`;
    }
    document.write(`<p>${message}</p>`);
};

Account.prototype.withdraw = function(amount) {
    let message;
    if(!amount || !(amount instanceof Number)){
        amount = 0;
    }
    if (amount <= 0) {
        message = `This doesn't make sense.`;
    } else if (amount >= this.balance) {
        message = "Insufficient funds."
    } else {
        this.balance -= amount;
        message = `Withdrew ${amount}&euro;.<br>New balance is ${this.balance}&euro;.`;
    }
    document.write(`<p>${message}</p>`);
};

const accountTwo = new Account("kPoim", 100);

console.log(accountTwo);