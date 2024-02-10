let k = 8.99 * 10 ** 9
let v = 2.18 * 10 ** 7 // m/s
let d = 7
let m = 1.67 * 10 ** -27
let qe = 1.6 * 10 ** -19
let q = 80 * qe

// U = qV
// U = (k * q1 * q2) / r
// Ek = (1/2) * m * v ** 2

r = ((2 * k * q * qe) / (m * v ** 2)) * 10 ** 15
d -= Math.abs(r)

console.log(Math.abs(d))