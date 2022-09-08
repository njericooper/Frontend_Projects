//How the function is called matters to This

var workshop = {
    teacher: "Kyle", 
    ask(question) {
        console.log(this.teacher,question);
    },
};
workshop.ask("What is implicit binding?");

function ask(question) {
    console.log(this.teacher, question);
}

function otherClass() {
    var myContext = {
        teacher: "Suzy"
    };
    ask.call(myContext, "Why?"); //Suzy Why?
}

otherClass();

//constructing

function Workshop(teacher) {
    this.teacher = teacher;
}
Workshop.prototype.ask = function(question) {
    console.log(this.teacher, question);
};

var deepJS = new Workshop("Kyle");
var reactJS = new Workshop("Suzy");

deepJS.ask("Is 'prototype' a class?");
//Kyle isn't prototype a class?
reactJS.ask("isn't 'prototype' ugly?");
//Suzy isn't prototype ugly

class Workshop {
    constructor(teacher) {
        this.teacher = teacher;
    }
    ask(question) {
        console.log(this.teacher , question);
    }
}
var deepJS = new Workshop("Kyle");
var reactJS = new Workshop("Suzy");

deepJS.ask("Is 'class' a class?");
//Kyle is 'class'  a class?
reactJS.ask("Is this class OK?");
//Suzy is this class OK? 