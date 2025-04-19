const { execSync } = require("child_process")

// Run the seed script
try {
  console.log("Running seed script...")
  execSync('npx ts-node --compiler-options {"module":"CommonJS"} scripts/seed-db.ts', { stdio: "inherit" })
  console.log("Seed completed successfully!")
} catch (error) {
  console.error("Error running seed:", error)
  process.exit(1)
}
