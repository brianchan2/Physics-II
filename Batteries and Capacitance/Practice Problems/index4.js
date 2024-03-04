/*
     (Knight Problem 26.25) A 6 μF capacitor, a 10 μF capaci-
    tor, and a 16 μF capacitor are connected in series. What is
    their equivalent capacitance? [Answer: 3.0 μF.]
*/

let c1 = 10
let c2 = 16
let c3 = 6

let ceq = (c1 ** -1 + c2 ** -1 + c3 ** -1) ** -1

console.log(ceq)