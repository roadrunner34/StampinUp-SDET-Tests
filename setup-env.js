const fs = require('fs');
const path = require('path');

// Define the required environment variables
const envVariables = {
    currentUserEmail:"",
    currentUserPassword:"",
};

// Create the .env file content
const envContent = Object.entries(envVariables)
    .map(([key, value]) => `${key}=${value}`)
    .join('\n');

// Get the path to the .env file
const envPath = path.join(process.cwd(), '.env');

// Check if .env file already exists
if (fs.existsSync(envPath)) {
    console.log('⚠️  .env file already exists. Please check if it contains all required variables.');
} else {
    // Create the .env file
    fs.writeFileSync(envPath, envContent);
    console.log('✅ .env file created successfully!');
}

// Display instructions to the user
console.log('\n📝 Please fill out the following information in your .env file:');
Object.keys(envVariables).forEach(key => {
    console.log(`- ${key}`);
});

console.log('\n💡 After filling out the .env file, you can run your tests using:');
console.log('npm test'); 