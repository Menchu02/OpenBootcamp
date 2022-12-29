// // calcular el factorial de 10 utilizando un bucle while, una bifurcación if y una sentencia break
let inicial = 10
let contador = 1
while (inicial > 0) {
  if (inicial === 3) {
    break;
  }
  contador *= inicial
  inicial--
}
console.log(contador)

