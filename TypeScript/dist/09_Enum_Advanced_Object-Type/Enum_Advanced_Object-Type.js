"use strict";
// Topic 1: Numeric Enums
var E11Color;
(function (E11Color) {
    E11Color[E11Color["Red"] = 0] = "Red";
    E11Color[E11Color["Green"] = 1] = "Green";
    E11Color[E11Color["Blue"] = 2] = "Blue"; // Gets value 2
})(E11Color || (E11Color = {}));
console.log(E11Color.Red); // Prints 0
console.log(E11Color.Green); // Prints 1
console.log(E11Color.Blue); // Prints 2
// Topic 2: String Enums
var E11Role;
(function (E11Role) {
    E11Role["Admin"] = "ADMIN";
    E11Role["User"] = "USER";
    E11Role["Guest"] = "GUEST"; // Assigns a string value
})(E11Role || (E11Role = {}));
console.log(E11Role.Admin); // Prints ADMIN
console.log(E11Role.User); // Prints USER
console.log(E11Role.Guest); // Prints GUEST
// Topic 3: Heterogeneous Enums
var E11Data;
(function (E11Data) {
    E11Data[E11Data["Id"] = 101] = "Id";
    E11Data["Name"] = "Aadil"; // Stores a string value
})(E11Data || (E11Data = {}));
console.log(E11Data.Id); // Prints 101
console.log(E11Data.Name); // Prints Aadil
console.log(1 /* E11Size.Small */); // Prints 1
console.log(2 /* E11Size.Medium */); // Prints 2
console.log(3 /* E11Size.Large */); // Prints 3
// Topic 5: Enum Members
var E11Status;
(function (E11Status) {
    E11Status[E11Status["Pending"] = 10] = "Pending";
    E11Status[E11Status["Success"] = 20] = "Success";
    E11Status[E11Status["Failed"] = 30] = "Failed"; // Defines the failed status
})(E11Status || (E11Status = {}));
console.log(E11Status.Success); // Prints 20
console.log(E11Status[30]); // Prints Failed using numeric reverse mapping
// Topic 6: When to Use Enums
var E11Order;
(function (E11Order) {
    E11Order["Placed"] = "PLACED";
    E11Order["Shipped"] = "SHIPPED";
    E11Order["Delivered"] = "DELIVERED"; // Defines the delivered status
})(E11Order || (E11Order = {}));
let e11Ord = E11Order.Shipped; // Stores a valid order status
console.log(e11Ord); // Prints SHIPPED
let e11Dir = "left"; // Selects an allowed direction
console.log(e11Dir); // Prints left
e11Dir = "right"; // Changes to another allowed direction
console.log(e11Dir); // Prints right
// e11Dir = "forward"; // Error: forward is not allowed
// Topic 8: as const
const e11User = {
    name: "Aadil", // Keeps the name as a string literal type
    role: "admin", // Keeps the role as a string literal type
    age: 24 // Keeps the age as a numeric literal type
}; // Makes the properties readonly in TypeScript
console.log(e11User); // Prints the complete object
console.log(e11User.role); // Prints admin
// e11User.role = "user"; // Error: readonly property cannot be changed
