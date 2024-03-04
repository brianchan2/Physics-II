/*
    Knight Problem 26.27) What is the equivalent capacitance
    of the three capacitors in Figure EX26.27? [Answer: 7.5
    μF.]
*/

let c1 = 10
let c2 = 20
let c3 = 10

let c23 = c2 + c3
let ct = (c23 ** -1 + c1 ** -1) ** -1

console.log(ct)