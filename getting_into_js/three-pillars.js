//Types and Coersion

//Primitive Types

var v; 

typeof v;

v = "1";

typeof v;
v = 2
typeof v;
v = true;
typeof v;

v = {};
typeof v;

v = Symbol();
typeof v;

typeof doesntExist; // "undefined"

var v = null;
typeof v;
 v= function() {};
 typeof v; // function

 v = [1,2,3];
 typeof v; //"object"

 //NaN(!"not a number")

 var greeting = "Hello, class!";

 var something = greeting / 2;

 something;
 Number.isNaN(something);//true
 Number.isNaN(greeting);// false

 //Fundamental Objects

 var yesterday = new Date("September 6, 2022");
 yesterday.toUTCString();

 var myGPA = String(transcript.gpa);

 //Converting types - Coercion

 var msg1 = "There are ";
 var numStudents = 16;
 var msg2 = " students.";
 console.log(mgs1 + numStudents + msg2);
 //"There are 16 students." (implicit coercion)

 var numStudents = 16;
 console.log(
    `There are ${numStudents+""} students.`
 ); //"There are 16 students." //another form of implicit coercion

 function addStudent(numStudents) {
    return numStudents + 1;
 }

 addAStudent(
    Number(studentsInputelem.value)
 ); //17

 //Truthy and Falsy Coercion:Boolean

 if (studentsInputelem.value) {
    numStudents = 
    Number(studentsInputelem.value);
 }

 while (newStudents.length) {
    enrollStudents(newStudents.pop());
 }

 if (!!studentsInputelem.value) {
    numStudents = 
    Number(studentsInputelem.value);
 }

 while (newStudents.length > 0) {
    enrollStudent(newStudents.pop());
 }

 var workshopEnrollment1 = 16;
 var workshopEnrollment2 = workshop2Elem.value;

 if (Number(workshopEnrollment1) < Number (workshopEnrollment2)) {
    //..
 }
 if (workshopEnrollment1 < workshopEnrollment2) {
    //..
 }

 /* 
  Coercive Equality vs. Non-Coercive Equality

 == allows coercion (types differents)

 === disallows coercion (types same) */

 var studentName1 = "Frank";
 var studentName2 = `${studentName1}`;

 var workshopEnrollment1 = 16;
 var workshopEnrollment2 = workshopEnrollment1 + 0;

 studentName1 == studentName2;
 studentName1 === studentName2;

 workshopEnrollment1 == workshopEnrollment2;
 workshopEnrollment1 === workshopEnrollment2;

 var workshop1 = { topic: null };
 var workshop2 = {};

 if (
    (workshop1.topic === null || workshop1.topic === undefined) &&
    (workshop2.topic === null || workshop2.topic === undefined) //&&
) 

{
return true;
 }

 if (
    workshop1.topic == null && 
    workshop2.topic == null
 ) {
    //..
 }