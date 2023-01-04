// Crea un archivo llamado conjuntos.js que contenga las siguientes líneas

// - Un nuevo Set con los nombres de tu familia

const setFamilia = new Set(
    ["Carmen","Daniel","Antonio","Mari Carmen"]

)
console.log(setFamilia)
// - Modifica el Set original añadiendo tu nombre (duplicado) (debería darte lo mismo)
setFamilia.add("Carmen")
console.log(setFamilia)
// - Modifica el Set original añadiendo el nombre "Javascript" (ya que empieza a formar parte de tu vida ;)
setFamilia.add("JavaScript")
console.log(setFamilia)