const lista1 = [
    5,
    3,
    6,
    5,
    4,
    5,
    2,
    8,
    6,
    5,
    4,
    8,
    3,
    4,
    5,
    4,
    8,
    2,
    5,
    4
   
   
];

lista1.sort(function (a, b){
    return a - b
});

const mitadLista1 = parseInt(lista1.length / 2);

let mediana;


// function esPar(numerito){
//     if (numerito es par?){
//         return true;
//     }else {
//         return false;
//     }
// }

function esPar(numerito){
    if (numerito % 2 === 0){
        return true;
    }else {
        return false;
    }
}

// if (lista1 es par?){
//     necesitamos dos elementos
//     el promedio
//     mediana
// } else {
//     posicion mitadLista1 dentro de lista1
//     mediana
// }

if (esPar(lista1.length)){
    const elemento1 = lista1[mitadLista1 - 1];
    const elemento2 = lista1[mitadLista1];

    const promedioElemento1y2 = calcularMediaAritmetica([
        elemento1,
        elemento2
    ])

    mediana = promedioElemento1y2;

} else {
    mediana = lista1[mitadLista1];
}

function calcularMediaAritmetica(lista) {
    

    const sumaLista = lista.reduce(
        function (valorAcumulado = 0, nuevoElemento ){
            return valorAcumulado + nuevoElemento;
        }
    ); 

    const promedioLista = sumaLista / lista.length;

    return promedioLista;

}
