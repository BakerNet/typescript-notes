"use strict";
exports.PI = 3.14;
function calculateCircumference(diameter) {
    return diameter * exports.PI;
}
exports.calculateCircumference = calculateCircumference;
