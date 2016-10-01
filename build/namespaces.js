var MyMath;
(function (MyMath) {
    const PI = 3.14; // not exported = not accessible outside namespace.
    function calculateCircumference(diameter) {
        return diameter * PI;
    }
    MyMath.calculateCircumference = calculateCircumference;
})(MyMath || (MyMath = {}));
var MyMath;
(function (MyMath) {
    function calculateRectangle(width, length) {
        return width * length;
    }
    MyMath.calculateRectangle = calculateRectangle;
})(MyMath || (MyMath = {}));
/**
 * NAMESPACES - contain code to prevent issues with interference from different code.
 */
/// <reference path="circleMath.ts"/>
/// <reference path="rectangleMath.ts"/>
const PI = 3.145;
console.log(MyMath.calculateCircumference(5));
console.log(MyMath.calculateRectangle(3, 4));
//console.log(MyMath.PI); // error - not exported
console.log(PI);
