const TelegramBot = require("node-telegram-bot-api");
const token = "7242228033:AAGeQDRDv5Texj6aLM586TMbdiZcZy2gd_8"; // Replace with your own bot token
//const bot = new TelegramBot(token, { polling: true });

/* bot.on("message", (msg) => {
  const chatId = msg.chat.id;
  const messageText = msg.text;

  if (messageText === "/start") {
    bot.sendMessage(chatId, "Welcome to the bot!");
  }
});
bot.on("message", (msg) => {
  const chatId = msg.chat.id;

  // send a message to the chat acknowledging receipt of their message
  bot.sendMessage(chatId, "Received your message");
}); */
const { Telegraf } = require("telegraf");

const bot = new Telegraf(token);
//bot.telegram.setWebhook("https://my-bot-beryl-iota.vercel.app/index.js");
bot.start((ctx) => ctx.reply("Welcome"));
bot.help((ctx) => ctx.reply("Send me a sticker"));
bot.on("sticker", (ctx) => ctx.reply("👍"));
bot.hears("hi", (ctx) => ctx.reply("Hey there"));
bot.launch();
