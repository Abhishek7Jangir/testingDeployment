require('dotenv').config()

const express = require('express');
const app = express();

app.get("/", (req, res) => {
    res.send(`
    <!DOCTYPE html>
    <html lang="en">
    <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">

      <title>My Express Page</title>

      <style>
        * {
          margin: 0;
          padding: 0;
          box-sizing: border-box;
        }

        body {
          font-family: Arial, sans-serif;
          min-height: 100vh;
          display: flex;
          justify-content: center;
          align-items: center;
          background: linear-gradient(135deg, #667eea, #764ba2);
          color: white;
        }

        .card {
          width: 90%;
          max-width: 600px;
          padding: 50px;
          text-align: center;
          background: rgba(255, 255, 255, 0.15);
          border: 1px solid rgba(255, 255, 255, 0.2);
          border-radius: 25px;
          backdrop-filter: blur(15px);
          box-shadow: 0 20px 50px rgba(0, 0, 0, 0.25);
        }

        h1 {
          font-size: 48px;
          margin-bottom: 15px;
        }

        p {
          font-size: 18px;
          line-height: 1.6;
          opacity: 0.9;
          margin-bottom: 30px;
        }

        button {
          border: none;
          padding: 14px 28px;
          border-radius: 30px;
          background: white;
          color: #667eea;
          font-size: 16px;
          font-weight: bold;
          cursor: pointer;
          transition: 0.3s;
        }

        button:hover {
          transform: translateY(-3px);
          box-shadow: 0 10px 25px rgba(0, 0, 0, 0.2);
        }
      </style>
    </head>

    <body>
      <div class="card">
        <h1>Hello 👋</h1>

        <p>
          Welcome to my beautiful Express.js website.
          This page is being served directly from Node.js!
        </p>

        <button onclick="alert('Express is working! 🚀')">
          Click Me
        </button>
      </div>
    </body>
    </html>
  `);
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