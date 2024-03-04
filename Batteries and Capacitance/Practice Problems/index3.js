/*
    (Knight Problem 26.23) You need to construct a 100 pF ca-
    pacitor for a science project. You plan to cut two L×L metal
    squares and insert small spacers between their corners. The
    thinnest spacers you have are 0.20 mm thick. What is the
    proper value of L? [Answer: 4.8 cm.]
*/

let C = 1 * 10 ** -10 // F
let e0 = 8.85 * 10 ** -12
let d = 0.20 * 10 ** -5 // m
// A = ?

let A = Math.sqrt(C * d / e0)

console.log(A)