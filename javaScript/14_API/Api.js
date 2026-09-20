
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



