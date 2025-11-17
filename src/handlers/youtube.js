import axios from 'axios';

export const ytHandler = async (bot, msg) => {
  const chat = msg.chat.id;
  bot.sendMessage(chat, "⏳ Downloading video...");

  try {
    const api = `https://widipe.com/download/ytmp4?url=${msg.text}`;
    const res = await axios.get(api);
    await bot.sendVideo(chat, res.data.result.url);
  } catch {
    bot.sendMessage(chat, "❌ Failed to download YouTube video");
  }
};
