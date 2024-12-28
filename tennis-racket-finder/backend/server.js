const express = require('express');
const mysql = require('mysql2');
const cors = require('cors');
const bodyParser = require('body-parser');

const app = express();
app.use(cors());
app.use(bodyParser.json());

// MySQL Connection
const db = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'Kimutai8',
    database: 'tennis_rackets'
});

db.connect(err => {
    if (err) {
        console.error('Database connection failed:', err.stack);
        return;
    }
    console.log('Connected to MySQL database!');
});

// API Endpoint to Fetch Rackets
app.get('/racket', (req, res) => {
    const query = `
    SELECT 
    Racket.id,
    Brands.name AS brand,
    Racket.model,
    Racket.head_size,
    Racket.length,
    Racket.weight,
    Racket.balance,
    Racket.swing_weight,
    Racket.beam_width,
    Racket.composition,
    Racket.power_level,
    Racket.stiffness,
    Racket.string_pattern,
    Racket.main_skips,
    Racket.string_tension,
    Racket.price,
    Racket.player_level,
    Racket.play_style,
    Racket.arm_friendly,
    Racket.player
  FROM Racket
  JOIN Brands
    ON Racket.brand = Brands.name;
    `;

    db.query(query, (err, results) => {
        if (err) {
            res.status(500).send(err);
        } else {
            res.json(results);
        }
    });
});

// Start Server
const PORT = 5001;
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
