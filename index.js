const axios = require('axios');
const fetch = require('cross-fetch');

// Test Axios
async function testAxios() {
  try {
    // Test 1: Simple GET request
    const response1 = await axios.get('http://localhost:3000/');
    console.log('Test 1 - Main page:');
    console.log('Status:', response1.status); // Should be 200
    console.log('Body:', response1.data); // Should be "This is the main page"

    // Test 2: HTTP 301 Redirect
    const response2 = await axios.get('http://localhost:3000/redirect301');
    console.log('\nTest 2 - HTTP 301 Redirect:');
    console.log('Status:', response2.status); // Should be 200 (after following redirect)
    console.log('Final URL:', response2.request.res.responseUrl); // Should be "http://localhost:3000/redirected"
    console.log('Body:', response2.data); // Should be "This is the redirected page"

    // Test 3: HTTP 302 Redirect
    const response3 = await axios.get('http://localhost:3000/redirect302');
    console.log('\nTest 3 - HTTP 302 Redirect:');
    console.log('Status:', response3.status); // Should be 200 (after following redirect)
    console.log('Final URL:', response3.request.res.responseUrl); // Should be "http://localhost:3000/redirected"
    console.log('Body:', response3.data); // Should be "This is the redirected page"

  } catch (error) {
    console.error('Error:', error.message);
  }
}

// Test node-fetch
async function testNodeFetch() {
  try {
    // Test 1: Simple GET request
    const response1 = await fetch('http://localhost:3000/');
    const body1 = await response1.text();
    console.log('Test 1 - Main page:');
    console.log('Status:', response1.status); // Should be 200
    console.log('Body:', body1); // Should be "This is the main page"

    // Test 2: HTTP 301 Redirect
    const response2 = await fetch('http://localhost:3000/redirect301');
    const body2 = await response2.text();
    console.log('\nTest 2 - HTTP 301 Redirect:');
    console.log('Status:', response2.status); // Should be 200 (after following redirect)
    console.log('Final URL:', response2.url); // Should be "http://localhost:3000/redirected"
    console.log('Body:', body2); // Should be "This is the redirected page"

    // Test 3: HTTP 302 Redirect
    const response3 = await fetch('http://localhost:3000/redirect302');
    const body3 = await response3.text();
    console.log('\nTest 3 - HTTP 302 Redirect:');
    console.log('Status:', response3.status); // Should be 200 (after following redirect)
    console.log('Final URL:', response3.url); // Should be "http://localhost:3000/redirected"
    console.log('Body:', body3); // Should be "This is the redirected page"

  } catch (error) {
    console.error('Error:', error.message);
  }
}

// Run tests
testAxios();
testNodeFetch();
