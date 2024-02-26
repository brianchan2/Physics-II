// For fun, you decide to build a circuit, 
// but you have an unknown capacitor laying around. 
// To measure it, you place it in series with a 5.20 μF 
// capacitor you have and connect them to a 4.50 V battery. 
// Using your trusty voltmeter, you measure 2.50 V across the 
// unknown capacitor. What is its capacitance?

let vtotal = 4.50
let v2 = 2.50
let c1 = 5.20
let v1 = vtotal - v2

let q1 = v1 * c1
let c2 = q1 / v2

console.log(c2)