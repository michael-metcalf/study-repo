const age = prompt('What is your age?');
const days = age * 365 + age / 4;
// Alternatively: var days = age * 365.25;

console.log(`${age} years is roughly ${days} days.`);
