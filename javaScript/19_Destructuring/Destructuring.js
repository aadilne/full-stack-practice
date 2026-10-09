
console.log("Destructuring in JavaScript");

let person = {
    name: 'Aadil Nezam',
    streetAddress: 'bihar ara',
    isMarried: false,
    address:{
        city:'Bihar',
        pincode: 802301,
    }

}

// let name = person.name;
// let add = person.streetAddress;
// let isMarried = person.isMarried;

// destructuring
// let { isMarried : married,  name, streetAddress, address: {pincode} } = person;
      //we can rename objet key using colon(:) in destructuring

// console.log(name);
// console.log(streetAddress);
// console.log(married);

// console.log(pincode)


// let arr = [1,2,3];

// let [a,b,c] = arr;
// console.log(a, b, c)


// Basic destructuring

// let arr = [1,2,3,'Aadil', false];

// let [first, second, third] = arr;

// console.log(first)
// console.log(second)
// console.log(third)


// destructuring with rest operator

// let arr = [1,2,3,'Aadil', false];

// let [first, second, third, ...others] = arr;

// console.log(first)
// console.log(second)
// console.log(third)
// console.log(others)


 //default values
// let [a, b, c, d = "aadil"] = [5, 10, 15]
// console.log(a, b, c, d);


// skip items
// we can skip items in array destructuring by leaving the space empty and adding a comma(,)
let arr2 = [1 , 2 ,"aadil" , true , 4 , 5];

let  [, , third , , , rank] = arr2;
console.log(third, rank);

// swap
// let a = 5; b = 10;
// let temp = a;
// a = b;
// b = temp;
// console.log(a, b)

// swap using destructure method
// let a = 5; b = 10;
// [a, b] = [b, a];
// console.log(a, b);

// // nested destructuring
// let nestedArr = ["aadil" , 'rohan' , 'aarish' , ["sunil" , 'prakash'] , 'radhe'];
// let [first , second , athird , [sname , pname] , fifth] = nestedArr;
// console.log(athird);

// let dAcopy = [...nestedArr];
// dAcopy.push("manas");
// console.log(dAcopy);

// destructuring with objects

//basic destructuring

// let obj = {
//     name:'manas',
//     age:21,
// }

// let {name, age} = obj
// console.log(name, age)

// destructuring with rest operator
// let obj = {
//     name: 'manas',
//     age: 21,
//     city: 'Patna',
//     isMarried: false,
// }

// let { name, age, ...others } = obj;
// console.log(name, age, others);


// default values
// let { name, age = 18 } = {
//     name: 'manas',
// }

// console.log(name, age);


// rename variable
// let {name: fullName} = {
//     name: 'Irfan khan'
// }

// console.log(fullName);


// let obj = {
//     name: 'manas kumar lal',
//     age: 21,
//     address: {
//         city: 'bhagalpur',
//         pincode: 812004,
//         arr: [1, 2, 3, 4, 5]
//     }
// }

// let {
//     name: fullName,
//     age,
//     address: {pincode: code, arr:[a,b]},
// } = obj;

// console.log(fullName)
// console.log(age)
// console.log(code)

// console.log(a,b);


// array destructuring in function parameters

// function sum([a, b]){
//     console.log(a + b);
// }

// // let a = 10, b = 5;
// let arr = [10, 5]
// sum(arr);


// object destructuring in function parameters
// function greet({name, age}){
//     console.log(`hello ${name}, your age is ${age}`)
// }

// let obj = {
//     name: 'manas kumar lal',
//     age:21,
// }

// greet(obj);


// Q.1

// let arr = [1,2,3];
// let copyArr = {...arr};
// console.log(copyArr)


// Q.2
// let obj = {
//     name: 'manas kumar lal',
//     age: 21,
// }

// let objWithCity = {
//     ...obj,
//     city:'bhagalpur'
// }

// objWithCity.streetAddress = 'road';

// console.log(objWithCity)
// console.log(obj);


// Q.3

// function seperateEvenOdd(...arr) {
//     let even = arr.filter((elem) => {
//         return elem % 2 === 0
//     })
//     let odd = arr.filter((elem) => {
//         return elem % 2 !== 0
//     })
//     return {
//         even,
//         odd
//     }
// }


// let { even, odd } = seperateEvenOdd(1, 2, 3, 5, 9, 10, 11)

// console.log(even)
// console.log(odd)

function useState(initialValue){
    let value = initialValue;

    function setValue(val){
        value = val
    }

    function getValue(){
        return value;
    }

    return [getValue, setValue];
}


let [getCount, setCount] = useState(0);
console.log(getCount());
setCount(5);
console.log(getCount());