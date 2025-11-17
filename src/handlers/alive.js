export const aliveHandler = (bot, chatId) => {
  bot.sendMessage(
    chatId,
    "💚 Bot Status: Alive & Running!\n\n🚀 Server: Koyeb\n⚙️ Status: OK\n🕒 Uptime: Active"
  );
};
