/*
    The thin rod shown below has been bent into a perfect semicircle with radius R = 14.9 cm. 
    It carries a total charge of Q = 2.80 nC. 
    What is the electric potential at the center of the semicircle?
*/
let k = 8.99 * 10 ** 9
let r = 14.9 * 10 ** -2 // m
let q = 2.80 * 10 ** -9 // C

// V = ?
// V = k * q / r
// Note: Direction does not matter in electric potential
let V = (k * q) / r

console.log(V)