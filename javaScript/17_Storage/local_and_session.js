
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

    sessionOutputText.textContent = "All data cleared"; // Show clear message
});

//String, Number & Boolean Data
