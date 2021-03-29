
/************************
FUNCIONES
*************************/

// Función que genera la matriz con las elecciones
const generarElecciones = (municipios, candidatos) => {
    const min = 0;
    const max = 5;
  
    // Retorna un entero aleatorio entre min y max
    const getRandomInt = (min, max) => Math.floor(Math.random() * ( (max+1) - min)) + min
  
    // Genera un arreglo del canditado con los votos aleatorios por la cantidad de municipios  
    const generarVotosCandidato = (municipios) => Array(municipios).fill().map(_ => getRandomInt(min, max))
  
    // Genera un arreglo de elecciones con los votos de los candidatos 
    const elecciones = Array(candidatos).fill().map(_ => generarVotosCandidato(municipios))
   
    return elecciones;
  }

// Funcion para impprimir por consola la matriz
const imprimir = () => {
    let txt = 'Elecciones \t |'; 
    Array(candidatos).fill().forEach( (_, c) => {
    txt =  `${txt} Candidato ${c+1} |`; 
    });
    console.log(txt);
    Array(municipios).fill().forEach( (_, m) => {
        let txt = `Municipio #${m+1} |`;
        Array(candidatos).fill().forEach( (_, c) => {
            txt =  `${txt} \t ${matrizElecciones[c][m]} \t\t`;
        })
        console.log(txt);
    });
}

// Funcion que suma los elementos de un array
function getSum(numbers) {
    return numbers.reduce((acc, val) => acc + val, 0)
}

/************************
PROGRAMA PRINCIPAL
*************************/

const municipios = 10;
const candidatos = 3;

// Se genera la matriz de elecciones
const matrizElecciones = generarElecciones(municipios, candidatos);

imprimir();
console.log(" ");

// Se calcula el total de votos por candidato
const totalesVotos = matrizElecciones.map( (arrVotos, candidato) => {
    let votos = getSum(arrVotos);
    return {candidato:candidato+1, votos};
} );

//Se imprime por consola
console.log("Conteo de votos: ",...totalesVotos);
console.log(" ");

//Se obtienen los 2 candidatos con votos mas altos
const segundaVuelta = totalesVotos.sort( (a,b) => b.votos - a.votos).slice(0,2);
console.log("Candidatos a segunda vuelta: ", ...segundaVuelta);