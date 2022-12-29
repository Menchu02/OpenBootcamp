// calcular el factorial de 10 utilizando un bucle while
let inicial = 10
let contador = 1
while (inicial > 0) {
  contador *= inicial
  inicial--
}
console.log(`el factorial de ${inicial} es : ${contador}`)
