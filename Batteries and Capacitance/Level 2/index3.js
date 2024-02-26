let t = 2.20 * 10 ** -3 // s
let e = (8.89 * 10 ** 3) * t // j
let c = 43 * 10 ** -6 // uF
//E = (1/2) * c * v ** 2
//(2 * E) / c = v ** 2

let v = Math.sqrt((2 * e) / c)
console.log(v)