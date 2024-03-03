/*
    What is the value of R3?
    R1 = 12.0 Ω, R2 = 15.0 Ω, ΔV = 7.50 V and I = 175 mA.
    In series
*/

let r1 = 8.0
let r2 = 11.0
let v = 9.00
let I = 279 * 10 ** -3

let rtotal = v / I

let r3 = rtotal - (r1 + r2)

console.log(r3)