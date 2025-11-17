import axios from 'axios';

export const igHandler = async (bot, msg) => {
  const chat = msg.chat.id;
  bot.sendMessage(chat, "⏳ Fetching Instagram Reel...");

  try {
    const api = `https://widipe.com/download/igdl?url=${msg.text}`;
    const res = await axios.get(api);
    bot.sendVideo(chat, res.data.result[0].url);
  } catch {
    bot.sendMessage(chat, "❌ Instagram download failed");
  }
};
