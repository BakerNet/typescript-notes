let bankAccount = {
    money: 2000,
    deposit(value) {
        this.money += value;
    }
};
let myself = {
    name: "Hans",
    bankAccount: bankAccount,
    hobbies: ["Yoyo", "Video games"]
};
myself.bankAccount.deposit(3000);
console.log(myself);
