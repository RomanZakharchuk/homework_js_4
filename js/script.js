// Task 1

function calculatesSquareRectangle (a, b) {
    return a * b;
}

console.log(calculatesSquareRectangle(3, 5));

// Task 2

function calculatesSquareCircle (r) {
    const res = Math.PI * r;
    return res.toFixed(2);
}

console.log(calculatesSquareCircle(10));

// Task 3

function calculatesSquareCylinder (h, r) {
    const res = (Math.PI * 2) * h * r;
    return res.toFixed(2);
}

console.log(calculatesSquareCylinder(10, 5));

// Task 4

function showEachElementsArray (arr) {
    for (const arrElement of arr) {
        console.log(arrElement);
    }
}

const arr = [4, 5, 2, 7, 8];
showEachElementsArray(arr);

// Task 5

function showText(text) {
    document.write(`<p>${text}</p>`);
}

showText('Hello Roman! How are you?');

// Task 6

function showListText(text) {
    document.write('<ul>');
    document.write(`<li>${text}</li>`);
    document.write(`<li>${text}</li>`);
    document.write(`<li>${text}</li>`);
    document.write('</ul>');
}

showListText('Homer');

// Task 7

function showListTextAnother(text, amount) {
    document.write('<ul>');
    for (let i = 0; i < amount; i++) {
        document.write(`<li>${text}</li>`);
    }
    document.write('</ul>');
}

showListTextAnother('Lila', 4);

// Task 8

function buildsList(arr) {
    document.write('<ul>');
    for (const arrElement of arr) {
        document.write(`<li>${arrElement}</li>`);
    }
    document.write('</ul>');
}

const arr2 = [2, 3, 'Roman', 'Ivan', false, true];
buildsList(arr2);

// Task 9

function showPerson(persons) {
    document.write('<div>');
    for (const person of persons) {
        document.write(`<p>${person.id}) My name is ${person.name}, I'm ${person.age} years old.</p>`);
    }
    document.write('</div>');
}

const persons = [
    {id: 1, name: 'Roman', age: 29},
    {id:2, name: 'Ivan', age: 22},
    {id: 3, name: 'Petro', age: 25}
];

showPerson(persons);

// Task 10

debugger;
function returnLeastNumber(numbers) {
    let min = numbers[0];

    for (const number of numbers) {
        if (number < min) {
            min = number;
        }
    }

    return min;
}

const numbers1 = [3, 5, 7, 2, 4 ];
console.log(returnLeastNumber(numbers1));

// Task 11

function calc(numbers) {
    let res = 0;
    for (const number of numbers) {
        res += number;
    }

    return res;
}

const numbers2 = [2, 1, 7];
console.log(calc(numbers2));