console.log("Error Hnadling Practice");


// Phase 2: JavaScript Error Handling


let ehP2BasicBtn = document.getElementById("ehP2BasicBtn");
let ehP2DetailsBtn = document.getElementById("ehP2DetailsBtn");
let ehP2MultiBtn = document.getElementById("ehP2MultiBtn");
let ehP2NestedBtn = document.getElementById("ehP2NestedBtn");
let ehP2SafeBtn = document.getElementById("ehP2SafeBtn");

let ehP2Result = document.getElementById("ehP2Result");


// 1. Basic try-catch
// try contains code that may cause an error
ehP2BasicBtn.addEventListener("click", function () {

    try {

        console.log(ehP2UnknownValue);      // This variable does not exist

    }
    catch (ehP2BasicError) {        // i can add anythin paramenter in catch method

        ehP2Result.textContent = "Error handled successfully";      // catch handles the error

    }

});


// 2. Error object
// catch receives the error object

ehP2DetailsBtn.addEventListener("click", function () {

    try {
        
        console.log(ehP2MissingVariable);  // This creates a ReferenceError

    }
    catch (Error) {

        
        console.log(Error);   // Print complete error object
        
        console.log(Error.name);   // Print error name

        console.log(Error.message);  // Print error message
        
        console.log(Error.stack);   // Print detailed error information


        ehP2Result.innerHTML = "Error Name: " + Error.name + "<br>" +
                                                                        "Error Message: " + Error.message;

    }

});


// 3. Multiple statements inside try

ehP2MultiBtn.addEventListener("click", function () {

    try {

        console.log("Step 1");

        let ehP2FirstNumber = 10;
        console.log(ehP2FirstNumber);

        console.log("Step 2");
        
        console.log(ehP2NotAvailable);      // Error occurs here

        console.log("Step 3");          // This line will not execute

    }
    catch (ehP2MultipleError) {

        console.log("Error handled");

        ehP2Result.textContent = "Error occurred. Statements after the error were skipped.";

    }

});


// 4. Nested try-catch

ehP2NestedBtn.addEventListener("click", function () {

    try {

        console.log("Outer try started");

        try {

            console.log(ehP2InnerMissingValue);   // Inner try creates an error

        }
        catch (ehP2InnerError) {

            console.log("Inner error handled");     // Inner catch handles the error

            ehP2Result.textContent = "Inner catch handled the error.";

        }

        console.log("Outer try continues");

    }
    catch (ehP2OuterError) {

        console.log("Outer error handled");     // Outer catch handles outer errors

    }

});


// 5. try without an error

ehP2SafeBtn.addEventListener("click", function () {

    try {

        let ehP2NumberOne = 20;
   

        let ehP2Total = ehP2NumberOne + ehP2NumberTwo;

        console.log(ehP2Total);

        ehP2Result.textContent = "No error. Result = " + ehP2Total;

    }
    catch (ehP2SafeError) {      

        ehP2Result.textContent = "An error occurred." + ehP2SafeError.name;

    }

});

// error.name    → Error type
// error.message → Error message
// error.stack   → Detailed error information


// Phase 3: finally

let ehP3ErrorBtn = document.getElementById("ehP3ErrorBtn");
let ehP3SuccessBtn = document.getElementById("ehP3SuccessBtn");
let ehP3ReturnBtn = document.getElementById("ehP3ReturnBtn");
let ehP3CleanupBtn = document.getElementById("ehP3CleanupBtn");

let ehP3Result = document.getElementById("ehP3Result");

// 1. ERROR + FINALLY

// Run this code when the first button is clicked

ehP3ErrorBtn.addEventListener("click", function () {

    try {

        console.log("Try block started");       // try contains code that may create an error

        console.log(ehP3UnknownValue);       // This variable does not exist. So JavaScript will create an error here.
 
        console.log("This line will not execute");   // This line will NOT run. Execution stops when the error occurs.

    }

    catch (ehP3Error) {

        console.log("Catch block executed");      // catch runs because an error occurred in try

        ehP3Result.textContent = "Error handled by catch.";

    }

    finally {

        console.log("Finally block executed");      // finally runs after try/catch It runs even when an error occurs

        ehP3Result.textContent += " Finally also executed.";      // // Show that finally has also executed

    }

});

// 2. SUCCESS + FINALLY
// Run this code when the second button is clicked

