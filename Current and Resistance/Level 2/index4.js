/*
    A battery is used in an experiment and is connected by a 80.0 cm long gold wire with a diameter of 0.490 mm. 
    If the battery has a voltage of 1.90 V and the resistivity of the wire is 2.4×10-8 Ω m, what is the current in the wire?
*/

let v = 1.90 // volatge
let p = 2.4 * 10 ** -8 // resistivity
let L = 80 * 10 ** -2 // length
let d = 0.490 * 10 ** -3 // diameter

let r = d / 2
let A = Math.PI * r ** 2

let R = p * L / A
let I = v / R

console.log(I)