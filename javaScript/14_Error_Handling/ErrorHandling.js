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

        // We can also create an error here
        // Uncomment the next line to test the error

        // console.log(ehP3FakeData);
    }

    catch (ehP3CleanupError) {

        // If an error occurs,
        // catch will handle that error

        console.log("Work error:", ehP3CleanupError.message);

        ehP3Result.textContent = "Error handled during work.";

    }

    finally {

        // Cleanup code belongs here
        // This block executes after the work is finished

        console.log("Cleanup completed");
        // Update the final status

        ehP3Result.textContent += " Cleanup completed.";

    }

});