import TelegramBot from 'node-telegram-bot-api';

const emailHandler = async (req, res) => {
  if (req.method === 'POST') {
    const { name, tel } = req.body;

    const message = `Somebody has just submitted contact form on www.paradiseeventsplanner.com.
    Contact details: 
    Name: ${name} 
    Telephone number: ${tel}`;

    const bot = new TelegramBot(process.env.TELEGRAM_BOT_TOKEN, {
      polling: true,
    });

    try {
      const dataArray = [];
      const chatIdArray = JSON.parse(process.env.TELEGRAM_CHAT_ID_ARRAY);
      chatIdArray.forEach(async (chatId) => {
        const data = await bot.sendMessage(chatId, message);
        dataArray.push(data);
      });
      console.log('Success.', dataArray);
    } catch (err) {
      console.log('Error', err.stack);
    }

    res.status(200);
    return res.end();
  }
};

export default emailHandler;
