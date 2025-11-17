import express from 'express';
import TelegramBot from 'node-telegram-bot-api';
import { startBot } from './src/bot.js';

const app = express();

// Bot URL (Koyeb provides automatically)
const URL = process.env.KOYEB_APP_URL; 
const TOKEN = process.env.BOT_TOKEN;

// Webhook bot
const bot = new TelegramBot(TOKEN, {
  webHook: true,
});

// Telegram webhook endpoint
bot.setWebHook(`${URL}/bot${TOKEN}`);

app.use(express.json());

// Webhook receive route
app.post(`/bot${TOKEN}`, (req, res) => {
  bot.processUpdate(req.body);
  res.sendStatus(200);
});

// Health check
app.get('/', (req, res) => res.send("Bot Running Successfully Webhook Mode!"));

app.listen(8000, () => console.log("🔥 Webhook Server OK on port 8000"));

// Start handlers
startBot(bot);
