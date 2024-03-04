/*
    Knight Problem 26.57) What are the charge on and the po-
    tential difference across each capacitor in FIGURE P26.57?
    [Answer: Q1 = 4 μC, ∆V1 = 1.0 V; Q2 = 12 μC, ∆V2 = 1.0
    V; Q3 = 16 μC, ∆V3 = 8 V.]
*/


let c1 = 4 * 10 ** -6 // F
let c2 = 12 * 10 ** -6 // F
let c3 = 2 * 10 ** -6 // F

let V = 9

let c12 = c1 + c2
let c123 = (c12 ** -1 + c3 ** -1) ** -1

console.log(c123.toExponential())

let q3 = c123 * 9
let v3 = q3/c3

let v2 = 9 - v3
let q2 = c2 * v2
let q1 = c1 * v2

console.log(q1 + "C", q2 + "C", q3 + "C", v2 + "V", v2 + "V", v3 + "V")