// calcular el factorial de 10 utilizando un solo bucle for

const inicial = 10
let acumulador = 1
for (let i = inicial; i > 0; i--) {
  acumulador *= i
}

console.log(` el factorial de ${inicial} es :  ${acumulador}`)
