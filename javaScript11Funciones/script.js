// Una función sin parámetros que devuelva siempre "true"
// function siempreTrue(){
//  return true
// }
// console.log(siempreTrue)
let siempreTrue = ()=> true
console.log(siempreTrue())

// - Una función asíncrona que utilice un setTimeout y pase por consola un "Hola soy una promesa" 5 segundos después de haberse ejecutado



   let soyPromesa = () =>{
     new Promise((resolve, reject) => {
        setTimeout(()=>{
            console.log("holaa")
        }, 3000)
    })
   }
   soyPromesa()



// - Una función generadora de índices pares automáticos
