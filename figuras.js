// Codigo del cuadrado 


function perimetroCuadrado(lado){
    return lado * 4;
} 


function areaCuadrado(lado){
    return lado * lado 
} 



// Codigo del triangulo 


function perimetroTriangulo(lado1,lado2,base){
    return lado1 + lado2 + base
    

}   
        


function areaTriangulo(base, altura){
    return (base * altura) / 2; 
} 



// Codigo del circulo




function diametroCirculo(radio){
    return radio * 2; 
} 


const PI = Math.PI;


function perimetroCirculo(radio){
    const diametro = diametroCirculo(radio);
    return diametro * PI; 

    
} 


function areaCirculo(radio){
    return (radio * radio) * PI;
}



// Aqui interactuamos con el HTML

// Cuadrado

function calcularPerimetroCuadrado() {
    const input = document.getElementById("InputCuadrado");
    const value = input.value;

    const perimetroC = perimetroCuadrado(value);
    alert(perimetroC);
}

function calcularAreaCuadrado() {
    const input = document.getElementById("InputCuadrado");
    const value = input.value;

    const areaC = areaCuadrado(value);
    alert(areaC);
}


// Triangulo

function calcularPerimetroTriangulo(){
    const input1 = document.getElementById("InputTriangulo1");
    const value1 = parseInt(input1.value);

    const input2 = document.getElementById("InputTriangulo2");
    const value2 = parseInt(input2.value);

    const input3 = document.getElementById("InputTriangulo3");
    const value3 = parseInt(input3.value);

    const perimetroT = perimetroTriangulo(value1, value2, value3);
    alert(perimetroT);
}


function calcularAreaTriangulo() {
    const input4 = document.getElementById("InputTriangulo4");
    const value4 = parseInt(input4.value);

    const input5 = document.getElementById("InputTriangulo5");
    const value5 = parseInt(input5.value);

    const areaT = areaTriangulo(value4, value5);
    alert(areaT);
}


// Circulo

function calcularDiametroCirculo() {
    const input6 = document.getElementById("InputCirculo1");
    const value6 = parseInt(input6.value);

    const diametroC = diametroCirculo(value6);
    alert(diametroC);
}

function calcularPerimetroCirculo() {
    const input7 = document.getElementById("InputCirculo1");
    const value7 = parseInt(input7.value);

    const perimetroC = perimetroCirculo(value7);
    alert(perimetroC);
}

function calcularAreaCirculo() {
    const input8 = document.getElementById("InputCirculo1");
    const value8 = parseInt(input8.value);

    const areaC = areaCirculo(value8);
    alert(areaC);
}



