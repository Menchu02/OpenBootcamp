// Crea un nuevo archivo JS que contenga una lista con los siguientes elementos:

// - Tu nombre (string)

// - Tu edad (number)

// - ¿Eres desarrollador? (boolean)

// - Tu fecha de nacimiento (Date)

// - Tu libro favorito (Objeto con propiedades: titulo, autor, fecha, url)
let miNombre = 'Carmen Blanco Delgado'

let edad = 35

let desarrolladora = true

let fechaCumpleaños = new Date('january 16 1987')

let libroFavorito = [
  {
    título: 'Mindfullness',
    autor: 'Beatriz Blanco',
    fecha: 2019,
    url:
      'https://www.fnac.es/a1133791/Mindfulness-Funciona?ORIGIN=GOO_PMAX_D_BRAND_AG&gclid=CjwKCAiAkrWdBhBkEiwAZ9cdcMCiPZ0D5oC-BOLZCMEUiqJN4Y0GbFi3vNLKOSVTuoOYroDg6P1PIhoCwc0QAvD_BwE&gclsrc=aw.ds',
  },
]
console.log(miNombre, edad, fechaCumpleaños, libroFavorito)
