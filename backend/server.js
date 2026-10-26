const express = require('express');
const cors = require('cors');
const axios = require('axios');
const path = require('path');
require('dotenv').config({ path: path.join(__dirname, '../.env') });

const app = express();

// Allow your Vite dev server
app.use(
    cors({
        origin: ['http://localhost:5173', 'http://localhost:5174'],
        methods: ['GET'],
        allowedHeaders: ['Content-Type'],
    })
);

app.get('/api/questions', async(req, res) => {
    try {
        const { category, limit, difficulty } = req.query;

        console.log('📥 Received request:', { category, limit, difficulty });
        console.log('🔑 Using API Key:', process.env.QUIZAPI_KEY ? '✅ Found' : '❌ Missing');

        const response = await axios.get('https://quizapi.io/api/v1/questions', {
            headers: {
                // IMPORTANT: set header on server side, not browser
                'x-api-key': process.env.QUIZAPI_KEY || 'PUT_YOUR_QUIZAPI_KEY_HERE',
            },
            params: {
                category,
                limit: limit || 20,
                difficulty,
            },
        });

        console.log('✅ QuizAPI responded with', response.data.length, 'questions');
        res.json(response.data);
    } catch (err) {
        console.error('❌ Error fetching from QuizAPI:', err.response?.data || err.message);
        const status = err.response?.status || 500;
        const data = err.response?.data || err.message;
        res.status(status).json({ error: data });
    }
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`Quiz proxy backend running on http://localhost:${PORT}`);
});