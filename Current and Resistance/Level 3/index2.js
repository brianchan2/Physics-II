/*
    A 6.14 μF defibrillator capacitor is charged to 3.60×103 V. 
    What is the resistance of the patient’s chest if, when used, it loses 89.0% of its charge in 5.68 ms?
*/

let c = 6.14 * 10 ** -6 // F
let t = 5.68 * 10 ** -3 // S
let v = 0.11 // charge 100 - 89

// From formula:
// V = V_0e^(-t/r)
// and R = r/C
// With r being the time constant

let R = (-t / Math.log(.11)) / c

console.log(R)