ehP3SuccessBtn.addEventListener("click", function () {

    try {
        // No error will occur here

        let ehP3FirstNumber = 20;
        let ehP3SecondNumber = 30;

        let ehP3Total = ehP3FirstNumber + ehP3SecondNumber;

        console.log(ehP3Total);   

        ehP3Result.textContent = "Result = " + ehP3Total;  // Display result on webpage

    }

    catch (ehP3SuccessError) {   // catch will NOT run because there is no error

        console.log("Catch did not execute");

    }

    finally {

        // finally WILL execute It does not matter whether an error happened or not
        console.log("Finally executed");

        ehP3Result.textContent += " Finally executed.";

    }

});

// 3. RETURN + FINALLY

// A function that returns a value

function ehP3ReturnExample() {

    try {

        return "Value returned from try";   // return sends this value back from the function

    }

    finally {
        // Even though return is used finally executes before the function finishes

        console.log("Finally executed before return");

    }

}

ehP3ReturnBtn.addEventListener("click", function () {

    // Call the function

    let ehP3ReturnValue = ehP3ReturnExample();

    // Show the returned value
    ehP3Result.textContent = ehP3ReturnValue + " | Finally was executed first.";

});


// 4. CLEANUP EXAMPLE

ehP3CleanupBtn.addEventListener("click", function () {

    // Imagine that we are starting some work

    ehP3Result.textContent = "Work started...";

    try {

        // Simulate some work
        console.log("Work is running");   

        let ehP3WorkValue = 100;

        console.log("Work value:", ehP3WorkValue);

//        console.log(ehP3FakeData);       // We can also create an error here Uncomment the next line to test the error
    }

    catch (ehP3CleanupError) {

        // If an error occurs, catch will handle that error

        console.log("Work error:", ehP3CleanupError.message);

        ehP3Result.textContent = "Error handled during work.";

    }

    finally {

        // Cleanup code belongs here
        // This block executes after the work is finished

        console.log("Cleanup completed");
        
        ehP3Result.textContent += " Cleanup completed.";    // Update the final status
    }

});



// PHASE 4 - THROW new error

let ehP4ErrorBtn = document.getElementById("ehP4ErrorBtn");

let ehP4StringBtn = document.getElementById("ehP4StringBtn");

let ehP4NumberBtn = document.getElementById("ehP4NumberBtn");

let ehP4ObjectBtn = document.getElementById("ehP4ObjectBtn");

let ehP4ValidationBtn = document.getElementById("ehP4ValidationBtn");

let ehP4Result = document.getElementById("ehP4Result");

// 2. throw new Error()

// Run when "Throw Error" button is clicked

ehP4ErrorBtn.addEventListener("click", function () {

    try {

        throw new Error( "This is a manually created error.");  // throw manually creates an error
    }
    catch (ehP4Error) {

        console.log( "Error Name:", ehP4Error.name );   // catch receives the thrown Error object error.name gives the error type

        console.log( "Error Message:", ehP4Error.message);

        ehP4Result.textContent = ehP4Error.message;

    }

});

// 3. throw with String

ehP4StringBtn.addEventListener("click", function () {

    try {

        throw "This is a string error.";    // A string can also be thrown

    }
    catch (ehP4StringError) {

        console.log(ehP4StringError);   // catch receives the thrown string

        ehP4Result.textContent = ehP4StringError;
    }

});

// 4. throw with Number

ehP4NumberBtn.addEventListener("click", function () {

    try {


        throw 404;      // A number can also be thrown

    }
    catch (ehP4NumberError) {   // catch receives the number

        console.log( "Error Code:", ehP4NumberError );

        ehP4Result.textContent = "Error Code: " + ehP4NumberError;

    }

});

// 5. throw with Object

ehP4ObjectBtn.addEventListener("click", function () {

    try {

        // We can throw an object  containing custom information
        throw {
            code: 400,
            message: "Invalid request"
        };

    }
    catch (ehP4ObjectError) {    // Access the object's properties

        console.log( "Code:", ehP4ObjectError.code );

        console.log( "Message:", ehP4ObjectError.message );

        ehP4Result.textContent = "Code: " + ehP4ObjectError.code + " | " + ehP4ObjectError.message;

    }

});


// 6. Validation using throw

// This function checks the user's age
function ehP4CheckAge(age) {

    // Check if age is less than 18

    if (age < 18) {                 // The condition is invalid, so manually create an error

        throw new Error( "Age must be 18 or above." );
    }

    return "Access allowed.";    // This line runs only when the age is valid

}


// Run when "Check Age" button is clicked

