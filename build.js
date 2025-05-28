const fs = require('fs');
const path = require('path');

// Ensure public directory exists
if (!fs.existsSync('public')) {
  fs.mkdirSync('public', { recursive: true });
}

// Create Firebase config with environment variables
const firebaseConfig = {
  apiKey: process.env.FIREBASE_API_KEY || '',
  authDomain: process.env.FIREBASE_AUTH_DOMAIN || '',
  databaseURL: process.env.FIREBASE_DATABASE_URL || '',
  projectId: process.env.FIREBASE_PROJECT_ID || '',
  storageBucket: process.env.FIREBASE_STORAGE_BUCKET || '',
  messagingSenderId: process.env.FIREBASE_MESSAGING_SENDER_ID || '',
  appId: process.env.FIREBASE_APP_ID || '',
  measurementId: process.env.FIREBASE_MEASUREMENT_ID || ''
};

// Write the config file
const configContent = `// Firebase configuration generated during build
const firebaseConfig = ${JSON.stringify(firebaseConfig, null, 2)};

// Export for use in other scripts
if (typeof module !== 'undefined' && module.exports) {
  module.exports = firebaseConfig;
}`;

fs.writeFileSync('public/firebase-config.js', configContent);

console.log('Firebase config generated successfully');
console.log('Config keys present:', Object.keys(firebaseConfig).filter(key => firebaseConfig[key] !== ''));

// Copy HTML files to public directory
const htmlFiles = ['index.html', 'player.html', 'upload.html'];
htmlFiles.forEach(file => {
  if (fs.existsSync(file)) {
    fs.copyFileSync(file, path.join('public', file));
    console.log(`Copied ${file} to public directory`);
  } else {
    console.warn(`Warning: ${file} not found`);
  }
});

console.log('Build completed successfully');