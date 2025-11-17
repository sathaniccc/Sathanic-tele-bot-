import axios from 'axios';

export const songHandler = async (bot, msg) => {
  const chat = msg.chat.id;
  bot.sendMessage(chat, "🎧 Converting to MP3...");

  try {
    const api = `https://widipe.com/download/ytmp3?url=${msg.text}`;
    const res = await axios.get(api);
    bot.sendAudio(chat, res.data.result.download);
  } catch {
    bot.sendMessage(chat, "❌ MP3 conversion failed");
  }
};
