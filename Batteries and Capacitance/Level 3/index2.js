/*
    The flash on a camera is provided by a capacitor discharging 
    through a flashlamp. Suppose in your camera the capacitor is charged by a 9.00 V battery, and the discharge takes 3.50 μs. If the average power dissipated in the flashlamp is 17.8 W, 
    what must the capacitance of the capacitor be?
*/

let t = 3.5 * 10 ** -6 // s
let E = 17.8 * t // N
let v = 9.00 // V
let c = (2 * E) / (v ** 2)

console.log(c)