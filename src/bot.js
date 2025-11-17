import { mainMenu } from './menu.js';

import { ytHandler } from './handlers/youtube.js';
import { igHandler } from './handlers/instagram.js';
import { enhanceHandler } from './handlers/enhance.js';
import { songHandler } from './handlers/song.js';
import { pingHandler } from './handlers/ping.js';
import { aliveHandler } from './handlers/alive.js';

export const startBot = (bot) => {

  bot.onText(/\/start/, (msg) => {
    bot.sendMessage(msg.chat.id, "👋 Varu Makane !", mainMenu);
  });

  bot.on("callback_query", async (q) => {
    const chatId = q.message.chat.id;

    switch (q.data) {
      case "yt": return bot.sendMessage(chatId, "🎬 Send YouTube link");
      case "ig": return bot.sendMessage(chatId, "📱 Send Instagram link");
      case "enhance": return bot.sendMessage(chatId, "🖼 Send photo");
      case "song": return bot.sendMessage(chatId, "🎧 Send YouTube link for MP3");
      case "ping": return pingHandler(bot, chatId);
      case "alive": return aliveHandler(bot, chatId);
      default: return;
    }
  });

  bot.on("message", async (msg) => {
    if (msg.photo) return enhanceHandler(bot, msg);
    if (msg.text?.includes("youtube")) return ytHandler(bot, msg);
    if (msg.text?.includes("youtu.be")) return ytHandler(bot, msg);
    if (msg.text?.includes("instagram.com")) return igHandler(bot, msg);
    if (msg.text?.includes("youtube.com")) return songHandler(bot, msg);
  });
};
