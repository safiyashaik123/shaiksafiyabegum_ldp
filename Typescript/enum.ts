// Numeric Enum
enum OrderStatus {
    Pending,
    Confirmed,
    Shipped,
    Delivered
}

// String Enum
enum UserRole {
    Admin = "ADMIN",
    Employee = "EMPLOYEE"
}

// Custom Numeric Enum
enum HttpStatus {
    Success = 200,
    NotFound = 404
}

// Const Enum
const enum Direction {
    North,
    South
}

console.log(OrderStatus.Pending);
console.log(OrderStatus[2]);

console.log(UserRole.Admin);

console.log(HttpStatus.Success);

let currentDirection = Direction.North;
console.log(currentDirection);