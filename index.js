'use strict'

//1. Создать функцию isAdult, которая будет проверять возраст пользователя на совершеннолетие

function isAdult(age) {
    return age >= 18;
}
console.log("//1");
console.log(isAdult(4));
console.log(isAdult(18));
console.log(isAdult(20));


//2. Создать функцию checkMultiplicity, которая принимает два числа и проверяет кратность первого вторым

function checkMultiplicity(num1, num2) {
    return num1 % num2 === 0;
}
console.log("//2");
console.log(checkMultiplicity(25, 5)) // true
console.log(checkMultiplicity(15, 3)) // true
console.log(checkMultiplicity(15, 5)) // true
console.log(checkMultiplicity(15, 4)) // false

//3. Проверка возможности треугольника. Создать функцию которая принимает длины треугольника; функция возвращает true если 
// треугольник возможен и false если нет

function trianglePossible(side1, side2, side3) {
    return side1 <= (side2+side3) && side2 <= (side1+side3) && side3 <= (side2+side1);
}
console.log("//3");
console.log(trianglePossible(2,6,4));
console.log(trianglePossible(2,6,10));

//4. Написать функции расчета площадей (поверхности) следующих фигур/тел: ромб, цилиндр, треугольника, прямоугольника

function areaRhombus(a,h) {
return a * h;
};

console.log("//4.1");
console.log(areaRhombus(4, 5)); // 20

function areaCylinder(R,h) {
    return 2 * Math.PI * R * (h + R);
}

console.log("//4.2");
console.log(areaCylinder(10, 5)); // 942.477

function areaTriangle(a,b,c) {
    let p = 1/2 * (a+b+c);
    return Math.sqrt(p*(p-a)*(p-b)*(p-c));
}

console.log("//4.3");
console.log(areaTriangle(2,4,5)); // 3,7996

function areaRectangle(a,b) {
    return a * b;
}

console.log("//4.4");
console.log(areaRectangle(3,7)); // 21