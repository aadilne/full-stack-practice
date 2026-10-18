declare enum E11Color {
    Red = 0,// Gets value 0
    Green = 1,// Gets value 1
    Blue = 2
}
declare enum E11Role {
    Admin = "ADMIN",// Assigns a string value
    User = "USER",// Assigns a string value
    Guest = "GUEST"
}
declare enum E11Data {
    Id = 101,// Stores a numeric value
    Name = "Aadil"
}
declare const enum E11Size {
    Small = 1,// Defines the small size
    Medium = 2,// Defines the medium size
    Large = 3
}
declare enum E11Status {
    Pending = 10,// Defines the pending status
    Success = 20,// Defines the success status
    Failed = 30
}
declare enum E11Order {
    Placed = "PLACED",// Defines the placed status
    Shipped = "SHIPPED",// Defines the shipped status
    Delivered = "DELIVERED"
}
declare let e11Ord: E11Order;
type E11Direction = "left" | "right" | "up" | "down";
declare let e11Dir: E11Direction;
declare const e11User: {
    readonly name: "Aadil";
    readonly role: "admin";
    readonly age: 24;
};
