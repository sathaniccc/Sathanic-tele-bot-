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
    bot.sendMessage(
        msg.chat.id,
        "👋 *Welcome to Sathanic Tele Bot!*\nChoose an option 👇",
        { ...mainMenu, parse_mode: "Markdown" }
    );
});

bot.on("callback_query", async (query) => {
    const chatId = query.message.chat.id;
    const data = query.data;

    try {
        if (data === "yt") {
            return bot.sendMessage(chatId, "🎬 Send the YouTube video link to download:");
        }

        if (data === "ig") {
            return bot.sendMessage(chatId, "📱 Send the Instagram Reel link:");
        }

        if (data === "enhance") {
            return bot.sendMessage(chatId, "🖼 Send the photo to enhance:");
        }

        if (data === "song") {
            return bot.sendMessage(chatId, "🎧 Send the YouTube link to extract MP3:");
        }

        if (data === "alive") {
            return bot.sendMessage(chatId, "💚 Bot Alive & Running!\nServer: Koyeb\nStatus: OK ✅");
        }

        if (data === "ping") {
            const start = Date.now();
            const sent = await bot.sendMessage(chatId, "📡 Checking ping...");
            const end = Date.now();

            return bot.editMessageText(
                `📡 Ping: *${end - start}ms*`,
                { chat_id: chatId, message_id: sent.message_id, parse_mode: "Markdown" }
            );
        }
    } finally {
        bot.answerCallbackQuery(query.id);
    }
});

// Message Handler
bot.on("message", async (msg) => {
    if (!msg.text) return;
    const chatId = msg.chat.id;
    const text = msg.text;

    // YouTube Link
    if (text.includes("youtube.com") || text.includes("youtu.be")) {
        return bot.sendMessage(chatId, "⏳ YouTube Downloading...\n⚠ Feature not added yet.");
    }

    // Instagram Reel Link
    if (text.includes("instagram.com")) {
        return bot.sendMessage(chatId, "⏳ Instagram Reel Downloading...\n⚠ Feature not added yet.");
    }
});
