/**
    A proton is fired at 2.18×107 m/s toward a mercury atom from far away. 
    Mercury has a diameter of 14.0 fm and is element number 80. 
    What is the closest distance the proton will get to the surface of the mercury atom?
*/


let k = 8.99 * 10 ** 9
let v = 2.18 * 10 ** 7 // m/s
let d = 7
let m = 1.67 * 10 ** -27
let qe = 1.6 * 10 ** -19
let q = 80 * qe

// U = qV
// U = (k * q1 * q2) / r
// Ek = (1/2) * m * v ** 2
// U = Ek

r = ((2 * k * q * qe) / (m * v ** 2)) * 10 ** 15
d -= Math.abs(r)

console.log(Math.abs(d))