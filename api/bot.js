
const TelegramBot = require('node-telegram-bot-api');

// Replace with your bot token
const token = process.env.BOT_TOKEN;

// Create a bot that uses webhooks
const bot = new TelegramBot(token);

// This function will handle incoming updates
const handleUpdate = (update) => {
    const chatId = update.message.chat.id;
    const userId = update.message.from.id;
    const firstName = update.message.from.first_name;
    const lastName = update.message.from.last_name || '';
    const username = update.message.from.username || '';

    // Handle /start command
    if (update.message.text === '/start') {
        bot.sendMessage(chatId, `Hello ${firstName}, welcome to the Telegram Crypto App!`);
    }

    // Handle /mydata command
    if (update.message.text === '/mydata') {
        bot.sendMessage(chatId, `User Data:\nID: ${userId}\nName: ${firstName} ${lastName}\nUsername: ${username}`);
    }
};

// Vercel will call this function when there is an update
module.exports = (req, res) => {
    if (req.method === 'POST') {
        const update = req.body;
        handleUpdate(update);
        res.sendStatus(200); // Respond with a 200 OK status
    } else {
        res.sendStatus(404); // Respond with a 404 Not Found for other methods
    }
};
