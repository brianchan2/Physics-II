/* 
    The electric flux through the surface shown
    in FIGURE EX24.11 is 25 N m2/C. What is the electric field/strength? 
*/

let k = 8.99 * 10 ** 9
let Φ =  25 // N * m ** 2 / C
let a = 10 * 10 ** -2 * 20 * 10 ** -2
let angle = 30

// Φ = E * A  * cos(angle)
// E = Φ / A * cos(angle)

let E = Φ / (a * Math.cos(angle * (Math.PI/180)))
console.log(E.toExponential())