// Function constructor 

var john = {
    name: 'John',
    yearOfBirth: 1990,
    job: 'teacher'
};

// Function constructor starts with Captial letter
var Person = function (name, yearOfBirth, job) {
    this.name = name;
    this.yearOfBirth = yearOfBirth;
    this.job = job;
}


// Inheritance using prototype
Person.prototype.calculateAge = function () {
    console.log(2016 - this.yearOfBirth);
}

// Created John using Function Constructor
var john = new Person('John', 1990, 'Teacher');
var jane = new Person('Jane', 1996, 'Designer');
var mark = new Person('Mark', 1998, 'Retired');

john.calculateAge();
jane.calculateAge();
mark.calculateAge();