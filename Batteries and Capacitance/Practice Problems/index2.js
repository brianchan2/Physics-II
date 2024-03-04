/*
    Knight Problem 26.21) Two 3.0-cm-diameter aluminum
    electrodes are spaced 0.50 mm apart. The electrodes are
    connected to a 100 V battery.
    a. What is the capacitance? [Answer: 13 pF.]
    b. What is the magnitude of the charge on each electrode?
    [Answer: 1.3 nC.]
*/

let d = 0.50 * 10 ** -3 // m
let v = 100 // V
let e0 = 8.85 * 10 ** -12
let A = (3.0 / 2 * 10 ** -2) ** 2

let c = e0 * Math.PI * A / d

console.log(c, "F")


// b.

let q = c * v
console.log(q, "C")