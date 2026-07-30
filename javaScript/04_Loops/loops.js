

console.log("loop practice");

// for loop
{
for(let i = 0 ; i<=5 ; i++){
    console.log("i will not talk in class");
}

}

{
    for(let i = 5; i <= 8; i++){
    console.log(i);
    }

}

//10 to 1 resverse print
{
    for(let i=10 ; i>=1; i--){
        console.log(i);
    }

}

// 1 to 20 even number

{
    for(let i = 0 ; i<=20; i++){
        if (i %2===0){
            console.log(i);
        }
    }

}

// 1 to 20 odd number
{
for (let i = 0; i<=20; i++){
    if (i%2 !== 0){
        console.log(i);
    }
}

}



// whil loop

{
    let i = 1;

while(i <= 5){
    console.log(i);
    i++;
}

}

{

    let i = 5;

while(i >= 1){
    console.log(i);
    i--;
}

}


{

    let i = 10;

while(i < 5){
    console.log(i);
    i++;
}

}


{

    let password = "";

while (password !== "1234") {
    password = prompt("Enter Password");
}

}


// do while loop
{
    
    let i = 10;

do{
    console.log(i);
    i++;
}while(i < 5);

}


// {

//     do{
//    GameStart();
// }while(player === "Yes");
// }


//break and continue 

{

    for(let i = 1; i <= 10; i++){

    if(i === 5){
        break;
    }

    console.log(i);

}

}


{
   for(let i = 1; i <= 10; i++){

    if(i === 5){

        continue;
    }

    console.log(i);

} 

}


{

    for(let i = 1; i <= 5; i++){

    console.log("Start");

    if(i === 3){
        continue;
    }

    console.log(i);

    console.log("End");

}
}

// with index
{
const fruits = ["Apple", "Mango", "Banana"];

for(let i = 0; i < fruits.length; i++){
    console.log(i, fruits[i]);
}

}

// without index
// for of loop use for value  
// for in loop use for key and index

{
    const fruits = ["Apple", "Mango", "Banana"];

   for(let fruit of fruits){

      console.log(fruit);
    }

}


{
    const numbers = [10, 20, 30];

    for(let num of numbers){
    console.log(num);
    }

}


{

    const names = ["Aadil", "Rahul"];

    for(let name of names){
    console.log("Hello " + name);
}
}



{

let x = 100;

for(let x of [10, 20]){
    console.log(x);
}
console.log(x);

}


// for in loop use for key and index
// for in 

{

const fruits = ["Apple", "Mango", "Banana"];

for(let index in fruits){
    console.log(index);   // only prit index number not value
}
}



{

const fruits = ["Apple", "Mango", "Banana"];

for(let index in fruits){
    console.log(index, fruits[index]);  // print value and index both
}
}



{
    const student = {
    name: "Aadil",
    age: 22,
    city: "Patna"
}

for(let key in student){
    console.log(key);     // only print key
}

}




{
    const student = {
    name: "Aadil",
    age: 22,
    city: "Patna"
 };

 for(let key in student){
    console.log(key , student[key]);     // key and value both print
 }

}


// nested loop
{
    for (let i = 0; i<=4; i++){
        let row = "";

        for (let j =0; j<=4; j++){
             row += j + " ";
            
        }
        console.log(row)

    }

}

