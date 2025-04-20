const fs = require('fs');

// Load Jest results
const data = JSON.parse(fs.readFileSync('./results.json', 'utf8'));

const passed = data.numPassedTests;
const total = data.numTotalTests;
const score = Math.min(passed, 5); // Max score capped at 5

console.log(`::set-output name=result::${score}`);
