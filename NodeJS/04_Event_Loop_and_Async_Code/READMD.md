──────────────────────────────────────────────────────────────
               Blocking vs Asynchronous (Node.js)             
──────────────────────────────────────────────────────────────
 1. console.log("1. Start of script");                        
    👉 Program start hota hai.                                
                                                              
 2. fs.readFileSync("user-details.txt","utf8");               
    👉 Sync (Blocking) function hai.                          
    👉 File read hone tak program yahi ruk jata hai.          
    👉 Next line tabhi chalegi jab file read ho jayegi.       
                                                              
 3. console.log("3. Synchronous read complete");              
    👉 File successfully read ho gayi.                        
                                                              
 4. fs.readFile("user-details.txt","utf8",callback);          
    👉 Async (Non-Blocking) function hai.                     
    👉 File background me read hona start hoti hai.           
    👉 Program wait nahi karta.                               
                                                              
 5. console.log("5. End of script");                          
    👉 Ye line turant execute ho jati hai.                    
                                                              
 6. Callback Function                                         
    👉 Jab file read complete ho jati hai,                   
       tab callback execute hota hai.                         
    👉 console.log("6. Asynchronous read complete");          
                                                              
──────────────────────────────────────────────────────────────
 Final Output                                                 
                                                              
 1. Start of script                                           
 2. Reading file synchronously                                
 3. Synchronous read complete                                 
 4. Reading file asynchronously                               
 5. End of script                                             
 6. Asynchronous read complete                                
──────────────────────────────────────────────────────────────
 Rule Yaad Rakho                                              
                                                              
 readFileSync()                                               
 ✔ Blocking                                                   
 ✔ Program ko rok deta hai                                    
 ✔ Pehle file read hogi, fir next line chalegi                
                                                              
 readFile()                                                   
 ✔ Non-Blocking                                               
 ✔ Program nahi rukta                                         
 ✔ File background me read hoti hai                           
 ✔ Complete hone par callback chalta hai                      


# Node.js Event Loop Sequence

## 📌 Objective

Understand how Node.js executes synchronous code, Promises, timers, I/O
operations, `setImmediate()`, and the `exit` event.

------------------------------------------------------------------------

## Code

``` js
console.log("1. Start of script");

// Microtask Queue (Promise)
Promise.resolve().then(() => console.log("2. Microtask 1"));

// Timer Queue
setTimeout(() => console.log("3. Timer 1"), 0);

// I/O Queue
const fs = require("fs");
fs.readFile("user-details.txt", () => console.log("4. I/O operation"));

// Check Queue
setImmediate(() => console.log("5. Immediate 1"));

// Close Queue
process.on("exit", () => {
  console.log("6. Exit event");
});

console.log("7. End of script");
```

------------------------------------------------------------------------

# Step-by-Step Explanation

## 1. Synchronous Code

``` js
console.log("1. Start of script");
```

Runs immediately.

**Output**

    1. Start of script

------------------------------------------------------------------------

## 2. Promise (Microtask Queue)

``` js
Promise.resolve().then(() => {
   console.log("2. Microtask 1");
});
```

-   The callback is **not executed immediately**.
-   It is placed into the **Microtask Queue**.
-   Microtasks always have the highest priority after synchronous code
    finishes.

------------------------------------------------------------------------

## 3. setTimeout()

``` js
setTimeout(() => {
   console.log("3. Timer 1");
},0);
```

-   Even with `0`, it does **not** run instantly.
-   The callback goes into the **Timer Queue**.
-   It runs only after the Call Stack is empty and the Event Loop
    reaches the Timers phase.

------------------------------------------------------------------------

## 4. fs.readFile()

``` js
fs.readFile("user-details.txt", () => {
   console.log("4. I/O operation");
});
```

-   File reading starts in the background.
-   Node.js does **not** wait.
-   When reading completes, the callback becomes ready in the **I/O
    (Poll) phase**.

------------------------------------------------------------------------

## 5. setImmediate()

``` js
setImmediate(() => {
   console.log("5. Immediate 1");
});
```

-   The callback is placed in the **Check phase**.
-   It executes when the Event Loop reaches the Check phase.

------------------------------------------------------------------------

## 6. process.on("exit")

``` js
process.on("exit", () => {
   console.log("6. Exit event");
});
```

-   This callback executes only when Node.js is about to exit.

------------------------------------------------------------------------

## 7. Last Synchronous Statement

``` js
console.log("7. End of script");
```

Runs immediately.

------------------------------------------------------------------------

# Execution Flow

1.  Synchronous code
2.  Microtask Queue (Promise)
3.  Timer Queue (`setTimeout`)
4.  I/O (Poll phase)
5.  Check phase (`setImmediate`)
6.  Exit Event

------------------------------------------------------------------------

# Expected Output (Conceptual)

``` text
1. Start of script
7. End of script
2. Microtask 1
3. Timer 1
4. I/O operation
5. Immediate 1
6. Exit event
```

> **Note:** In real Node.js, the relative order of `setTimeout(..., 0)`
> and `setImmediate()` is **not always fixed**. However, **Promise
> callbacks (`.then`) always run before both**, because the Microtask
> Queue has higher priority.

------------------------------------------------------------------------

# Easy Way to Remember

``` text
Synchronous Code
        ↓
Microtask Queue (Promise)
        ↓
Timer Queue (setTimeout)
        ↓
I/O (fs.readFile)
        ↓
Check Queue (setImmediate)
        ↓
Exit Event
```

------------------------------------------------------------------------

# Interview Summary

-   **Synchronous code** executes first.
-   **Promises** go to the **Microtask Queue** and have the highest
    priority.
-   **setTimeout()** callbacks execute in the Timers phase.
-   **fs.readFile()** callbacks execute after the I/O operation
    completes.
-   **setImmediate()** executes in the Check phase.
-   **process.on("exit")** runs just before the Node.js process exits.
