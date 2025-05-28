const fs = require("fs");
const path = require("path");

const ENV_KEYS = [
  "FIREBASE_API_KEY",
  "FIREBASE_AUTH_DOMAIN",
  "FIREBASE_PROJECT_ID",
  "FIREBASE_STORAGE_BUCKET",
  "FIREBASE_MESSAGING_SENDER_ID",
  "FIREBASE_APP_ID",
  "FIREBASE_MEASUREMENT_ID"
];

const srcDir = path.join(__dirname, "public");
const distDir = path.join(__dirname, "dist");

if (!fs.existsSync(distDir)) fs.mkdirSync(distDir);

// Read all files in public/
fs.readdirSync(srcDir).forEach((file) => {
  const srcFile = path.join(srcDir, file);
  const destFile = path.join(distDir, file);

  let content = fs.readFileSync(srcFile, "utf-8");

  // Replace all %%ENV_VAR%% with actual value
  ENV_KEYS.forEach((key) => {
    const value = process.env[key] || "";
    const pattern = new RegExp(`%%${key}%%`, "g");
    content = content.replace(pattern, value);
  });

  fs.writeFileSync(destFile, content, "utf-8");
  console.log(`✅ Built ${file}`);
});
