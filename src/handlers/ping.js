export const pingHandler = async (bot, chatId) => {
  const start = Date.now();
  const msg = await bot.sendMessage(chatId, "📡 Checking ping...");
  bot.editMessageText(`📡 Ping: ${Date.now() - start} ms`, {
    chat_id: chatId,
    message_id: msg.message_id
  });
};
