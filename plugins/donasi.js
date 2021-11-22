let fetch = require('node-fetch')
let handler = async (m, { conn }) => await conn.sendButtonLoc(m.chat, await (await fetch(fla + 'donasi')).buffer(), `
┌〔 Donasi • Emoney 〕
├  Dana : 089603042257
├  Pulsa : 089676380659
└────
`.trim(), watermark, 'Menu', '.menu', m)
handler.help = ['donasi']
handler.tags = ['info']
handler.command = /^dona(te|si)$/i

module.exports = handler
