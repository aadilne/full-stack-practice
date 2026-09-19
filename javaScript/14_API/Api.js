
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