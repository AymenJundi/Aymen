require('dotenv').config();
const express = require('express');
const fetch = require('node-fetch');
const cors = require('cors');

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

app.post('/send-message', async (req, res) => {
  const { name, email, message } = req.body;

  if (!name || !email || !message) {
    return res.status(400).json({ error: 'Please fill in all fields.' });
  }

  const TELEGRAM_API = `https://api.telegram.org/bot${process.env.TELEGRAM_BOT_TOKEN}/sendMessage`;

  const formattedMessage = `
🧾 *New Contact Form Message*:

👤 *Name:* ${name}
📧 *Email:* ${email}
💬 *Message:*
${message}
  `;

  try {
    const telegramRes = await fetch(TELEGRAM_API, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        chat_id: process.env.TELEGRAM_CHAT_ID,
        text: formattedMessage,
        parse_mode: "Markdown"
      }),
    });

    const data = await telegramRes.json();

    if (!data.ok) {
      return res.status(500).json({ error: 'Failed to send message to Telegram' });
    }

    res.status(200).json({ success: true, message: 'Message sent successfully!' });
  } catch (err) {
    console.error('Telegram Error:', err);
    res.status(500).json({ error: 'Something went wrong' });
  }
});

app.listen(PORT, () => {
  console.log(`✅ Server running on http://localhost:${PORT}`);
});
