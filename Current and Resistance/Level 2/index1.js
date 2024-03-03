/*
    A wire has a resistance of 1.40 Ω, a radius of 0.370 mm and a length of 6.00 m and we want to find out what material it is made out of. 
    One way to do this is to calculate the resistivity of the material. Calculate the resistivity of the material used for this wire.
*/

let R = 1.40;
let r = 0.370 * 10 ** -3;
let L = 6;

let A = Math.PI * (r ** 2)

// R = pL / A
// p = ?
// p = R * A / L

let p = R * A / L

console.log(p)