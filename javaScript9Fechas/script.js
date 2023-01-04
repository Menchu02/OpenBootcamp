// Crea un archivo llamado fechas.js que contenga las siguientes líneas

// - La fecha de hoy
const fecha= new Date()
console.log(fecha)

// - La fecha de tu nacimiento

const miNacimiento= new Date ("February 16 , 1987")


console.log(miNacimiento)
// - Un variable que indique si hoy es más tarde (>) que la fecha de tu nacimiento
let masTarde = fecha > miNacimiento
console.log(masTarde)
// - Una variable que contenga el día de tu nacimiento
let diaNacimiento = miNacimiento.getDate()
console.log(diaNacimiento)
// - Una variable que contenga el mes de tu nacimiento (recuerda que Enero es mes 0)
let mesNacimiento = miNacimiento.getMonth() + 1
console.log(mesNacimiento)
// - Una variable que contenga el año de tu nacimiento (con 4 dígitos)
let anyoNacimiento = miNacimiento.getFullYear()
console.log(anyoNacimiento)