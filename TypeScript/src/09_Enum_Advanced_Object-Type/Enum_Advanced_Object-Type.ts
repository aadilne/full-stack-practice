

// Topic 1: Numeric Enums

enum E11Color {
    Red, // Gets value 0
    Green, // Gets value 1
    Blue // Gets value 2
}

console.log(E11Color.Red); // Prints 0
console.log(E11Color.Green); // Prints 1
console.log(E11Color.Blue); // Prints 2


// Topic 2: String Enums

enum E11Role {
    Admin = "ADMIN", // Assigns a string value
    User = "USER", // Assigns a string value
    Guest = "GUEST" // Assigns a string value
}

console.log(E11Role.Admin); // Prints ADMIN
console.log(E11Role.User); // Prints USER
console.log(E11Role.Guest); // Prints GUEST


// Topic 3: Heterogeneous Enums

enum E11Data {
    Id = 101, // Stores a numeric value
    Name = "Aadil" // Stores a string value
}

console.log(E11Data.Id); // Prints 101
console.log(E11Data.Name); // Prints Aadil


// Topic 4: Const Enums

const enum E11Size {
    Small = 1, // Defines the small size
    Medium = 2, // Defines the medium size
    Large = 3 // Defines the large size
}

console.log(E11Size.Small); // Prints 1
console.log(E11Size.Medium); // Prints 2
console.log(E11Size.Large); // Prints 3


// Topic 5: Enum Members

enum E11Status {
    Pending = 10, // Defines the pending status
    Success = 20, // Defines the success status
    Failed = 30 // Defines the failed status
}

console.log(E11Status.Success); // Prints 20
console.log(E11Status[30]); // Prints Failed using numeric reverse mapping


// Topic 6: When to Use Enums

enum E11Order {
    Placed = "PLACED", // Defines the placed status
    Shipped = "SHIPPED", // Defines the shipped status
    Delivered = "DELIVERED" // Defines the delivered status
}

let e11Ord: E11Order = E11Order.Shipped; // Stores a valid order status
console.log(e11Ord); // Prints SHIPPED


// Topic 7: Enum Alternatives

type E11Direction = "left" | "right" | "up" | "down"; // Defines allowed values

let e11Dir: E11Direction = "left"; // Selects an allowed direction
console.log(e11Dir); // Prints left

e11Dir = "right"; // Changes to another allowed direction
console.log(e11Dir); // Prints right

// e11Dir = "forward"; // Error: forward is not allowed


// Topic 8: as const

const e11User = {
    name: "Aadil", // Keeps the name as a string literal type
    role: "admin", // Keeps the role as a string literal type
    age: 24 // Keeps the age as a numeric literal type
} as const; // Makes the properties readonly in TypeScript

console.log(e11User); // Prints the complete object
console.log(e11User.role); // Prints admin

// e11User.role = "user"; // Error: readonly property cannot be changed
