// Codigo del Cuadrado
console.group('cuadrados');
const ladoCuadrado = 5;
console.log('Los lados del cuadrado miden: ' + ladoCuadrado + 'cm');

const perimetroCuadrado = ladoCuadrado * 4;
console.log('El perimetro del cuadrado es: ' + perimetroCuadrado + 'cm');

const areaCuadrado = ladoCuadrado * ladoCuadrado;
console.log('El area del cuadrado es: ' + areaCuadrado + 'cm2');
console.groupEnd();

// Codigo del Triangulo
console.group('Triangulos');
const ladoTriangulo = 6;
const ladoTriangulo2 = 6;
const baseTriangulo = 4;
const alturaTriangulo = 5.5;
console.log(
    'Los lados del triangulo miden: '
    + ladoTriangulo + 'cm, '
    + ladoTriangulo2 + 'cm y '
    + baseTriangulo + 'cm'
);

const perimetroTriagulo = ladoTriangulo + ladoTriangulo2 + baseTriangulo;
console.log('El perimetro del triangulo es: ' + perimetroTriagulo + 'cm');

const areaTriangulo = (baseTriangulo * alturaTriangulo) / 2;
console.log('El area del triangulo es: ' + areaTriangulo + 'cm2');
console.groupEnd();

// Codigo del Circulo
console.group('Circulos');
const radio = 4;
const diametro = radio * 2;
const PI = Math.PI;
console.log('El diametro del circulo es: ' + diametro + 'cm');

const perimetroCirculo = diametro * PI;
console.log('El perimetro del circulo es: ' + perimetroCirculo + 'cm');

const areaCirculo = (radio * radio) * PI;
console.log('El area del circulo es: ' + areaCirculo + 'cm2');
console.groupEnd();