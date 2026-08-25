// =====================================================
// PART 17 : EVENT DELEGATION
// =====================================================


// =====================================================
// 1. PARENT KO SELECT KARNA
// =====================================================

// Ye hamara parent hai.
//
// Is parent ke andar 4 buttons hain.
//
// Hum buttons par alag-alag listener
// nahi lagayenge.
//
// Sirf parent par listener lagayenge.

let buttonBox = document.querySelector("#buttonBox");


// =====================================================
// 2. PARENT PAR CLICK EVENT
// =====================================================

// Dhyan do:
//
// Listener BUTTON par nahi laga.
//
// Listener PARENT par laga hai.
//
// Parent ke andar kisi bhi button par
// click hoga to parent ka listener
// event ko receive kar sakta hai.

buttonBox.addEventListener("click", (event) => {


    // -------------------------------------------------
    // event.target
    // -------------------------------------------------

    // event.target batata hai:
    //
    // "Actual mein click KIS par hua?"

    console.log("Clicked element:", event.target);


    // -------------------------------------------------
    // event.currentTarget
    // -------------------------------------------------

    // event.currentTarget batata hai:
    //
    // "Listener KIS par laga hai?"

    console.log("Listener wala element:", event.currentTarget);


    // -------------------------------------------------
    // Example
    // -------------------------------------------------

    // Agar Button 3 par click hua:

    // event.target
    //       ↓
    // Button 3
    //
    // event.currentTarget
    //       ↓
    // buttonBox (Parent)


});


// =====================================================
// 3. CLICKED BUTTON KO IDENTIFY KARNA
// =====================================================

buttonBox.addEventListener("click", (event) => {


    // Hum check kar rahe hain:
    //
    // "Kya jis element par click hua
    //  wo .myBtn hai?"

    if (event.target.classList.contains("myBtn")) {


        // Agar YES hai,
        // to ye message print hoga.

        console.log("Button clicked:",event.target.textContent);
    }

});


// =====================================================
// 4. DYNAMIC ELEMENT
// =====================================================

// Ab hum baad mein ek NEW button banayenge.
//
// Is button ko banate waqt
// hum iske andar click listener
// nahi lagayenge.
//
// Fir bhi ye kaam karega.
//
// KYUN?
//
// Kyunki parent pehle se
// click sun raha hai.

let addBtn = document.querySelector("#addBtn");


addBtn.addEventListener("click", () => {

    // Naya button banao

    let newButton = document.createElement("button");


    // Button ke andar text daalo

    newButton.textContent = "New Button";


    // Is button ko wahi class do
    // jo baaki buttons ke paas hai

    newButton.classList.add("myBtn");


    // Naye button ko parent ke andar daal do

    buttonBox.append(newButton);


});


// =====================================================
// 5. AB NEW BUTTON BHI KAAM KAREGA
// =====================================================

// Dhyan do:
//
// New Button ke liye humne
// addEventListener nahi lagaya.
//
// Sirf parent ka listener hai.
//
// Fir bhi New Button click karne par
// parent ka listener chalega.
//
// Yehi EVENT DELEGATION ka fayda hai.


// =====================================================
// 6. TODO LIST
// =====================================================


// Todo list ko select karo

let todoList = document.querySelector("#todoList");


// Todo list PARENT hai.
//
// Iske andar bahut saare
// Delete buttons hain.
//
// Har Delete button par alag listener
// lagane ki zarurat nahi hai.
//
// Sirf parent par ek listener.

todoList.addEventListener("click", (event) => {


    // -------------------------------------------------
    // CHECK KARO
    // -------------------------------------------------

    // Kya jis element par click hua
    // uske paas deleteBtn class hai?

    if (
        event.target.classList.contains("deleteBtn")
    ) {


        // Agar YES hai,
        // to event.target DELETE BUTTON hai.


        // parentElement ka matlab:
        //
        // Delete button ka parent
        //
        // Wo poora Todo box hai.

        let todo = event.target.parentElement;


        // Ab poore Todo ko delete kar do.

        todo.remove();

    }

});


// =====================================================
// EVENT DELEGATION KA SIMPLE FORMULA
// =====================================================

// Parent par listener
//
//       ↓
//
// event.target dekho
//
//       ↓
//
// Pata karo kis child par click hua
//
//       ↓
//
// Us child par action karo


// =====================================================
// SABSE IMPORTANT
// =====================================================

// event.target
//
// = Jis element par ACTUAL click hua


// event.currentTarget
//
// = Jis element par LISTENER laga hai


// Example:
//
// Parent par listener laga hai
//
// Button 3 par click hua
//
// event.target
//      ↓
// Button 3
//
// event.currentTarget
//      ↓
// Parent


// =====================================================
// EVENT DELEGATION EK LINE MEIN
// =====================================================

// "Har child par listener lagane ke bajay
//  parent par ek listener lagao
//  aur event.target se pata karo
//  ki kaunsa child click hua."