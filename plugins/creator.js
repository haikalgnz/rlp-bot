function handler(m) {
  m.reply('Chat jika penting, harap tidak spam.')
  this.sendContact(m.chat, '6289696454872@s.whatsapp.net', 'RLP-BOT', m)
}
handler.help = ['owner', 'creator']
handler.tags = ['info']

handler.command = /^(owner|creator)$/i

module.exports = handler
