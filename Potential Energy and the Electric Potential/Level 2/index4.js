/*
    Given the values below, calculate the potential energy of the group of charges shown.
    d = 6.50 cm
    q1 = 2.00 nC
    q2 = -5.6 nC
    q3 = 3.30 nC
*/

let k = 8.99 * 10 ** 9
let q1 = 2.00 * 10 ** -9 // C
let q2 = -5.60 * 10 ** -9 // C
let q3 = 3.30 * 10 ** -9 // C
// \U = ? Eletric Potential
// U = (k * q1 * q2) / r
// U = U12 + U13 + U23

let d = 6.50 * 10 ** -2

let U12 = (k * q1 * q2) / d
let U13 = (k * q1 * q3) / d
let U23 = (k * q2 * q3) / d
let U = U12 + U13 + U23

console.log(U.toExponential())