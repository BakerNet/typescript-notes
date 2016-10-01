type BankAccount = {
    money: number,
    deposit: (value: number) => void
}

type BankCustomer = {
    name: string,
    bankAccount: BankAccount,
    hobbies: string[]
}

let bankAccount: BankAccount = {
    money: 2000,
    deposit(value: number): void{
        this.money += value;
    }
}

let myself = {
    name: "Hans",
    bankAccount: bankAccount,
    hobbies: ["Yoyo", "Video games"]
}

myself.bankAccount.deposit(3000);

console.log(myself);