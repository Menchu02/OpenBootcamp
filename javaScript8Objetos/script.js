// Crea un archivo llamado objetos.js que contenga las siguientes líneas

// - Un objeto con tus datos personales (nombre, apellido, edad, altura, eresDesarrollador)
let datosPersonales= {
    nombre: "Carmen",
    apellido:"Blanco",
    edad:35,
    altura:1.70,
    eresDesarrollador: true,
}
// - Una variable que obtenga tu edad a partir del objeto anterior
let edad= datosPersonales.edad
console.log(edad)
// - Una lista que contenga el objeto con tus datos personales y un nuevo objeto con los datos personales de tus dos mejores amig@s
const lista=[
    datosPersonales= {
        nombre: "Carmen",
        apellido:"Blanco",
        edad:35,
        altura:1.70,
        eresDesarrollador: true,
    },
    {
        nombre: "Nerea",
        apellido:"Garcia",
        edad:37,
        altura:1.80,
        eresDesarrollador: true,
    },
    {
        nombre: "Beatriz",
        apellido:"Blanco",
        edad:33,
        altura:1.60,
        eresDesarrollador: true,
    }

]
// - Una nueva lista con los objetos de la lista anterior ordenados por edad, de mayor a menor
listaOrdenada= lista.sort((a,b)=> b.edad - a.edad)
console.log(listaOrdenada)
