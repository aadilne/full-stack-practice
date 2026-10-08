
//localStorage ka data normally browser ke future visits/reloads me bhi available rehta hai, jab tak remove/clear na kiya jaye.
const phaseTwoNameInput = document.getElementById("phaseTwoNameInput");
const phaseTwoSaveBtn = document.getElementById("phaseTwoSaveBtn");
const phaseTwoReadBtn = document.getElementById("phaseTwoReadBtn");
const phaseTwoDeleteBtn = document.getElementById("phaseTwoDeleteBtn");
const phaseTwoClearBtn = document.getElementById("phaseTwoClearBtn");
const phaseTwoResultText = document.getElementById("phaseTwoResultText");


// Save data
phaseTwoSaveBtn.addEventListener("click", function () {

    const phaseTwoNameValue = phaseTwoNameInput.value;

    // Save name in Local Storage
    localStorage.setItem("phaseTwoUserName", phaseTwoNameValue);

    phaseTwoResultText.textContent = "Name saved";
});


// Read data
phaseTwoReadBtn.addEventListener("click", function () {

    // Get name from Local Storage
    const phaseTwoSavedName = localStorage.getItem("phaseTwoUserName");

    if (phaseTwoSavedName !== null) {

        phaseTwoResultText.textContent = phaseTwoSavedName;

    } else {

        phaseTwoResultText.textContent = "Name not found";
    }
});


// Delete one item
phaseTwoDeleteBtn.addEventListener("click", function () {

    // Remove one key
    localStorage.removeItem("phaseTwoUserName");

    phaseTwoResultText.textContent = "Name deleted";
});


// Clear all Local Storage
phaseTwoClearBtn.addEventListener("click", function () {

    // Remove all Local Storage data
    localStorage.clear();

    phaseTwoResultText.textContent = "All storage cleared";
});



// sessionStorage ka data current browser tab/session ke liye hota hai. Tab close hone par normally us tab ka session storage remove ho jata hai. 

// sessionStorage.setItem("key", "value"); // Save data

const sessionStudentInput = document.getElementById("sessionStudentInput");
const sessionSaveBtn = document.getElementById("sessionSaveBtn"); 
const sessionReadBtn = document.getElementById("sessionReadBtn"); 
const sessionDeleteBtn = document.getElementById("sessionDeleteBtn"); 
const sessionClearBtn = document.getElementById("sessionClearBtn"); 
const sessionOutputText = document.getElementById("sessionOutputText"); 


sessionSaveBtn.addEventListener("click", function () { 

    const sessionStudentName = sessionStudentInput.value; // Get input value

    sessionStorage.setItem("phaseThreeStudent", sessionStudentName); // Save name

    sessionOutputText.textContent = "Name saved"; // Show success message
});


sessionReadBtn.addEventListener("click", function () { 

    const sessionSavedStudent = sessionStorage.getItem("phaseThreeStudent"); // Get saved name

    if (sessionSavedStudent !== null) { // Check whether data exists

        sessionOutputText.textContent = sessionSavedStudent; // Show saved name

    } else {

        sessionOutputText.textContent = "Name not found"; // Show missing message
    }
});


sessionDeleteBtn.addEventListener("click", function () { 

    sessionStorage.removeItem("phaseThreeStudent"); // Delete one item

    sessionOutputText.textContent = "Name deleted"; // Show delete message
});


sessionClearBtn.addEventListener("click", function () { 

    sessionStorage.clear(); // Delete all session storage data

    sessionOutputText.textContent = "All data cleared"; 
});


//String, Number & Boolean Data
const typeSaveBtn = document.getElementById("typeSaveBtn"); 
const typeReadBtn = document.getElementById("typeReadBtn"); 
const typeOutputText = document.getElementById("typeOutputText"); 


typeSaveBtn.addEventListener("click", function () { 

    const typeUserName = "Aadil";   // string
    const typeUserAge = 25;         // number
    const typeLoginStatus = true;   // boolean

    localStorage.setItem("typeUserName", typeUserName);        // Store string 
    localStorage.setItem("typeUserAge", typeUserAge);          // Store number as string automatically converted in string
    localStorage.setItem("typeLoginStatus", typeLoginStatus);  // Store boolean as string

    typeOutputText.textContent = "Data saved"; // Show save message
});


typeReadBtn.addEventListener("click", function () { 

    const typeSavedName = localStorage.getItem("typeUserName"); 
    const typeSavedAge = localStorage.getItem("typeUserAge"); 
    const typeSavedLogin = localStorage.getItem("typeLoginStatus"); 

    const typeConvertedAge = Number(typeSavedAge);          // Convert age to number
    const typeConvertedLogin = typeSavedLogin === "true";   // Convert string to boolean

    console.log(typeSavedName);     
    console.log(typeof typeSavedName);      // Print string

    console.log(typeSavedAge); 
    console.log(typeof typeSavedAge);       // Print string

    console.log(typeConvertedAge);          
    console.log(typeof typeConvertedAge);       // Print number

    console.log(typeSavedLogin); // Print "true"
    console.log(typeof typeSavedLogin); // Print string

    console.log(typeConvertedLogin); // Print true
    console.log(typeof typeConvertedLogin); // Print boolean

    typeOutputText.textContent =
        `Name: ${typeSavedName} | Age: ${typeConvertedAge} | Login: ${typeConvertedLogin}`; // Show converted data
});


//object and array and JSON.stringify() and JSON.parse()

