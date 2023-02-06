'use strict'

//Расчет периметра прямоугольника
function Rectangle (a, b) {
    this.a = a;
    this.b = b;
    this.getArea = function() {
        return this.a * this.b
    }
}

let r1 = new Rectangle(100, 30);
let r2 = new Rectangle(300, 50);

//Расчет периметра окружности и диаметра

function Circle (r) {
    const p = 3.14;
    this.r = r;
    this.getArea = function() {
        return (2*r*p)
    }
    this.getDiameter = function() {
        return (2*r)
    }
}

let r3 = new Circle (5);
let r4 = new Circle (15);


// Расчет периметра квадрата

function Square(a) {
    this.a = a;
    this.getArea = function () {
        return 4*a
    } 
}

let r5 = new Square(10);
let r6 = new Square(5);

// Расчет периметра треугольника и проверка на валидность

function Triangle(a, b, c) {
    this.a = a;
    this.b = b;
    this.c = c;
    this.getArea = function () {
        if (this.a < (this.b + this.c) && this.b < (this.a + this.c) && this.c < (this.a + this.b)) {
            return this.a + this.b + this.c;
        } else {
            return `Треугольник со сторонами ${this.a}, ${this.b}, ${this.c} является не валидным`
        }
    }
}

let r7 = new Triangle (5, 5, 5);
let r8 = new Triangle (0, 0, 0);
let r9 = new Triangle (7, 2, 9);
let r10 = new Triangle (5, 7, 12);

