const TelegramBot = require("node-telegram-bot-api");

// Replace with your bot token from BotFather
const token = process.env.BOT_TOKEN;

// Create a bot that uses webhooks
const bot = new TelegramBot(token);

// This function will handle incoming updates
const handleUpdate = (update) => {
  const chatId = update.message.chat.id;
  const userId = update.message.from.id;
  const firstName = update.message.from.first_name;
  const lastName = update.message.from.last_name || "";
  const username = update.message.from.username || "";

  // Handle /start command
  if (update.message.text === "/start") {
    bot.sendMessage(
      chatId,
      `Hello ${firstName}, welcome to the Telegram Webhook Bot!`
    );
  } 

 if (update.message.text === "/mydata") {
    bot.sendMessage(
      chatId,
      `User Data:\nID: ${userId}\nName: ${firstName} ${lastName}\nUsername: ${username}`
    );
  } 
};

// Vercel will call this function when there is an update
module.exports = (req, res) => {
  if (req.method === "POST") {
    try {
      const update = req.body;
      handleUpdate(update);
      res.status(200).end(); // Respond with a 200 OK status
    } catch (error) {
      console.error("Error handling update:", error);
      res.status(500).end(); // Respond with a 500 Internal Server Error
    }
  } else {
    res.status(404).end(); // Respond with a 404 Not Found for other methods
  }
};
