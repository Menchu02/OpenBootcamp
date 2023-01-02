// // - Una variable que contenga la lista de la compra (mínimo 5 elementos)
let listaCompra= ["manzanas","pan","carne","verduras","agua"]
console.log(listaCompra)

// // - Modifica la lista de la compra y añádele "Aceite de Girasol"
listaCompra.push("Aceite de girasol")
console.log(listaCompra)

// // - Vuelve a modificar la lista de la compra eliminando "Aceite de Girasol"
listaCompra.pop()
console.log(listaCompra)
// - Una lista de tus 3 películas favoritas (objetos con propiedades: titulo, director, fecha)
const peliculas = [
    {
      titulo: 'Avatar',
      director: 'James Cameron',
      fecha: 2009,
    },
    {
      titulo: 'Django',
      director: 'Quentin Tarantino',
      fecha:2013,
    },
    {
      titulo: 'Kiki',
      director: 'Paco León',
      fecha:2016,
    }
  ];
  console.log(peliculas)
// - Una nueva lista que contenga las películas posteriores al 1 de enero de 2010 (utilizando filter)
let peliculasPosteriores2010= peliculas.filter((peli)=> peli.fecha > 2010)
console.log(peliculasPosteriores2010)
// - Una nueva lista que contenga los directores de la lista de películas original (utilizando map)
let directoresPelicula= peliculas.map((peli)=>peli.director)
console.log(directoresPelicula)
// - Una nueva lista que contenga los títulos de la lista de películas original (utilizando map)
let titulosPeliculas = peliculas.map((item)=>item.titulo)
console.log(titulosPeliculas)
// - Una nueva lista que concatene la lista de directores y la lista de los títulos (utilizando concat)
let nuevaLista = directoresPelicula.concat(titulosPeliculas)
console.log(nuevaLista)
// - Una nueva lista que concatene la lista de directores y la lista de los títulos (utilizando el factor de propagación)
let nuevaList2= [...directoresPelicula, ...titulosPeliculas]
console.log(nuevaList2)