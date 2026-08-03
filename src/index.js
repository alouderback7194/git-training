import { add, subtract, multiply, divide } from "./calculator.js";
import { greeting } from "./greeting.js";
import { welcomeBanner } from "./welcome.js";

console.log(welcomeBanner());
console.log(greeting("Trainee"));
console.log("2 + 3 =", add(2, 3));
console.log("10 - 4 =", subtract(10, 4));
console.log("6 * 7 =", multiply(6, 7));
console.log("20 / 5 =", divide(20, 5));
