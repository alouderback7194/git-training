// Small string helpers. Feel free to edit these during the exercises.

export function capitalize(text) {
  if (!text) return "";
  return text.charAt(0).toUpperCase() + text.slice(1);
}

export function reverse(text) {
  return text.split("").reverse().join("");
}
