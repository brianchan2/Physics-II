// An electron is launched from the surface of a charged sphere of diameter 7.30 cm. 
// If the sphere has been charged to 4.70 nC what is the escape velocity of the electron?

let q = 1.90 * 10**-9 // C
let r = (8.80 / 2) * 10**-2 // m
let k = 8.99 * 10 ** 9
let m = 9.11 * 10 ** -31 // kg
let qe = 1.6 * 10 ** -19
// v = ?


// Eki + Epi = Ekf + Epf
// Assume velocity is zero initially
// Ek = 1/2 * m * v ** 2
// Epf = qeVi
// V = kq/r

v = Math.sqrt((2 * k * q * qe) / (m * r))

console.log(v.toExponential())