const qrcode = require('qrcode-terminal');

const { Client } = require('whatsapp-web.js');
const { MessageMedia } = require('whatsapp-web.js');

const client = new Client();

client.on('qr', (qr) => {
    qrcode.generate(qr, { small: true });
});

client.on('ready', () => {
    console.log('Client is ready!');
});

client.on('message', async (message) => {
    if (message.body === '!ping') {
        await message.reply('pong');
    }
});

client.on('message', async (msg) => {
    if (msg.body === '!send-media') {
        const media = await MessageMedia.fromUrl('https://via.placeholder.com/350x150.png');
        await client.sendMessage(msg.from, media);
    }
});
 
client.initialize();

async function kirimPesan(req, res) {
  try {
    const nomor = req.query.nomor;

    if (!nomor) {
      return res.status(400).json({ error: 'Nomor tidak boleh kosong' });
    }

    const message = 'Tesstttt !';
    
    await client.sendMessage(`${nomor}@c.us`, message);

    return res.status(200).json({ message: 'Pesan terkirim!' });
  } catch (error) {

    return res.status(500).json({ error: 'Gagal mengirim pesan' });
  }
}

module.exports = {
  kirimPesan
};
