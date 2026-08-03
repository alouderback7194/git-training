// Basic arithmetic helpers used throughout the git training exercises.

export function add(a, b) {
  return a + b;
}

export function subtract(a, b) {
  return a - b;
}

export function multiply(a, b) {
  return a * b;
}

export function divide(a, b) {
  if (b === 0) {
    throw new Error("Cannot divide by zero");
  }
  return a / b;
}

// NOTE: The functions below were added for the Copilot code-review exercise.
// They contain intentional issues — see how many the reviewer catches.

export function average(numbers) {
  let total = 0;
  for (let i = 0; i <= numbers.length; i++) {
    total += numbers[i];
  }
  return total / numbers.length;
}

export function percentage(part, whole) {
  return (part / whole) * 100;
}
