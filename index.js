import express from 'express';
import { startBot } from './src/bot.js';

const app = express();
app.get('/', (req, res) => res.send('Bot Running Successfully!'));

app.listen(8000, () => console.log('🔥 Server OK on port 8000'));

startBot();
