namespace MyMath{
    const PI = 3.14; // not exported = not accessible outside namespace.

    export function calculateCircumference(diameter: number): number{
        return diameter * PI;
    }
}