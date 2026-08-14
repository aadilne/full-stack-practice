{

// Part 2: Object Properties Access


let student = {
    name: "Aadil",
    age: 22,
    course: "BCA"
};



// 7. Dot Notation


console.log(student.name);
console.log(student.age);
console.log(student.course);



// 8. Bracket Notation


console.log(student["name"]);
console.log(student["age"]);
console.log(student["course"]);




// 9. Dot vs Bracket


console.log(student.name);
console.log(student["name"]);



// 10. Variable ke through Property Access


let key = "name";

console.log(student[key]);



// 11. Missing / Non-existing Property


console.log(student.city);



// Important Difference


console.log(student[key]);      // "Aadil"
console.log(student["key"]);    // undefined
}


{

//  Add / Update / Delete


let student = {
    name: "Aadil",
    age: 22
};



// 12. Add new property

student.course = "BCA";

console.log(student);



// Add new property through Bracket Notation
student["city"] = "Arrah";

console.log(student);



// 13. Existing Property Update 


student.age = 23;

console.log(student);


// Bracket Notation se update
student["age"] = 24;

console.log(student);



// 14. Property Delete 


delete student.city;

console.log(student);


// Bracket Notation se delete
delete student["course"];

console.log(student);



// 15. Modify Object 


student.name = "Nezam";       // Update

student.gender = "Male";      // Add

delete student.age;           // Delete

console.log(student);

}


{

// Part 4: Object Methods




// 16. Function inside Object


let student = {
    name: "Aadil",
    age: 22,

    sayHello: function() {
        console.log("Hello Aadil");
    }
};



// 17. Method



// 18. Method ko Call Karna


student.sayHello();



// 19. this Keyword 

let student2 = {
    name: "Aadil",

    sayHello: function() {
        console.log("Hello " + this.name);
    }
};

student2.sayHello();



// 20. Object Method me this


let student3 = {
    name: "Aadil",
    age: 22,
    course: "BCA",

    introduce: function() {
        console.log("My name is " + this.name);
        console.log("My age is " + this.age);
        console.log("My course is " + this.course);
    }
};

student3.introduce();



// this ko samajhne ka simple example

let user = {
    name: "Aadil",
    age: 22,

    showData: function() {
        console.log(this.name);
        console.log(this.age);
    }
};

user.showData();


// this.name ka basic meaning:
// user.name

// this.age ka basic meaning:
// user.age
}


{

    
// Part 5: Important Object Methods



// 21. Object.keys()


let student = {
    name: "Aadil",
    age: 22,
    course: "BCA"
};

console.log(Object.keys(student));

// Output:
// ["name", "age", "course"]



// 22. Object.values()


console.log(Object.values(student));

// Output:
// ["Aadil", 22, "BCA"]



// 23. Object.entries()


console.log(Object.entries(student));

// Output:
// [
//     ["name", "Aadil"],
//     ["age", 22],
//     ["course", "BCA"]
// ]



// 24. Object.assign()


let extraInfo = {
    city: "Arrah",
    gender: "Male"
};

Object.assign(student, extraInfo);

console.log(student);

// Output:
// {
//     name: "Aadil",
//     age: 22,
//     course: "BCA",
//     city: "Arrah",
//     gender: "Male"
// }



// 25. Object.hasOwn()


console.log(Object.hasOwn(student, "name"));
// true

console.log(Object.hasOwn(student, "city"));
// true

console.log(Object.hasOwn(student, "phone"));
// false



// 26. Object.freeze()


let user = {
    name: "Aadil",
    age: 22
};

Object.freeze(user);

user.age = 25;
user.city = "Arrah";
delete user.name;

console.log(user);

// Object change nahi hoga:
// {
//     name: "Aadil",
//     age: 22
// }



// 27. Object.seal()


let person = {
    name: "Aadil",
    age: 22
};

Object.seal(person);

person.age = 25;          // Allowed
person.city = "Arrah";    // Not allowed
delete person.name;       // Not allowed

console.log(person);

// Output:
// {
//     name: "Aadil",
//     age: 25
// }


}

