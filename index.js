
let person = { 
    name: 'Gabi',
    age: '26',
    favcolor: 'orange'
};

//Dot Notation
person.name = 'Mary';

//Bracket Notation
let selection = 'name'
person[selection] = 'Hugo';

console.log(person);

let selectColors = ['red','blue','orange','black'];
selectColors[4] = 'green';
console.log(selectColors.length);

//Performing a task
function greet(name, lastName) {
    console.log('Hello ' + name + ' ' + lastName);
}

greet('John', 'Smith');
greet('Mary', 'Silva');
greet('Gabi', 'Burkoth');

//Calculating a value
function square (number) {
    return number*number;
}

console.log(square(2));