ehP4ValidationBtn.addEventListener( "click", function () {

        try {

            let ehP4AgeResult = ehP4CheckAge(15);       // Test the function with age 15

            ehP4Result.textContent = ehP4AgeResult;   // This line runs only if no error was thrown

        }
        catch (ehP4AgeError) {          // The error thrown inside the function comes here

            console.log( ehP4AgeError.message );

            ehP4Result.textContent = ehP4AgeError.message;

        }

    }
);


// PHASE 5 BUILT-IN ERROR TYPES

let ehP5ErrorBtn = document.getElementById("ehP5ErrorBtn");

let ehP5TypeBtn = document.getElementById("ehP5TypeBtn");

let ehP5ReferenceBtn = document.getElementById("ehP5ReferenceBtn");

let ehP5RangeBtn = document.getElementById("ehP5RangeBtn");

let ehP5UriBtn = document.getElementById("ehP5UriBtn");

let ehP5AggregateBtn = document.getElementById("ehP5AggregateBtn");

let ehP5CheckBtn = document.getElementById("ehP5CheckBtn");

let ehP5Result = document.getElementById("ehP5Result");


// 2. Error
// Error JavaScript ka basic/general error object hai.

// Run when Error button is clicked

ehP5ErrorBtn.addEventListener("click", function () {

    try {

        throw new Error("This is a normal Error.");    // Manually create a normal Error

    }
    catch (ehP5Error) {

        console.log("Error Name:",ehP5Error.name);      // Show the error type

        console.log( "Error Message:", ehP5Error.message);      // Show the error message

        ehP5Result.textContent = ehP5Error.name + ": " + ehP5Error.message;     // Display result

    }

});


// 3. TypeError
// TypeError tab aata hai jab hum kisi value ko wrong type ke tarike se use karte hain.
ehP5TypeBtn.addEventListener("click", function () {

    try {

        let ehP5Number = 100;       // This is a number

        // toUpperCase() belongs to strings, so using it on a number causes TypeError

        ehP5Number.toUpperCase();

    }
    catch (ehP5TypeError) {

        // Print the error name

        console.log( "Error Name:", ehP5TypeError.name);

        console.log( "Error Message:", ehP5TypeError.message );   // Print the error message

        ehP5Result.textContent = ehP5TypeError.name + ": " + ehP5TypeError.message;  // Show result

    }

});

// 4. ReferenceError
// Jab hum kisi exist na karne wale variable ko access karte hain.

ehP5ReferenceBtn.addEventListener( "click", function () {

        try {
            console.log(ehP5UnknownVariable);  // This variable does not exist

        }
        catch (ehP5ReferenceError) {

            // JavaScript creates ReferenceError
            console.log( "Error Name:", ehP5ReferenceError.name );

            // Show the message

            console.log( "Error Message:", ehP5ReferenceError.message );

            ehP5Result.textContent = ehP5ReferenceError.name + ": " + ehP5ReferenceError.message;

        }

    }
);


// 5. RangeError
// Jab koi value allowed range ke bahar hoti hai.

ehP5RangeBtn.addEventListener("click", function () {

    try {

        // toFixed() does not accept an extremely large number of digits

        let ehP5Price = 25.50;

        ehP5Price.toFixed(100);

    }
    catch (ehP5RangeError) {

        console.log( "Error Name:", ehP5RangeError.name );

        console.log( "Error Message:", ehP5RangeError.message );

        ehP5Result.textContent = ehP5RangeError.name + ": " + ehP5RangeError.message;

    }

});


// 6. URIError
// URI-related function ko invalid URI data dene par URIError aa sakta hai.

ehP5UriBtn.addEventListener("click", function () {

    try {

        // "%" alone is not a valid // URI encoded value

        decodeURIComponent("%");

    }
    catch (ehP5UriError) {

        // Show the error type

        console.log( "Error Name:", ehP5UriError.name );

        console.log( "Error Message:", ehP5UriError.message );

        ehP5Result.textContent = ehP5UriError.name + ": " + ehP5UriError.message;

    }

});

// 7. AggregateError
// Jab multiple errors ko ek saath represent karna ho, AggregateError useful hai.

ehP5AggregateBtn.addEventListener( "click", function () {

        // Create multiple Error objects

        let ehP5ErrorList = [

            new Error("First error"),

            new Error("Second error"),

            new Error("Third error")

        ];


        // Put multiple errors into one AggregateError

        let ehP5Aggregate = new AggregateError(ehP5ErrorList, "Multiple errors occurred." );

        console.log(ehP5Aggregate);

        // The errors property contains the individual errors

        console.log( ehP5Aggregate.errors );

        ehP5Result.textContent = ehP5Aggregate.name + ": " +ehP5Aggregate.message;

    }
);


