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
/**
 * CLASSES
 */
class Car {
    constructor(name) {
        this.name = name;
        this.acceleration = 0;
    }
    honk() {
        console.log("Tooooot!");
    }
    accelerate(speed) {
        this.acceleration += speed;
    }
}
let myCar = new Car("Yaris");
console.log(myCar.acceleration);
myCar.accelerate(5);
console.log(myCar.acceleration);
class baseObject {
    constructor() {
        this.width = 0;
        this.length = 0;
    }
}
class Rectangle extends baseObject {
    constructor(width, length) {
        super();
        this.width = width;
        this.length = length;
    }
    calcSize() {
        return this.width * this.length;
    }
}
let rectangle = new Rectangle(5, 2);
console.log(rectangle.width);
console.log(rectangle.length);
console.log(rectangle.calcSize());
class ExercisePerson {
    constructor() {
        this._firstName = '';
    }
    get firstName() {
        return this._firstName;
    }
    set firstName(name) {
        this._firstName = name;
    }
}
let exercisePerson = new ExercisePerson();
console.log(exercisePerson.firstName);
exercisePerson.firstName = "Ma";
console.log(exercisePerson.firstName);
exercisePerson.firstName = "Maximilian";
console.log(exercisePerson.firstName);
