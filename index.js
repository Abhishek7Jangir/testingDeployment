require('dotenv').config()

const express = require('express');
const app = express();

app.get('/', (req, res) => {
    res.send('Hello World!');
});

app.get('/abhi', (req, res) => {
    res.json({
        Name: "Abhishek Jangir",
        Age: "24",
        Degignation: "Fresher",
        Field: "AI / ML"
    })
})

app.listen(process.env.PORT, () => {
    console.log(`Example app listening on port ${process.env.PORT}`);
});