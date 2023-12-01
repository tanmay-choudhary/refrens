const { execSync } = require("child_process");

try {
  execSync("eslint ./src");
  console.log("Linting passed successfully.");
} catch (error) {
  console.error("Linting failed.");
  process.exit(1);
}
