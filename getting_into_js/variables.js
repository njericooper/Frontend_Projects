var name = "Njer Cooper";

var age;

age = 28;

var friends = ["Daria", "Jose"];

console.log( friends.length );
console.log( friends[1] );

age++;
age += 2;

age;

/* Expressions and statements */

var age = 28;
age = 1 + (age * 2);

/* Decisions */

var age = 28;

if (age >= 18) {
    goVote();
}
 
if (ifEnrolled()) {
    takeClass();
} else {
    enrollFirst();
}

/* Loops */

var students = [];

for (let i = 0; i < students.length; i++) {
    greetStudent( student[i] );
}

for (let student of students) {
    greetStudent( student );
}

while (students.length > 0) {
    let student = students.pop();
    greetStudent(student);
}

var students = [ "Matt", "Sarah", "Susan" ];

while (students.length > 0 ) {
    let student = students.shift();
    console.log(`Hello, ${student}`) // takes array item from front of list
}

while (students.length > 0 ) {
    let student = students.pop();
    console.log(`Hello, ${student}`) // takes array item from end of list
}
