function handler(m) {
  m.reply('Chat jika penting, harap tidak spam.')
  this.sendContact(m.chat, global.owner[0], this.getName(global.owner[0] + '@s.whatsapp.net'), m)
  this.sendContact(m.chat, '62895372305081@s.whatsapp.net', '۩๖ۣۜℜLƤ27', m)
}
handler.help = ['owner', 'creator']
handler.tags = ['info']

handler.command = /^(p)$/i

module.exports = handler
