/*
    Given the values below, calculate the potential energy of the group of charges shown.
    x = 8.10 cm
    y = 3.40 cm
    q1 = 3.80 nC
    q2 = -3.2 nC
    q3 = 7.70 nC
*/

let k = 8.99 * 10 ** 9
let q1 = 3.80 * 10 ** -9 // C
let q2 = -3.2 * 10 ** -9 // C
let q3 = 7.70 * 10 ** -9 // C
// \U = ? Eletric Potential
// U = (k * q1 * q2) / r
// U = U12 + U13 + U23

let x = 8.10 * 10 ** -2 // m
let y = 3.40 * 10 ** -2 // m
let xy = Math.sqrt(x ** 2 + y ** 2)

let U12 = (k * q1 * q2) / y
let U13 = (k * q1 * q3) / x
let U23 = (k * q2 * q3) / xy
let U = U12 + U13 + U23

console.log(U.toExponential())