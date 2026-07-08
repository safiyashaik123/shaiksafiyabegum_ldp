"use strict";
// Numeric Enum
var OrderStatus;
(function (OrderStatus) {
    OrderStatus[OrderStatus["Pending"] = 0] = "Pending";
    OrderStatus[OrderStatus["Confirmed"] = 1] = "Confirmed";
    OrderStatus[OrderStatus["Shipped"] = 2] = "Shipped";
    OrderStatus[OrderStatus["Delivered"] = 3] = "Delivered";
})(OrderStatus || (OrderStatus = {}));
// String Enum
var UserRole;
(function (UserRole) {
    UserRole["Admin"] = "ADMIN";
    UserRole["Employee"] = "EMPLOYEE";
})(UserRole || (UserRole = {}));
// Custom Numeric Enum
var HttpStatus;
(function (HttpStatus) {
    HttpStatus[HttpStatus["Success"] = 200] = "Success";
    HttpStatus[HttpStatus["NotFound"] = 404] = "NotFound";
})(HttpStatus || (HttpStatus = {}));
console.log(OrderStatus.Pending);
console.log(OrderStatus[2]);
console.log(UserRole.Admin);
console.log(HttpStatus.Success);
let currentDirection = 0 /* Direction.North */;
console.log(currentDirection);