// 8. instanceof

ehP5CheckBtn.addEventListener( "click", function () {

        try {

            console.log( ehP5MissingVariable );     // Create a ReferenceError

        }
        catch (ehP5CheckError) {

            let ehP5IsError = ehP5CheckError instanceof Error;      // Check if it is an Error

            let ehP5IsTypeError = ehP5CheckError instanceof TypeError;  // // Check if it is a TypeError

            let ehP5IsReferenceError = ehP5CheckError instanceof ReferenceError;    // Check if it is a ReferenceError

            // Print all results
            console.log( "Is Error:", ehP5IsError );

            console.log( "Is TypeError:", ehP5IsTypeError );

            console.log( "Is ReferenceError:", ehP5IsReferenceError );

            ehP5Result.innerHTML = "Error: " + ehP5IsError + "<br>TypeError: " + ehP5IsTypeError +
                        "<br>ReferenceError: " + ehP5IsReferenceError;

        }

    }
);


// PHASE 8 - PROMISE ERROR HANDLING

// Get HTML elements
let ehP8RejectBtn = document.getElementById("ehP8RejectBtn");
let ehP8CatchBtn = document.getElementById("ehP8CatchBtn");
let ehP8FinallyBtn = document.getElementById("ehP8FinallyBtn");
let ehP8ThrowBtn = document.getElementById("ehP8ThrowBtn");
let ehP8PropagationBtn = document.getElementById("ehP8PropagationBtn");
let ehP8MultipleCatchBtn = document.getElementById("ehP8MultipleCatchBtn");
let ehP8AllBtn = document.getElementById("ehP8AllBtn");
let ehP8AllSettledBtn = document.getElementById("ehP8AllSettledBtn");
let ehP8RaceBtn = document.getElementById("ehP8RaceBtn");
let ehP8AnyBtn = document.getElementById("ehP8AnyBtn");
let ehP8AggregateBtn = document.getElementById("ehP8AggregateBtn");

let ehP8Result = document.getElementById("ehP8Result");


// 1. PROMISE REJECTION

ehP8RejectBtn.addEventListener("click", function () {

    let ehP8RejectPromise = new Promise(function (resolve, reject) {

        let ehP8IsSuccessful = false;

        // Check whether operation was successful
        if (ehP8IsSuccessful) {

            resolve("Operation successful.");
        }
        else {

            // Reject the Promise
            reject(new Error("Operation failed."));
        }
    });


    ehP8RejectPromise

        .catch(function (ehP8RejectError) {

            // Handle rejected Promise
            ehP8Result.textContent = "Rejected: " + ehP8RejectError.message;
        });
});

// 2. THEN().CATCH()

ehP8CatchBtn.addEventListener("click", function () {

    let ehP8DataPromise = new Promise(function (resolve, reject) {

        let ehP8DataFound = false;

        // Check whether data exists
        if (ehP8DataFound) {

            resolve("Data found.");
        }
        else {

            reject(new Error("Data not found."));
        }
    });


    ehP8DataPromise

        .then(function (ehP8Data) {

            // Handle success
            ehP8Result.textContent = ehP8Data;
        })

        .catch(function (ehP8DataError) {

            // Handle error
            ehP8Result.textContent = "Error: " + ehP8DataError.message;
        });
});


// 3. FINALLY

ehP8FinallyBtn.addEventListener("click", function () {

    let ehP8FinallyPromise = Promise.reject(
        new Error("Request failed.")
    );


    ehP8FinallyPromise

        .catch(function (ehP8FinallyError) {

            // Handle the error
            ehP8Result.textContent = ehP8FinallyError.message;
        })

        .finally(function () {

            // This always runs
            console.log("Request finished.");
        });
});

// 4. THROW INSIDE THEN

ehP8ThrowBtn.addEventListener("click", function () {

    Promise.resolve("User found.")

        .then(function (ehP8UserMessage) {

            // Show success message
            console.log(ehP8UserMessage);

            // Create an error inside then
            throw new Error("User processing failed.");
        })

        .catch(function (ehP8ThenError) {

            // Catch error from then
            ehP8Result.textContent = "Then error: " + ehP8ThenError.message;
        });
});


// 5. ERROR PROPAGATION

