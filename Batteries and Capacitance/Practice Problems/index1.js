/* 
(Knight Problem 26.17) How much work does the charge
escalator do to move 1.0 μC of charge from the negative ter-minal to the positive terminal of a 1.5 V battery? [Answer:1.5 × 10−6 J.]
*/


let q = 1.0 * 10 ** -6 // C
let v = 1.5 // V
// let w = ?

let w = q * v

console.log(w.toExponential())