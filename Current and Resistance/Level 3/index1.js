/*
    The figure shows a circuit consisting of a battery and five resistors, with resistances and the battery emf listed below. 
    What is the current through resistor R1?
    R1 = 3.00 Ω, 
    R2 = 9.00 Ω, 
    R3 = 3.00 Ω, 
    R4 = 15.0 Ω, 
    R5 = 10.0 Ω, 
    and V = 25.0 V.
*/

let R1 = 3.00 // Ω 
let R3 = 3.00 // Ω
let R2 = 9.00 // Ω
let R4 = 15.0 // Ω
let R5 = 10.0 // Ω
let V = 25.0 // Volts


let R34 = ((1/R3) + (1/R4)) ** -1
let R234 = R34 + R2

let Rp = ((1/R234) + (1/R5)) ** -1
let Req = R1 + Rp

I = V/Req

console.log(I)