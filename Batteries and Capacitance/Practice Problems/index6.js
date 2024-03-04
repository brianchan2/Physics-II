/**
 *  Knight Problem 26.53) Two 2.0 cm × 2.0 cm metal elec-
    trodes are spaced 1.0 mm apart and connected by wires to
    the terminals of a 9.0 V battery.
    a. What are the charge on each electrode and the potential
    difference between them? [Answer: ±3.2 × 10−11 C, 9.0 V.]
    The wires are disconnected, and insulated handles are used
    to pull the plates apart to a new spacing of 2.0 mm.
    b. What are the charge on each electrode and the potential
    difference between them? [Answer: ±3.2 × 10−11 C, 18 V.
 */

let e0 = 8.85 * 10 ** -12
let a = 0.02 ** 2
let d = 0.001
let c = e0 * a /d
let v = 9
let q = c * v

console.log(q + " C", v + "V")

// b.

d = 0.002
c = e0 * a /d
q = c * v

console.log(q + " C", v + "V")
