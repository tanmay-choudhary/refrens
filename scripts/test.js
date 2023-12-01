// scripts/test.js
const { execSync } = require("child_process");

try {
  execSync("mocha ./test");
  console.log("Tests passed successfully.");
} catch (error) {
  console.error("Tests failed.");
  process.exit(1);
}
