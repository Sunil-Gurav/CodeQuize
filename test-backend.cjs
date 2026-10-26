// Quick test script to check if backend is responding
const axios = require('axios');

async function testBackend() {
    console.log('🧪 Testing backend connection...\n');
    
    try {
        const response = await axios.get('http://localhost:5000/api/questions', {
            params: {
                category: 'html',
                limit: 5,
                difficulty: 'Easy'
            }
        });
        
        console.log('✅ Backend is working!');
        console.log(`📊 Received ${response.data.length} questions`);
        console.log('\nFirst question:', response.data[0]?.question || 'No questions');
    } catch (err) {
        if (err.code === 'ECONNREFUSED') {
            console.error('❌ Backend server is NOT running!');
            console.error('👉 Start it with: cd backend && node server.js');
        } else {
            console.error('❌ Error:', err.response?.data || err.message);
        }
    }
}

testBackend();
