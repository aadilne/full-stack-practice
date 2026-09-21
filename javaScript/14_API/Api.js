
console.log("Api Practice");

async function  apiFunction() {

    let uData = await fetch("https://jsonplaceholder.typicode.com/posts/2");

    console.log(await uData.json());
}

apiFunction();

console.log("blabal");
console.log("next line ");


//Phase 1 — API Fundamentals

const apiFundamentalButton = document.querySelector("#apiFundamentalButton"); // Select the API button

const apiResultOutput =document.querySelector("#apiResultOutput"); // Select the result paragraph

const apiBodyOutput = document.querySelector("#apiBodyOutput"); // Select the request body area

const apiRequestMethod = document.querySelector("#apiRequestMethod"); // Select the request method text

const apiRequestEndpoint = document.querySelector("#apiRequestEndpoint"); // Select the endpoint text

const apiRequestParameter = document.querySelector("#apiRequestParameter"); // Select the parameter text

const apiRequestQuery = document.querySelector("#apiRequestQuery"); // Select the query parameter text

const apiResponseStatus = document.querySelector("#apiResponseStatus"); // Select the response status text

const apiHeaderOutput = document.querySelector("#apiHeaderOutput"); // Select the header text

const apiAuthOutput = document.querySelector("#apiAuthOutput"); // Select the authentication text


apiFundamentalButton.addEventListener( "click", function apiFundamentalRequestHandler() { // Run API simulation on button click

        const apiFundamentalBaseUrl = "https://example.com/api"; // Store the API base URL

        const apiFundamentalRoute = "/users"; // Store the API route

        const apiFundamentalUserId = 101; // Store the user ID parameter

        const apiFundamentalCity = "Ara"; // Store the query parameter value


        const apiFundamentalFullUrl = apiFundamentalBaseUrl + apiFundamentalRoute + "?city=" + apiFundamentalCity; // Build the complete API URL


        const apiFundamentalRequestBody = {
            name: "Aadil",
            city: "Ara"
        };                              // Create sample request body data


        const apiFundamentalHeaders = {
            "Content-Type": "application/json"
        };                                  // Create sample request headers


        const apiFundamentalResponse = {
            status: 200,
            message: "User data received successfully"
        };                                      // Create sample API response


        const apiFundamentalAuth = {
            required: true,
            type: "Bearer Token"
        };                                       // Create sample authentication information


        apiRequestMethod.textContent = "Method: GET";                          // Show HTTP method


        apiRequestEndpoint.textContent = "Endpoint: " + apiFundamentalRoute; // Show API endpoint


        apiRequestParameter.textContent = "Parameter: userId = " + apiFundamentalUserId; // Show parameter


        apiRequestQuery.textContent = "Query: city = " + apiFundamentalCity; // Show query parameter


        apiBodyOutput.textContent = JSON.stringify( apiFundamentalRequestBody, null, 2 );// Convert request body object into readable text


        apiResponseStatus.textContent = "Status: " + apiFundamentalResponse.status; // Show response status code


        apiHeaderOutput.textContent = "Content-Type: " + apiFundamentalHeaders["Content-Type"]; // Show request header


        apiAuthOutput.textContent = "Authentication: " + apiFundamentalAuth.type; // Show authentication type


        apiResultOutput.textContent = apiFundamentalResponse.message + " | URL: " + apiFundamentalFullUrl; // Show final API result
    }
);

// Phase 2 — Complete Combined Example

const hOut = document.querySelector("#outText"); // Select final output

const hPro = document.querySelector("#httpProOut"); // Select protocol output

const rUrl = document.querySelector("#reqUrl"); // Select request URL
const rMet = document.querySelector("#reqMet"); // Select request method
const rHead = document.querySelector("#reqHead"); // Select request headers

const sSta = document.querySelector("#resSta"); // Select response status
const sHead = document.querySelector("#resHead"); // Select response headers
const sBody = document.querySelector("#resBody"); // Select response body

const gBtn = document.querySelector("#getBtn"); // Select GET button
const pBtn = document.querySelector("#postBtn"); // Select POST button
const uBtn = document.querySelector("#putBtn"); // Select PUT button
const xBtn = document.querySelector("#patchBtn"); // Select PATCH button
const dBtn = document.querySelector("#delBtn"); // Select DELETE button
const hdBtn = document.querySelector("#headBtn"); // Select HEAD button
const oBtn = document.querySelector("#optBtn"); // Select OPTIONS button


const hUrl = "https://api.example.com/users"; // Store sample API URL

const hHead = {
    "Content-Type": "application/json", // Tell server that data is JSON
    "Accept": "application/json", // Tell server that JSON response is accepted
    "Authorization": "Bearer TOKEN" // Send authentication information
};


function showHttp(m, s, b) { // Create function to show HTTP information

    hPro.textContent = "HTTPS"; // Show secure HTTP protocol

    rUrl.textContent = "URL: " + hUrl; // Show request URL

    rMet.textContent = "Method: " + m; // Show HTTP method

    rHead.textContent = "Request Headers: Content-Type, Accept, Authorization"; // Show request headers

    sSta.textContent = "Status: " + s; // Show response status code

    sHead.textContent = "Response Headers: Content-Type: application/json"; // Show response headers

    sBody.textContent = "Body: " + b; // Show response body

    hOut.textContent = m + " request → " + s + " → " + b; // Show final result
}


gBtn.addEventListener("click", function () { // Run when GET button is clicked

    showHttp( "GET", 200, "Data received" ); // Show successful GET request

});


pBtn.addEventListener("click", function () { // Run when POST button is clicked

    showHttp( "POST", 201, "Data created" ); // Show successful POST request

});


uBtn.addEventListener("click", function () { // Run when PUT button is clicked

    showHttp( "PUT", 200, "Data completely updated" ); // Show successful PUT request

});


