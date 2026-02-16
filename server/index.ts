import express from 'express';
import cors from 'cors';
import { getDb } from './db';

const app = express();
const PORT = 3002;

app.use(cors());
app.use(express.json());

// Initialize DB
getDb().then(() => console.log('📦 Database Connected')).catch(err => console.error('DB Error:', err));

// Basic root route
app.get('/', (req, res) => {
    res.send('<h1>Farmtech Backend is Running</h1><p>API endpoints are available at <a href="/api/status">/api/status</a></p>');
});

// API Routes
app.get('/api/products', async (req, res) => {
    try {
        const db = await getDb();
        const products = await db.all('SELECT * FROM products');
        res.json(products);
    } catch (e) {
        res.status(500).json({ error: 'Database error' });
    }
});

app.get('/api/livestock', async (req, res) => {
    try {
        const db = await getDb();
        const livestock = await db.all('SELECT * FROM livestock');
        // Transform flatten structure back to nested object if needed for frontend compat
        const formatted = livestock.map((l: any) => ({
            ...l,
            specs: {
                yield: l.specs_yield,
                maturity: l.specs_maturity,
                temperament: l.specs_temperament
            }
        }));
        res.json(formatted);
    } catch (e) {
        res.status(500).json({ error: 'Database error' });
    }
});

// Auth API
app.post('/api/auth/register', async (req, res) => {
    const { fullname, phone, password } = req.body;
    try {
        const db = await getDb();
        await db.run(
            'INSERT INTO users (fullname, phone, password) VALUES (?, ?, ?)',
            [fullname, phone, password]
        );
        res.json({ success: true, message: 'User registered successfully' });
    } catch (e: any) {
        if (e.message.includes('UNIQUE constraint failed')) {
            res.status(400).json({ error: 'Phone number already exists' });
        } else {
            res.status(500).json({ error: 'Database error' });
        }
    }
});

app.post('/api/auth/login', async (req, res) => {
    const { phone, password } = req.body;
    try {
        const db = await getDb();
        const user = await db.get('SELECT * FROM users WHERE phone = ? AND password = ?', [phone, password]);
        if (user) {
            res.json({ success: true, user: { id: user.id, phone: user.phone, fullname: user.fullname } });
        } else {
            res.status(401).json({ error: 'Invalid phone number or password' });
        }
    } catch (e) {
        res.status(500).json({ error: 'Database error' });
    }
});

// Mock Status Check for "Smart Farming"
app.get('/api/status', (req, res) => {
    res.json({
        system: "Online",
        activeConnections: Math.floor(Math.random() * 50) + 10,
        serverTime: new Date().toISOString()
    });
});

const server = app.listen(PORT, () => {
    console.log(`\n✅ Farmtech Backend running at http://localhost:${PORT}`);
    console.log(`   - Products: http://localhost:${PORT}/api/products`);
    console.log(`   - Livestock: http://localhost:${PORT}/api/livestock`);
});

server.on('error', (err: any) => {
    if (err.code === 'EADDRINUSE') {
        console.error(`❌ Port ${PORT} is already in use. Please kill the process using it.`);
    } else {
        console.error('❌ Server error:', err);
    }
});

// Keep process alive
process.stdin.resume();
