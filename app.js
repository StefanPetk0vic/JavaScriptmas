import express from 'express';
import path from 'path';
import { fileURLToPath } from 'url';
import CalRoutes from './routes/calendar.js';
import LogRoutes from './routes/login.js';
import GridRoutes from './routes/gridgame.js';

// Correctly calculate __dirname in ES Modules
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.static(path.join(__dirname, 'public')));  // Correct static file path

// Route handling
app.use('/Calendar', CalRoutes);
app.use('/Login', LogRoutes);
app.use('/GridGame', GridRoutes);

app.get('/',(req,res)=>{
    res.redirect('/Login');
})

app.listen(PORT, () => {
    console.log(`Server is started on port http://localhost:${PORT}`);
});
