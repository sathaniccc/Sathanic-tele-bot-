import TelegramBot from "node-telegram-bot-api";
import axios from "axios";

const bot = new TelegramBot(process.env.BOT_TOKEN, { polling: true });

const mainMenu = {
    reply_markup: {
        inline_keyboard: [
            [{ text: "🎬 YouTube Downloader", callback_data: "yt" }],
            [{ text: "📱 Instagram Reel Downloader", callback_data: "ig" }],
            [{ text: "🖼 HD Photo Improve", callback_data: "enhance" }],
            [{ text: "🎧 Song Downloader", callback_data: "song" }],
            [{ text: "💚 Alive Status", callback_data: "alive" }],
            [{ text: "📡 Ping", callback_data: "ping" }]
        ]
    }
};

bot.onText(/\/start/, (msg) => {
    bot.sendMessage(msg.chat.id, "👋 Welcome to the Multi-Feature Telegram Bot!\nChoose an option👇", mainMenu);
});

bot.on("callback_query", async (query) => {
    const chatId = query.message.chat.id;

    if (query.data === "yt") {
        return bot.sendMessage(chatId, "🎬 Send the YouTube video link you want to download:");
    }

    if (query.data === "ig") {
        return bot.sendMessage(chatId, "📱 Send the Instagram reel link:");
    }

    if (query.data === "enhance") {
        return bot.sendMessage(chatId, "🖼 Send a photo to enhance quality:");
    }

    if (query.data === "song") {
        return bot.sendMessage(chatId, "🎧 Send the YouTube link to extract MP3:");
    }

    if (query.data === "alive") {
        return bot.sendMessage(chatId, "💚 Bot Alive & Working!\nServer: Koyeb\nStatus: OK ✅");
    }

    if (query.data === "ping") {
        const start = Date.now();
        const sent = await bot.sendMessage(chatId, "📡 Checking ping...");
        const end = Date.now();
        return bot.editMessageText(`📡 Ping: ${end - start} ms`, { chat_id: chatId, message_id: sent.message_id });
    }

    bot.answerCallbackQuery(query.id);
});

// Handle all messages for download placeholders
bot.on("message", async (msg) => {
    if (!msg.text) return;
    const chatId = msg.chat.id;
    const text = msg.text;

    // YouTube Link
    if (text.includes("youtube.com") || text.includes("youtu.be")) {
        bot.sendMessage(chatId, "⏳ Downloading YouTube video...\n⚠ Feature code not added yet.");
        return;
    }

    // Insta Link
    if (text.includes("instagram.com")) {
        bot.sendMessage(chatId, "⏳ Downloading Instagram Reel...\n⚠ Feature code not added yet.");
        return;
    }
});
