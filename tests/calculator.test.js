import test from "node:test";
import assert from "node:assert/strict";
import { add, subtract, multiply, divide } from "../src/calculator.js";

test("add", () => assert.equal(add(2, 3), 5));
test("subtract", () => assert.equal(subtract(10, 4), 6));
test("multiply", () => assert.equal(multiply(6, 7), 42));
test("divide", () => assert.equal(divide(20, 5), 4));
test("divide by zero throws", () => assert.throws(() => divide(1, 0)));
