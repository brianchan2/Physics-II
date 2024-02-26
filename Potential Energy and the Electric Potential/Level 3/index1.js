/*
    What is the electric potential at the point on the axis which is at z = 3.20 m. 
    The length of the rod is L = 1.00 m and the charge on the rod is Q = 5.40 nC.
*/

let L = 1.70 // m
let Q = 5.70 * 10 ** -9 // C
let z = 3.10 // m
let k = 8.99 * 10 ** 9
let integral = (Math.log(L/2 + Math.sqrt((L/2)** 2 + z ** 2)) - Math.log(-L/2 + Math.sqrt((L/2) ** 2 + z ** 2)))

let V = k * (Q / L) * integral
console.log(V)