const phaseFiveSaveObjectBtn = document.querySelector("#phaseFiveSaveObjectBtn"); 
const phaseFiveReadObjectBtn = document.querySelector("#phaseFiveReadObjectBtn"); 
const phaseFiveUpdateObjectBtn = document.querySelector("#phaseFiveUpdateObjectBtn"); 
const phaseFiveSaveArrayBtn = document.querySelector("#phaseFiveSaveArrayBtn"); 
const phaseFiveReadArrayBtn = document.querySelector("#phaseFiveReadArrayBtn"); 
const phaseFiveUpdateArrayBtn = document.querySelector("#phaseFiveUpdateArrayBtn"); 
const phaseFiveDeleteDataBtn = document.querySelector("#phaseFiveDeleteDataBtn"); 
const phaseFiveOutputText = document.querySelector("#phaseFiveOutputText"); 


phaseFiveSaveObjectBtn.addEventListener("click", function () {

    const phaseFiveStudentObject = { 

        name: "Aadil",
        age: 23,

        address: {       // Create nested object

            city: "Ara",
            state: "Bihar"
        },

        skills: ["HTML","CSS","JavaScript"]
    };

    const phaseFiveStudentString = JSON.stringify(phaseFiveStudentObject); // Convert object to string

    localStorage.setItem( "phaseFiveStudentObject", phaseFiveStudentString); // Save object string in Local Storage

    phaseFiveOutputText.textContent = "Object saved successfully"; // Show success message
});


phaseFiveReadObjectBtn.addEventListener("click", function () {

    const phaseFiveStoredObject = localStorage.getItem("phaseFiveStudentObject"); // Read stored data

    if (phaseFiveStoredObject === null) { // Check if data is missing

        phaseFiveOutputText.textContent = "Object not found"; // Show missing message

        return;
    }

    const phaseFiveStudentObject = JSON.parse(phaseFiveStoredObject); // Convert string to object

    console.log(phaseFiveStudentObject); // Show complete object

    console.log(phaseFiveStudentObject.name); // Read name

    console.log(phaseFiveStudentObject.address.city); // Read nested object

    console.log(phaseFiveStudentObject.skills[0]); // Read nested array item

    phaseFiveOutputText.textContent = phaseFiveStudentObject.name + " - " +
            phaseFiveStudentObject.address.city; // Show object data
});


phaseFiveUpdateObjectBtn.addEventListener("click", function () {

    const phaseFiveStoredObject =localStorage.getItem("phaseFiveStudentObject"); // Get stored object

    if (phaseFiveStoredObject === null) { // Check if object exists

        phaseFiveOutputText.textContent = "Object not found"; // Show missing message

        return;
    }

    const phaseFiveStudentObject = JSON.parse(phaseFiveStoredObject); // Convert string to object

    phaseFiveStudentObject.age = 24; // Update age

    phaseFiveStudentObject.address.city = "Patna"; // Update nested city

    phaseFiveStudentObject.skills.push("React"); // Add new skill

    localStorage.setItem( "phaseFiveStudentObject",JSON.stringify(phaseFiveStudentObject)); // Save updated object

    phaseFiveOutputText.textContent = "Object updated successfully"; // Show success message
});


phaseFiveSaveArrayBtn.addEventListener("click", function () {

    const phaseFiveFruitArray = ["Apple","Mango","Banana" ]; // Create an array    

    const phaseFiveFruitString = JSON.stringify(phaseFiveFruitArray); // Convert array to string

    localStorage.setItem( "phaseFiveFruitArray", phaseFiveFruitString ); // Save array in Local Storage

    phaseFiveOutputText.textContent = "Array saved successfully"; // Show success message
});


phaseFiveReadArrayBtn.addEventListener("click", function () {

    const phaseFiveStoredArray = localStorage.getItem("phaseFiveFruitArray"); // Read stored array

    if (phaseFiveStoredArray === null) { // Check if array exists

        phaseFiveOutputText.textContent = "Array not found"; // Show missing message

        return;
    }

    const phaseFiveFruitArray = JSON.parse(phaseFiveStoredArray); // Convert string to array

    console.log(phaseFiveFruitArray); // Show complete array

    console.log(phaseFiveFruitArray[0]); // Read first item

    phaseFiveOutputText.textContent = phaseFiveFruitArray.join(", "); // Show array items
});


phaseFiveUpdateArrayBtn.addEventListener("click", function () {

    const phaseFiveStoredArray = localStorage.getItem("phaseFiveFruitArray"); // Get stored array

    if (phaseFiveStoredArray === null) { // Check if array exists

        phaseFiveOutputText.textContent = "Array not found"; // Show missing message

        return;
    }

    const phaseFiveFruitArray = JSON.parse(phaseFiveStoredArray); // Convert string to array

    phaseFiveFruitArray.push("Orange"); // Add new item

    phaseFiveFruitArray[0] = "Grapes"; // Update first item

    localStorage.setItem("phaseFiveFruitArray", JSON.stringify(phaseFiveFruitArray) ); // Save updated array

    phaseFiveOutputText.textContent = "Array updated successfully"; // Show success message
});


phaseFiveDeleteDataBtn.addEventListener("click", function () {

    localStorage.removeItem( "phaseFiveStudentObject" ); // Delete object

    localStorage.removeItem( "phaseFiveFruitArray" ); // Delete array

    phaseFiveOutputText.textContent = "Object and Array deleted"; // Show delete message
});