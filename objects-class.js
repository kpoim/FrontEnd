class Account{
    constructor(name = "John Doe", initialBalance = 0){
        this.name = name;
        this.balance = initialBalance;
    }

    showBalance(){
        document.write(
            `<p>Balance: ${this.balance}&euro;</p>`
        );
    }

    withdraw(amount) {
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
    }

    deposit(amount) {
        let message;
        if (amount <= 0) {
            message = `This doesn't make sense.`;
        } else {
            this.balance += amount;
            message = `Deposited ${amount}&euro;.<br>New balance is ${this.balance}&euro;.`;
        }
        document.write(`<p>${message}</p>`);
    }

    transfer(amount, accountNum){
        if(amount<=this.balance){
            this.balance -= amount;
            console.log(`Sending to ${accountNum}`);
        }
    }
}

