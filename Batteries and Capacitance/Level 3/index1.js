// Given the values of the capacitors below, what is the charge on capacitor C3?
// C1 = 15.0 μF
// C2 = 2.20 μF
// C3 = 12.7 μF

let c1 = 15.0
let c2 = 2.20
let c3 = 12.7 
let v = 9

let c23 = Math.pow((1/c2 + 1/c3), -1)
let q23 = c23 * v

let v3 = q23 / c3
let q3 = c3 * v3

console.log(q3 ** -6) // Charge is the same, voltage is not