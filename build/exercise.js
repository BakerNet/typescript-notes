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
console.log(myCar.acceleration); // 0
myCar.accelerate(6);
console.log(myCar.acceleration); //6
myCar.accelerate(3);
console.log(myCar.acceleration); //9
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
console.log(rectangle.width); //5
console.log(rectangle.length); //2
console.log(rectangle.calcSize()); // 10
class ExercisePerson {
    constructor() {
        this._firstName = '';
    }
    get firstName() {
        return this._firstName;
    }
    set firstName(name) {
        if (name.length > 3) {
            this._firstName = name;
        }
    }
}
let exercisePerson = new ExercisePerson();
console.log(exercisePerson.firstName); //""
exercisePerson.firstName = "Ma";
console.log(exercisePerson.firstName); // ""
exercisePerson.firstName = "Maximilian";
console.log(exercisePerson.firstName); // "Maximilian"