ehP8PropagationBtn.addEventListener("click", function () {

    Promise.resolve("Start")

        .then(function () {

            // Create error
            throw new Error("First step failed.");
        })

        .then(function () {

            // This will not run
            console.log("Second step");
        })

        .catch(function (ehP8PropagationError) {

            // Catch propagated error
            ehP8Result.textContent = "Propagation: " + ehP8PropagationError.message;
        });
});


// 6. MULTIPLE CATCH

ehP8MultipleCatchBtn.addEventListener("click", function () {

    Promise.reject(new Error("First error."))

        .catch(function (ehP8FirstError) {

            // Handle first error
            console.log( "First catch:", ehP8FirstError.message);

            // Throw a new error
            throw new Error("Second error.");
        })

        .catch(function (ehP8SecondError) {

            // Handle second error
            ehP8Result.textContent = "Second catch: " + ehP8SecondError.message;
        });
});

// 7. PROMISE.ALL()

ehP8AllBtn.addEventListener("click", function () {

    let ehP8AllTaskOne = Promise.resolve("Task 1 complete.");

    let ehP8AllTaskTwo = Promise.resolve("Task 2 complete.");

    let ehP8AllTaskThree = Promise.reject(
        new Error("Task 3 failed.")
    );


    Promise.all([ ehP8AllTaskOne, ehP8AllTaskTwo, ehP8AllTaskThree ])

    .then(function (ehP8AllResults) {

        // Run when all Promises succeed
        ehP8Result.textContent = ehP8AllResults.join(" | ");
    })

    .catch(function (ehP8AllError) {

        // One rejection makes Promise.all reject
        ehP8Result.textContent = "Promise.all Error: " + ehP8AllError.message;
    });
});


// 8. PROMISE.ALLSETTLED()

ehP8AllSettledBtn.addEventListener("click", function () {

    let ehP8SettledOne = Promise.resolve("User loaded.");

    let ehP8SettledTwo = Promise.reject( new Error("Orders failed.") );


    Promise.allSettled([ ehP8SettledOne, ehP8SettledTwo ])

    .then(function (ehP8SettledResults) {

        // Convert results into readable text
        let ehP8SettledOutput = ehP8SettledResults.map(function (ehP8Item) {

                return ehP8Item.status;
            });

        ehP8Result.textContent = "Results: " + ehP8SettledOutput.join(" | ");
    });
});

// 9. PROMISE.RACE()

ehP8RaceBtn.addEventListener("click", function () {

    let ehP8RaceOne = new Promise(function (resolve) {

        setTimeout(function () {

            resolve("Server 1 success.");
        }, 1000);
    });


    let ehP8RaceTwo = new Promise(function (resolve, reject) {

        setTimeout(function () {

            reject(new Error("Server 2 failed first."));
        }, 500);
    });


    Promise.race([ ehP8RaceOne, ehP8RaceTwo ])

    .then(function (ehP8RaceResult) {

        // First settled Promise succeeded
        ehP8Result.textContent = ehP8RaceResult;
    })

    .catch(function (ehP8RaceError) {

        // First settled Promise rejected
        ehP8Result.textContent = "Race Error: " + ehP8RaceError.message;
    });
});

// 10. PROMISE.ANY()

ehP8AnyBtn.addEventListener("click", function () {

    let ehP8AnyOne = Promise.reject( new Error("Server 1 failed.") );

    let ehP8AnyTwo = Promise.reject( new Error("Server 2 failed."));

    let ehP8AnyThree = Promise.resolve( "Server 3 success." );


    Promise.any([ ehP8AnyOne, ehP8AnyTwo, ehP8AnyThree ])

    .then(function (ehP8AnyResult) {

        // First fulfilled Promise wins
        ehP8Result.textContent = "Any: " + ehP8AnyResult;
    })

    .catch(function (ehP8AnyError) {

        // Runs only when all Promises reject
        ehP8Result.textContent =
            ehP8AnyError.name;
    });
});

// 11. AGGREGATEERROR

ehP8AggregateBtn.addEventListener("click", function () {

    Promise.any([

        Promise.reject( new Error("Server 1 failed.")),

        Promise.reject(new Error("Server 2 failed.")),

        Promise.reject( new Error("Server 3 failed."))

    ])

    .catch(function (ehP8AggregateError) {

        // All Promises rejected
        console.log( ehP8AggregateError.name );

        // Show all errors
        console.log( ehP8AggregateError.errors );

        ehP8Result.textContent = ehP8AggregateError.name +" - All Promises rejected.";
    });
});

