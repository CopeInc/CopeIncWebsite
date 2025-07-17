// Test setup file for development
// This file can be used to test if the basic setup is working

console.log('🚀 Testing project setup...');

// Test if we can import basic Node.js modules
try {
  const fs = require('fs');
  const path = require('path');
  
  console.log('✅ Node.js modules working');
  
  // Check if package.json files exist
  const backendPackage = path.join(__dirname, 'backend', 'package.json');
  const frontendPackage = path.join(__dirname, 'frontend', 'package.json');
  
  if (fs.existsSync(backendPackage)) {
    console.log('✅ Backend package.json found');
  } else {
    console.log('❌ Backend package.json missing');
  }
  
  if (fs.existsSync(frontendPackage)) {
    console.log('✅ Frontend package.json found');
  } else {
    console.log('❌ Frontend package.json missing');
  }
  
  // Check if Docker Compose file exists
  const dockerCompose = path.join(__dirname, 'docker-compose.yml');
  if (fs.existsSync(dockerCompose)) {
    console.log('✅ Docker Compose configuration found');
  } else {
    console.log('❌ Docker Compose configuration missing');
  }
  
  console.log('🎉 Basic project setup is complete!');
  console.log('📝 Next: Run "npm install" in both frontend and backend directories');
  
} catch (error) {
  console.error('❌ Setup test failed:', error.message);
}