{


// Part 6: Object + Loops



// 28. for...in Loop


let student = {
    name: "Aadil",
    age: 22,
    course: "BCA"
};

for (let key in student) {
    console.log(key);
}

// Output:
// name
// age
// course




// 29. Object ke Keys ko Loop Karna


for (let key in student) {
    console.log("Key:", key);
}

// Output:
// Key: name
// Key: age
// Key: course




// 30. Object ki Values ko Loop Karna


for (let key in student) {
    console.log(student[key]);
}

// Output:
// Aadil
// 22
// BCA




// Key + Value Dono


for (let key in student) {
    console.log(key + ":", student[key]);
}

// Output:
// name: Aadil
// age: 22
// course: BCA




// 31. Object + for...in Practice


let user = {
    name: "Aadil",
    age: 22,
    city: "Arrah",
    course: "BCA"
};

for (let key in user) {
    console.log(key + " = " + user[key]);
}

// Output:
// name = Aadil
// age = 22
// city = Arrah
// course = BCA




// Practice Example


let employee = {
    name: "Aadil",
    age: 22,
    salary: 25000,
    department: "IT"
};

for (let key in employee) {
    console.log(key + ":", employee[key]);
}

}


{

// Part 7: Nested Objects




// 32. Nested Object


let student = {
    name: "Aadil",
    age: 22,

    address: {
        city: "Arrah",
        state: "Bihar"
    }
};

console.log(student);



// 33. Object ke andar Object


let user = {
    name: "Aadil",

    contact: {
        email: "aadil@gmail.com",
        phone: "9876543210"
    }
};

console.log(user.contact);



// 34. Nested Property Access


console.log(student.address.city);
console.log(student.address.state);


// Bracket Notation

console.log(student["address"]["city"]);


// Dot + Bracket

console.log(student.address["city"]);



// 35. Nested Object Update


student.address.city = "Patna";

console.log(student.address.city);


// Nested Property Add

student.address.pincode = 802112;

console.log(student.address);


// Nested Property Delete

delete student.address.state;

console.log(student.address);



// 36. Object + Array


let student2 = {
    name: "Aadil",
    age: 22,

    skills: [
        "HTML",
        "CSS",
        "JavaScript"
    ]
};

console.log(student2.skills);

console.log(student2.skills[0]);
console.log(student2.skills[1]);
console.log(student2.skills[2]);



// 37. Array ke andar Objects


let students = [

    {
        name: "Aadil",
        age: 22
    },

    {
        name: "Rahul",
        age: 23
    },

    {
        name: "Aman",
        age: 21
    }

];


// First Object

console.log(students[0]);
console.log(students[0].name);
console.log(students[0].age);


// Second Object

console.log(students[1].name);
console.log(students[1].age);


// Third Object

console.log(students[2].name);
console.log(students[2].age);



// Array + Objects + Loop


for (let student of students) {

    console.log("Name:", student.name);
    console.log("Age:", student.age);

}

}

// Part 8: Object Destructuring
{

// 38. Object Destructuring 
let student = {
    name: "Aadil",
    age: 22,
    course: "BCA"
};

// Normal way
let studentName = student.name;
let studentAge = student.age;

console.log(studentName);
console.log(studentAge);


// Destructuring way
let { name, age, course } = student;

console.log(name);
console.log(age);
console.log(course);



// 39. Basic Object Destructuring


let user = {    name: "Aadil",
    age: 22
};

let { name: userName, age: userAge } = user;

console.log(userName);
console.log(userAge);



// 40. Rename Variables


let person = {
    name: "Aadil",
    age: 22
};

let {
    name: personName,
    age: personAge
} = person;

console.log(personName);
console.log(personAge);



// 41. Default Values


let student2 = {
    name: "Aadil"
};

let {
    name: name2,
    age: age2 = 18
} = student2;

console.log(name2);
console.log(age2);


// Property available ho to default value
// use nahi hogi.

let student3 = {
    name: "Aadil",
    age: 22
};

let { age: age3 = 18 } = student3;

console.log(age3);



// 42. Nested Object Destructuring

let student4 = {
    name: "Aadil",

    address: {
        city: "Arrah",
        state: "Bihar"
    }
};

let {
    address: {
        city,
        state
    }
} = student4;

console.log(city);
console.log(state);



// 43. Function ke saath Object Destructuring


let student5 = {
    name: "Aadil",
    age: 22
};

function showStudent({ name, age }) {

    console.log("Name:", name);
    console.log("Age:", age);

}

showStudent(student5);



// Function + Nested Object Destructuring


let student6 = {
    name: "Aadil",

    address: {
        city: "Arrah",
        state: "Bihar"
    }
};

function showStudentDetails({
    name,
    address: {
        city,
        state
    }
}) {

    console.log("Name:", name);
    console.log("City:", city);
    console.log("State:", state);

}

showStudentDetails(student6);

}


