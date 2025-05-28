const express = require('express');
const cors = require('cors');
const path = require('path');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(cors());
app.use(express.json());
app.use(express.static('.'));

// Gemini API endpoint
app.post('/api/chat', async (req, res) => {
    try {
        const { message, history } = req.body;

        // Sagatavojam saturu Gemini
        const contents = [];

        // Pievienojam sistēmas ziņojumu
        contents.push({
            role: 'user',
            parts: [{
                text: 'Tu esi noderīgs JavaScript palīgs. Palīdzi ar jautājumiem par kodu, izskaidro konceptus un palīdzi ar uzdevumiem vietnē. Vienmēr atbildi latviešu valodā, pat ja jautājums ir citā valodā. Esi draudzīgs un pacietīgs.'
            }]
        });
        contents.push({
            role: 'model',
            parts: [{ text: 'Sapratu! Es palīdzēšu ar JavaScript un vienmēr atbildēšu latviešu valodā. Esmu gatavs palīdzēt ar programmēšanas jautājumiem!' }]
        });

        // Pievienojam čata vēsturi
        if (history && history.length > 0) {
            history.forEach(h => {
                contents.push({
                    role: h.role === 'user' ? 'user' : 'model',
                    parts: [{ text: h.content }]
                });
            });
        }

        // Pievienojam pašreizējo ziņojumu
        contents.push({
            role: 'user',
            parts: [{ text: message }]
        });

        // Pieprasījums uz Gemini API - izmantojam jauno modeli
        const response = await fetch(
            `https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash:generateContent?key=${process.env.GEMINI_API_KEY}`,
            {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    contents: contents,
                    generationConfig: {
                        temperature: 0.7,
                        topK: 1,
                        topP: 1,
                        maxOutputTokens: 1000,
                    },
                    safetySettings: [
                        {
                            category: "HARM_CATEGORY_HARASSMENT",
                            threshold: "BLOCK_MEDIUM_AND_ABOVE"
                        },
                        {
                            category: "HARM_CATEGORY_HATE_SPEECH",
                            threshold: "BLOCK_MEDIUM_AND_ABOVE"
                        },
                        {
                            category: "HARM_CATEGORY_SEXUALLY_EXPLICIT",
                            threshold: "BLOCK_MEDIUM_AND_ABOVE"
                        },
                        {
                            category: "HARM_CATEGORY_DANGEROUS_CONTENT",
                            threshold: "BLOCK_MEDIUM_AND_ABOVE"
                        }
                    ]
                })
            }
        );

        const data = await response.json();

        if (data.error) {
            throw new Error(data.error.message);
        }

        const reply = data.candidates[0].content.parts[0].text;
        res.json({ reply });

    } catch (error) {
        console.error('Kļūda:', error);
        res.status(500).json({
            error: 'Radās kļūda apstrādājot pieprasījumu',
            details: error.message
        });
    }
});

// Galvenā lapa
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'index.html'));
});

app.listen(PORT, () => {
    console.log(`
    🚀 Serveris palaists!
    📍 Vietējā adrese: http://localhost:${PORT}
    💬 Čata bots ir gatavs darbam!
    `);
});