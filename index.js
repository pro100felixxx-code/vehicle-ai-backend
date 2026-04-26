
const express = require('express');
const app = express();
app.use(express.json());

app.post('/ai/diagnose', (req,res) => {
    const risk = Math.floor(Math.random()*100);

    res.json({
        risk,
        message: risk > 70 ? "CRITICAL ISSUE" : "OK"
    });
});

app.get('/analytics', (req,res) => {
    res.json({
        users: 120,
        mrr: 450
    });
});

app.listen(3000, () => console.log('AI backend running'));