xBtn.addEventListener("click", function () { // Run when PATCH button is clicked

    showHttp( "PATCH", 200, "Data partially updated" ); // Show successful PATCH request

});


dBtn.addEventListener("click", function () { // Run when DELETE button is clicked

    showHttp( "DELETE", 204, "Data deleted" ); // Show successful DELETE request

});


hdBtn.addEventListener("click", function () { // Run when HEAD button is clicked

    showHttp( "HEAD", 200, "Headers received" ); // Show response header information

});


oBtn.addEventListener("click", function () { // Run when OPTIONS button is clicked

    showHttp( "OPTIONS", 200, "Allowed methods received"); // Show supported HTTP methods
});


// Phase 3 JSON = JavaScript Object Notation 
// 1. JSON OBJECT
// _______________

const jObj = {                                      // Create a normal JavaScript object
    name: "Aadil",                                  
    age: 22,                                        
    student: true                                   
};

const jObjView = document.querySelector("#jsonObjectView"); // Select the HTML element where object will be shown

jObjView.textContent = JSON.stringify(jObj, null, 2);       // Convert object into readable JSON text and display it

/* Example:
 //Bina 2 ke (ya null, 0):
        JSON{"name":"Aadil","age":22,"student":true}
 
// null, 2 ke saath:
 
 JSON{
   "name": "Aadil",
   "age": 22,
   "student": true
 }*/


// 2. JSON ARRAY


const jArr = [                                      // Create an array containing multiple values
    "HTML",                                        
    "CSS",                                         
    "JavaScript"                                   
];

const jArrView = document.querySelector("#jsonArrayView"); // Select array output element

jArrView.textContent = JSON.stringify(jArr, null, 2);       // Convert array into formatted JSON text



// 3. JSON DATA TYPES

const jStr = "Aadil";                               // JSON String example

const jNum = 22;                                    // JSON Number example

const jBool = true;                                 // JSON Boolean example

const jNull = null;                                 // JSON null means no value


document.querySelector("#jsonStringView").textContent = "String: " + jStr;             // Display the string value

document.querySelector("#jsonNumberView").textContent = "Number: " + jNum;             // Display the number value

document.querySelector("#jsonBooleanView").textContent = "Boolean: " + jBool;          // Display the boolean value

document.querySelector("#jsonNullView").textContent = "Null: " + jNull;                // Display the null value



// 4. NESTED JSON

const jNested = {                           // Create an object
    name: "Aadil",                                  

    address: {                             // Create another object inside the main object
        city: "Ara",                                
        state: "Bihar"                              
    }
};

const jNestedView = document.querySelector("#jsonNestedView"); // Select nested JSON output element

jNestedView.textContent = JSON.stringify(jNested, null, 2);    // Convert nested object into readable JSON



// 5. OBJECTS INSIDE ARRAY

const jUsers = [                                    // Create an array
    {
        id: 1,                                      // First user's ID
        name: "Aadil"                               // First user's name
    },

    {
        id: 2,                                      // Second user's ID
        name: "Rahul"                               // Second user's name
    }
];

const jListView = document.querySelector("#jsonListView"); // Select output element

jListView.textContent = JSON.stringify(jUsers, null, 2);   // Convert array of objects into JSON text



// 6. ARRAY INSIDE OBJECT

const jStudent = {                                  // Create student object

    name: "Aadil",                                  // Store student name

    skills: [                                       // Store multiple skills inside an array
        "HTML",                                     
        "CSS",                                      
        "JavaScript"                                
    ]
};

const jInsideView = document.querySelector("#jsonInsideView"); // Select output element

jInsideView.textContent = JSON.stringify(jStudent, null, 2);    // Convert object containing array into JSON text



// 7. JSON.parse()

const jText = `{
    "name": "Aadil",
    "age": 22,
    "student": true
}`;                                                  // This is JSON stored as a string

const jData = JSON.parse(jText);                    // Convert JSON string into a JavaScript object

const jParseView = document.querySelector("#jsonParseView"); // Select parse output element

jParseView.textContent = jData.name + " - " + jData.age;     // Read values from the converted JavaScript object


// 8. JSON.stringify()

const jProduct = {                                  // Create a JavaScript object

    name: "Laptop",                                 

    price: 50000,                                   

    available: true                                 
};

const jJsonText = JSON.stringify(jProduct);         // Convert JavaScript object into JSON string

const jStringifyView = document.querySelector("#jsonStringifyView");   // Select stringify output element

jStringifyView.textContent = jJsonText;             // Display JSON string



// 9. JSON API RESPONSE

const jApiResponse = {                              // Simulate data received from an API

    success: true,                                  // Tell whether request was successful

    user: {                                         // Store user information inside another object

        id: 101,                                    

        name: "Aadil",                              

        skills: [                                   // User skills stored in an array
            "JavaScript",                           
            "React",                                
            "Node.js"                               
        ]
    }
};

const jApiView = document.querySelector("#jsonApiView"); // Select API output element

jApiView.textContent = JSON.stringify(jApiResponse, null, 2);  // Convert API-like object into readable JSON



// 10. READ JSON DATA

const jReadBtn = document.querySelector("#jsonReadBtn");  // Select the button

const jResultView = document.querySelector("#jsonResultView");            // Select the result paragraph


function readJson() {                                     // Create a function to read JSON data

    const jName = jApiResponse.user.name;                 // Access name from nested JSON data

    const jSkill = jApiResponse.user.skills[0];           // Access first skill from the skills array

    jResultView.textContent = "Name: " + jName + " | First Skill: " + jSkill; // Show selected JSON values on the webpage
}

jReadBtn.addEventListener("click", readJson);             // Run readJson function when button is clicked

