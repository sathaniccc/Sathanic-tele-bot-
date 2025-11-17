import axios from "axios";

export const enhanceHandler = async (bot, msg) => {
  const chat = msg.chat.id;
  bot.sendMessage(chat, "🔄 Enhancing image...");

  try {
    const file = await bot.getFile(msg.photo[msg.photo.length - 1].file_id);
    const img = `https://api.telegram.org/file/bot${process.env.BOT_TOKEN}/${file.file_path}`;

    const api = `https://widipe.com/tools/hd?url=${img}`;
    const res = await axios.get(api);

    bot.sendPhoto(chat, res.data.url);
  } catch {
    bot.sendMessage(chat, "❌ Enhancement failed");
  }
};