//Spread & Rest with Objects
{
// 44. Object Spread Operator

let student = {
    name: "Aadil",
    age: 22
};

let newStudent = {
    ...student
};

console.log(newStudent);



// 45. Object ki Copy Banana


let student2 = {
    name: "Aadil",
    age: 22,
    course: "BCA"
};

let studentCopy = {
    ...student2
};

console.log(studentCopy);


// Copy ko modify karna
studentCopy.age = 23;

console.log("Original:", student2);
console.log("Copy:", studentCopy);



// 46. Objects ko Combine Karna


let basicInfo = {
    name: "Aadil",
    age: 22
};

let extraInfo = {
    course: "BCA",
    city: "Arrah"
};

let fullStudent = {
    ...basicInfo,
    ...extraInfo
};

console.log(fullStudent);



// Same Property ko Update Karna


let student3 = {
    name: "Aadil",
    age: 22
};

let updatedStudent = {
    ...student3,
    age: 25
};

console.log(updatedStudent);



// 47. Object Rest Operator


let student4 = {
    name: "Aadil",
    age: 22,
    course: "BCA",
    city: "Arrah"
};

let { name, ...rest } = student4;

console.log(name);
console.log(rest);



// Multiple Properties + Rest

let student5 = {
    name: "Aadil",
    age: 22,
    course: "BCA",
    city: "Arrah"
};

let {
    name: studentName,
    age: studentAge,
    ...otherDetails
} = student5;

console.log(studentName);
console.log(studentAge);
console.log(otherDetails);



// 48. Spread vs Rest

// SPREAD

let obj1 = {
    name: "Aadil",
    age: 22
};

let obj2 = {
    ...obj1
};

console.log(obj2);


// REST
// Baaki properties ko collect karta hai.

let obj3 = {
    name: "Aadil",
    age: 22,
    course: "BCA"
};

let {
    name: userName,
    ...remaining
} = obj3;

console.log(userName);
console.log(remaining); 
}


// Part 10: Reference & Copy
{

// 49. Object Reference


let student1 = {
    name: "Aadil",
    age: 22
};

let student2 = student1;

// Dono same object ko refer kar rahe hain

student2.age = 25;

console.log(student1);
console.log(student2);

// student1 bhi age: 25 dikhayega
// student2 bhi age: 25 dikhayega




// 50. Object Copy vs Reference



// -------- Reference --------

let user1 = {
    name: "Aadil",
    age: 22
};

let user2 = user1;

user2.age = 25;

console.log(user1.age);  // 25
console.log(user2.age);  // 25


// -------- Copy --------

let person1 = {
    name: "Aadil",
    age: 22
};

let person2 = {
    ...person1
};

person2.age = 25;

console.log(person1.age);  // 22
console.log(person2.age);  // 25




// 51. Shallow Copy


let student3 = {
    name: "Aadil",
    age: 22,
    course: "BCA"
};

let student4 = {
    ...student3
};

student4.age = 25;

console.log(student3);
console.log(student4);


// -------- Shallow Copy + Nested Object --------

let student5 = {
    name: "Aadil",

    address: {
        city: "Arrah"
    }
};

let student6 = {
    ...student5
};

student6.address.city = "Patna";

console.log(student5.address.city);
console.log(student6.address.city);

// Dono "Patna" ho jayenge
// Kyunki nested address ka reference share ho raha hai




// 52. Deep Copy - Basic Concept


// Deep Copy me nested objects bhi
// independent copy hote hain.




// 53. structuredClone()


let student7 = {
    name: "Aadil",

    address: {
        city: "Arrah"
    }
};

let student8 = structuredClone(student7);

student8.address.city = "Patna";

console.log(student7.address.city);
// Arrah

console.log(student8.address.city);
// Patna



// Deep Copy with Array


let data1 = {
    name: "Aadil",

    skills: [
        "HTML",
        "CSS",
        "JavaScript"
    ]
};

let data2 = structuredClone(data1);

data2.skills.push("React");

console.log(data1.skills);
// ["HTML", "CSS", "JavaScript"]

console.log(data2.skills);
// ["HTML", "CSS", "JavaScript", "React"]

//Reference = same object
//Shallow Copy = outer copy
//Deep Copy = nested data tak independent copy
}



