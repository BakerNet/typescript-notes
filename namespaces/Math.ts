/**
 * NAMESPACES - contain code to prevent issues with interference from different code.
 */

/* import namespace from files using tripple slash reference path below: */
/// <reference path="circleMath.ts"/>
/// <reference path="rectangleMath.ts"/>

const PI = 3.145;

console.log(MyMath.calculateCircumference(5));
console.log(MyMath.calculateRectangle(3, 4));
//console.log(MyMath.PI); // error - not exported
console.log(PI);

// NOTE:  You can next namespaces by exporting child namespace from parent namespace

//can use import keyword after reference path to give alias to a child namespace.  Example: import CircleMath = MyMath.Circle

/**
 * LIMITS OF NAMESPACES:  Hard to see which files have which files have which dependencies.
 *  Good tool for small application, but Modules are almost always preferable.
 */