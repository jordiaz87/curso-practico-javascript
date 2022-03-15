const lista1 = [
    1,
    2,
    3,
    1,
    2,
    3,
    4,
    2,
    2,
    2,
    1
];

const lista1Count = {};

lista1.map(
    function (elemento){
        
        if (lista1Count[elemento]){
            
            lista1Count[elemento] = lista1Count[elemento] + 1;
        } else {
            lista1Count[elemento] = 1;
        }
       
    }

    
);


const lista1Array = Object.entries(lista1Count).sort(
    function (elementoA, elementoB){
        return elementoA[1] - elementoB[1];
    }
);

const moda = lista1Array[lista1Array.length -1];




// Como la te dije .map recorre todos los elementos de un arraylist. Y en este caso será de lista.
// Los elementos son los valores que tomas de la lista

// Entonces toma el primer valor de lista, que es 1 y llega al primer if y pregunta que si dentro de objeto existe una Propiedad con nombre 1. como aun no existe la condición es falsa y se brinca al else entonces se crea dentro de objeto una propiedad 1 con el valor de 1

// objeto {
// 1:1
// }

// ahora .map se recorre al siguiente valor que es 2 y otra vez, llega al if y pregunta que si dentro de objeto existe una Propiedad con nombre 2. como aun no existe la condición es falsa entonces se brinca al else entonces se crea dentro de objeto una propiedad 2 con el valor de 1

// objeto {
// 1 : 1,
// 2 : 1
// }

// este mismo proceso sucede con el 3 y que un objeto así

// objeto {
// 1 : 1,
// 2 : 1,
// 3 : 1
// }

// pero como .map se sigue recorriendo el valor que sigue es otro 1 y otra vez, llega al if y pregunta que si dentro de objeto existe una Propiedad con nombre 1. Como ahora si existe la condición es verdadera entonces a valor súmale 1 y quedaría así

// objeto {
// 1 : 2,
// 2 : 1,
// 3 : 1
// }

// después sigue un 4…

// objeto {
// 1 : 2,
// 2 : 1,
// 3 : 1,
// 4 : 1
// }

// y después otro 1,

// objeto {
// 1 : 3,
// 2 : 1,
// 3 : 1,
// 4 : 1
// }

// y después un 3,

// objeto {
// 1 : 3,
// 2 : 1,
// 3 : 2,
// 4 : 1
// }