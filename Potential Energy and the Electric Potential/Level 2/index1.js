/*
    Two charges are set on the x-axis 15.1 cm away from each other. 
    The charges are 17.4 nC and -4.60 nC. 
    Calculate the electric field at the point on the x-axis between the charges where the electric potential due to these two charges is zero.
*/

let k = 8.99 * 10 ** 9 
let d = 15.1 * 10 ** -2 // m
let q1 = 17.4 * 10 ** -9 // C
let q2 = -4.60 * 10 ** -9 // C

// let k = 8.99 * 10 ** 9 
// let d = 13.1 * 10 ** -2 // m
// let q1 = -9.40 * 10 ** -9 // C
// let q2 = 23.4 * 10 ** -9 // C

// V = 0
// V = V1 + V2
// V = (k * q) / r
// r = d - r2

// let V1 = (k * q) / r
// let V2 = (k * q) / (d - r2)

// But note: You are not looking for V but for r so rearrange
// So,

r = (Math.abs(q1/q2) * d) / (1 + Math.abs(q1/q2))

// Sub for electric field
// E = (k * q) / (r ** 2)
// E = E1 = E2

let E1 = (k * q1) / ((r ** 2))
let E2 = (k * -q2) / (((d - r) ** 2))

let E  = E1 + E2

console.log(E.toExponential())