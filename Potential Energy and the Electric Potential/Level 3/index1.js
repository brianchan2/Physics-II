// Finished mastery module did not solve.
// Should be similar formula to 5-3 example but instead of z - y its probably Math.sqrt(z^2 + y^2)

/*
    What is the electric potential at the point on the axis which is at z = 3.20 m. 
    The length of the rod is L = 1.00 m and the charge on the rod is Q = 5.40 nC.
*/

let L = 1.00 // m
let Q = 5.40 * 19 ** -9 // C
let z = 3.20 // m
let k = 8.99 * 10 ** 9

let r = Math.sqrt((L/2 ** 2) + z ** 2)

let E = k * Q / r ** 2
let V = k * (Q / L) * (Math.log(1/((z-L/2))) - Math.log(1/(z + (L/2))))

V = (8.99 * 10**9 * 5.40 * 10**-9 / 1.00 ) * Math.log((1.00 + 3.20 ) / 3.20 )
console.log(V)