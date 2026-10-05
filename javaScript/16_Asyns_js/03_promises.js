
let promise = new Promise((resolve ,  reject) => {
    // resolve(
    //     {name : "Aadil Nezam",
    //     age : 22,
    //     city : "Ara"
    //         }
    // )

    reject(
        "Error: Data not found"
    )
})

promise.then((data) => {
    console.log(data.city);
}).catch((error) => {
    console.log(error);
})



// let p1 = new Promise((resolve, reject)=>{
//     console.log("this is a promise")
//     // resolve({
//     //     name:"Aadil Nezam",
//     // })
//     reject("something went wrong..!!")
// })

// // p1.then((data)=>{
// //     console.log(data)
// // })

// // p1.catch((err)=>{
// //     console.log(err)
// // })


// p1.then((data)=>{
//     console.log(data);
// }).catch((err)=>{
//     console.log(err);
// })


let p1 = new Promise((resolve, reject) => {
    setTimeout(() => {
        reject({
            name: "arish shekh",
        })
    }, 5000);
})

p1.then((data) => {
    console.log(data);
}).catch((err) => {
    console.error(err);
})


// function fetchData() {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             resolve({
//                 name: 'Aadil Nezam',
//             })
//         }, 3000);
//     })
// }

// function fetchData2() {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             resolve({
//                 product: 'samsung s23',
//             })
//         }, 5000);
//     })
// }



// console.log("fetching data...")
// fetchData()
//     .then((data) => {
//         console.log("data aa chuka h", data);
//         return fetchData2()
//     })
//     .then((data) => {
//         console.log("data2 bhi aa chuka h", data)
//         return fetchData2()
//     })
//     .then((data)=>{
//         console.log("final data3 bhi aa chuka h", data)
//     })
//     .catch((err)=>{
//         console.log(err);
//     })


// let response = fetch('https://jsonplaceholder.typicode.com/users');
// response
//     .then(data => {
//         console.log(data)
//         return fetch('https://jsonplaceholder.typicode.com/users');
//     })
//     .then((data) => {
//         console.log(data);
//     })
//     .catch(err => {
//         console.log(err)
//     })