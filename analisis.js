//  Se obtienen el valor entero de los salarios del array 
//  venezuela en un nuevo array llamado salariosVe @@@@@@@@@@@@@@@@

const salariosVe = venezuela.map(
    function (persona){
        return persona.salary;
    }
);

// se ordenan los elementos del array de menor a 
// mayor en una constante llamada salariosVeSorted @@@@@@@@@@q@@@q


const salariosVeSorted = salariosVe.sort(
    function(salaryA, salaryB){
        return salaryA - salaryB
    }
); 

// calcular la Mediana @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@

// function esPar(numero){
//     if (numero % 2 === 0) {
//         return true;
//     } else {
//         return false;
//     } 
// }

// El codigo de arriba se puede simplificar asi:

function esPar(numero){
    if (numero % 2 === 0); 
}


// metodo reduce suma todos los elementos de la lista 
// El método reduce() ejecuta una función reductora sobre cada elemento de un array, devolviendo como resultado un único valor.

function calcularMediaAritmetica(lista) {
    
    const sumaLista = lista.reduce(
        function (valorAcumulado = 0, nuevoElemento ){
            return valorAcumulado + nuevoElemento;
        }
    ); 

    const promedioLista = sumaLista / lista.length;

    return promedioLista;

}

function medianaSalarios(lista) {
    const mitad = parseInt(lista.length / 2);

    if (esPar(lista.length)){
        const personaMitad1 = lista[mitad - 1];
        const personaMitad2 = lista[mitad];

        const mediana = calcularMediaAritmetica([personaMitad1, personaMitad2]);
        return mediana;
    } else {
        const personaMitad = lista[mitad];
        return personaMitad;
    }
}




const medianaGeneralVe = medianaSalarios(salariosVeSorted);

// Calculando mediana del top 10% de salarios



const spliceStart = (salariosVeSorted.length * 90) / 100;
const spliceCount = salariosVeSorted.length - spliceStart;

const salariosVeTop10 = salariosVeSorted.splice(
    spliceStart,
    spliceCount,
);

const medianaTop10Ve = medianaSalarios(salariosVeTop10);

console.log({
    medianaGeneralVe,
    medianaTop10Ve,
});