
Topic 1: Array Types
Array ek aisa container hai jisme hum multiple values store kar sakte hain.
TypeScript mein array ka type define karne ke do common tareeke hain:
- number[] — numbers ka array
- string[] — strings ka array


Topic 2: String Arrays
String array mein sirf text values store karte hain.
Example: ["Aadil", "Rahul", "Aman"]


Topic 3: Number Arrays
Number array mein sirf numeric values store karte hain.
Example: [10, 20, 30]

Topic 4: Boolean Arrays
Boolean array mein true aur false values store hoti hain.
Example: [true, false, true]


Topic 5: Using Array<T>
Array define karne ka ek aur tareeka hai Array<T>.
- Array<string> — strings ka array
- Array<number> — numbers ka array
- Array<boolean> — booleans ka array
Yahan T ka matlab element ka type hai.


Topic 6: Readonly Arrays
Readonly array mein elements ko change karna, add karna ya remove karna TypeScript se allowed nahi hota.
Iske liye readonly number[] ya ReadonlyArray<number> use kar sakte hain.


Topic 7: What Are Tuples?
Tuple ek array jaisa structure hai jisme elements ki position aur type pehle se define kiye ja sakte hain.
Example: [string, number] ka matlab pehli value string aur doosri number hogi.


Topic 8: Tuple Types
Tuple mein har position ke liye specific type define hota hai.
Example: [string, number, boolean]
Ismein pehla element string, doosra number aur teesra boolean hoga.


Topic 9: Optional Tuple Elements
Tuple ke kuch elements optional ho sakte hain. Optional element ke liye ? use hota hai.
Example: [string, number?]
Ismein string zaroori hai, lekin number dena optional hai.


Topic 10: Readonly Tuples
Readonly tuple mein tuple ke elements ko reassign nahi kar sakte.
Example: readonly [string, number]

Complete practical code — ArraysTuples.ts
Neeche saare 10 topics ek hi .ts code box mein hain. Har example alag hai aur har value ke baad console.log() diya gaya hai.