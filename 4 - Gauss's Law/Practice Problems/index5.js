/* 
    Knight 24.33) A 10 nC charge is at the center of a 2.0 m ×
    2.0 m × 2.0 m cube. What is the electric flux through the
    top surface of the cube?
*/

let e_0 = 8.85 * 10 ** -12 //eletric constant
let q = 10 * 10 ** -9 // C

console.log((q / (6 * e_0)).toExponential()) // Divide by 6 because we only are about the surface of the cube not all 6 sides