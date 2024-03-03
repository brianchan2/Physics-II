/*
    Knight 24.13) A 2.0 cm × 3.0 cm rectangle lies in the xz-
    plane. What is the magnitude of the electric flux through
    the rectangle if
    a. ⃗ E = (100ˆi − 200ˆk) N/C? [Answer: 0.0 Nm2/C.]
    b. ⃗ E = (100ˆi − 200ˆj) N/C? [Answer: 0.12 Nm2/C.]
*/


// a) Answer is 0 because the angle between the plane and the eletric flux is 90 (Perpendicular). can be noted because the unit vectors are x and y

// b)

let area = 0.02 * 0.03 // m ** 2
let Ex = 100 // N/C
let Ey = 200 // N/C

// flux = ?
// flux = E * area

let flux_x = Ex * area // Doesnt mean anything because its perpendicular
let flux_y = Ey * area

console.log(flux_y)