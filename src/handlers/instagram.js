import axios from "axios";

export const igHandler = async (bot, msg) => {
  const chat = msg.chat.id;
  const url = msg.text;

  bot.sendMessage(chat, "⏳ Fetching Instagram Reel...");

  try {
    const api = `https://dark-yasiya-api-new.vercel.app/instagram?url=${url}`;
    const res = await axios.get(api);

    if (!res.data || !res.data.url) {
      return bot.sendMessage(chat, "❌ Failed to fetch video URL.");
    }

    await bot.sendVideo(chat, res.data.url);
  } catch (err) {
    console.log("IG ERROR:", err.message);
    bot.sendMessage(chat, "❌ Instagram download failed. Try another link.");
  }
};