// Part 11: Object + Functions
{    


// 54. Object ko Function me Pass Karna


let student = {
    name: "Aadil",
    age: 22
};

function showStudent(student) {

    console.log(student);
}

showStudent(student);


// Object ki properties access

function showStudentDetails(student) {

    console.log(student.name);
    console.log(student.age);

}

showStudentDetails(student);



// 55. Object ko Function se Return Karna


function createStudent() {

    let student = {
        name: "Aadil",
        age: 22,
        course: "BCA"
    };

    return student;
}

let result = createStudent();

console.log(result);
console.log(result.name);
console.log(result.age);
console.log(result.course);



// 56. Object as Function Argument


let studentData = {
    name: "Aadil",
    age: 22
};

function printStudent(data) {

    console.log(data.name);
    console.log(data.age);

}

printStudent(studentData);



// Parameter vs Argument


// data → Parameter
// studentData → Argument



// 57. Destructuring Function Parameters


let student2 = {
    name: "Aadil",
    age: 22
};

function displayStudent({ name, age }) {

    console.log(name);
    console.log(age);

}

displayStudent(student2);



// Nested Object Destructuring in Function


let student3 = {
    name: "Aadil",

    address: {
        city: "Arrah",
        state: "Bihar"
    }
};

function displayStudentDetails({
    name,
    address: {
        city,
        state
    }
}) {

    console.log(name);
    console.log(city);
    console.log(state);

}

displayStudentDetails(student3);



// 58. Object + Callback Function


let student4 = {
    name: "Aadil",
    age: 22
};

function processStudent(student, callback) {

    callback(student);

}

function showData(student) {

    console.log(student.name);
    console.log(student.age);

}

processStudent(student4, showData);



// Object + Callback + Destructuring


let student5 = {
    name: "Aadil",
    age: 22
};

function processStudentData(student, callback) {

    callback(student);

}

processStudentData(student5, function({ name, age }) {

    console.log("Name:", name);
    console.log("Age:", age);

});

}


{

// Part 12: Constructor & Advanced Objects




// 59. Constructor Function


function Student(name, age) {

    this.name = name;
    this.age = age;

}

let student1 = new Student("Aadil", 22);
let student2 = new Student("Rahul", 23);
let student3 = new Student("Aman", 21);

console.log(student1);
console.log(student2);
console.log(student3);

console.log(student1.name);
console.log(student1.age);



// 60. new Keyword


let student4 = new Student("Aadil", 22);

console.log(student4);

// new:
// 1. Naya object create karta hai
// 2. this ko new object se connect karta hai
// 3. Constructor function run karta hai
// 4. Object return karta hai



// 61. Object.create()


let studentInfo = {

    showName: function() {
        console.log("Student:", this.name);
    }

};

let student5 = Object.create(studentInfo);

student5.name = "Aadil";

console.log(student5.name);

student5.showName();



// 62. Prototype - Basic


let person = {

    greet: function() {
        console.log("Hello");
    }

};

let student6 = Object.create(person);

student6.name = "Aadil";

console.log(student6.name);

student6.greet();





// 63. Object Inheritance - Basic


let person2 = {

    greet: function() {
        console.log("Hello");
    }

};

let student7 = Object.create(person2);

student7.study = function() {
    console.log("Studying JavaScript");
};

student7.greet();
student7.study();



// 64. Class vs Object


class StudentClass {

    constructor(name, age) {

        this.name = name;
        this.age = age;

    }

}

let student8 = new StudentClass("Aadil", 22);
let student9 = new StudentClass("Rahul", 23);

console.log(student8);
console.log(student9);

console.log(student8.name);
console.log(student9.name);



// Class + Method


class StudentDetails {

    constructor(name, age) {

        this.name = name;
        this.age = age;

    }

    introduce() {

        console.log(
            "My name is " + this.name +
            " and my age is " + this.age
        );

    }

}

let student10 = new StudentDetails("Aadil", 22);

student10.introduce();


}


