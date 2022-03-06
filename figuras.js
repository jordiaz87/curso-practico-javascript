// Codigo del cuadrado 

console.group("Cuadrados");

// const ladoCuadrado = 5;

// console.log("Los lados del cuadrado miden: " + ladoCuadrado + " cm");


function perimetroCuadrado(lado){
    return lado * 4;
} 



// console.log("El perimetro del cuadrado es: " + perimetroCuadrado + " cm");


function areaCuadrado(lado){
    return lado * lado 
} 

// console.log("El area del cuadrado es: " + areaCuadrado + " cm^2");

console.groupEnd();

// Codigo del triangulo 

console.group("Triangulo");

// const ladoTriangulo1  = 6;
// const ladoTriangulo2  = 6;
// const baseTriangulo  = 4;


//     console.log(
//         "Los lados del triangulo miden: " 
//         + ladoTriangulo1 
//         + " cm, " 
//         + ladoTriangulo2 
//         + " cm, " 
//         + baseTriangulo 
//         + " cm"
//     );

// const alturaTriangulo  = 5.5;
//     console.log(
//     "La altura del triangulo es: " 
//     + alturaTriangulo 
//     + " cm"
//     );


function perimetroTriangulo(lado1,lado2,base){
    return lado1 + lado2 + base;

}   
        
    // console.log(
    //     "El perimetro del triangulo es: " 
    //     + perimetroTriangulo
    //     + " cm"
    // );

function areaTriangulo(base, altura){
    return (base * altura) / 2; 
} 


    // console.log(
    //     "El area del triangulo es: " 
    //     + areaTriangulo 
    //     + " cm^2"
    // );


console.groupEnd();



// Codigo del circulo

console.group("Circulo");

// radio

// const radioCirculo = 4;
// console.log(
//     "El radio del circulo es: " 
//     + radioCirculo 
//     + " cm");

// diametro

function diametroCirculo(radio){
    return radio * 2; 
} 

// console.log(
//     "El diametro del circulo es: " 
//     + diametroCirculo 
//     + " cm");

// pi

const PI = Math.PI;
// console.log(
//     "El valor de PI es: " 
//     + PI
//     );

// circunferencia

function perimetroCirculo(radio){
    const diametro = diametroCirculo(radio);
    return diametro * PI; 

    
} 


// console.log(
//     "El perimetro del circulo es: " 
//     + perimetroCirculo 
//     + " cm");

// area

function areaCirculo(radio){
    return (radio * radio) * PI;
}



// console.log(
//     "El area del circulo es: " 
//     + areaCirculo 
//     + " cm");








console.groupEnd();
