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