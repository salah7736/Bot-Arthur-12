import PhoneNumber from 'awesome-phonenumber'
import fetch from 'node-fetch'
let handler = async (m, { conn }) => {
  let user = db.data.users[m.sender]
  let who = m.mentionedJid && m.mentionedJid[0] ? m.mentionedJid[0] : m.fromMe ? conn.user.jid : m.sender
    let pp = await conn.profilePictureUrl(who, 'image').catch(_ => './src/avatar_contact.png')
    let { premium, level, limit, exp, lastclaim, registered, regTime, age, pasangan } = global.db.data.users[m.sender]
    let username = conn.getName(who)
    let name = conn.getName(who)
    let fkon = { key: { fromMe: false, participant: `${m.sender.split`@`[0]}@s.whatsapp.net`, ...(m.chat ? { remoteJid: '16504228206@s.whatsapp.net' } : {}) }, message: { contactMessage: { displayName: `${name}`, vcard: `BEGIN:VCARD\nVERSION:3.0\nN:;a,;;;\nFN:${name}\nitem1.TEL;waid=${m.sender.split('@')[0]}:${m.sender.split('@')[0]}\nitem1.X-ABLabel:Ponsel\nEND:VCARD`}}}
    let str = `
    *「✧|───✦❯┇💎┇❮✦───|✧」* 
*⎔↞┃الاسم🀄 ↞* ${username} \n*⎔↞┃اسم🎖 ↞*Bio:* ' + about : ''}
*⎔↞┃منشن☘️ ↞* @${who.replace(/@.+/, '')}
*⎔↞┃لفلك📮 ↞* ${level}
*⎔↞┃رابط⚡️ ↞* https://wa.me/${who.split`@`[0]}
*⎔↞┃عمر🔍↞* ${registered ? age : ''} Tahun
*⎔↞┃شريك🍁 ↞*  ${pasangan ? `@${pasangan.split("@")[0]}` : `Tidak Punya`}
*⎔↞┃مسجل📠 ↞* ${registered ? 'نعم': 'لا'}
*⎔↞┃مميز🌷 ↞* ${premium ? "نعم" :"لا"}
*⎔↞┃وقت مميز ↞⏱️* 
${clockString(user.premiumTime)}
*「✧|───✦❯┇💎┇❮✦───|✧」* 
`.trim()
   await conn.sendFile(m.chat, pp, '', str, m)
}
handler.help = ['profile']
handler.tags = ['main']
handler.command = /^بروفايل$/i
export default handler

const more = String.fromCharCode(8206)
const readMore = more.repeat(4001)

function clockString(ms) {
  let d = isNaN(ms) ? '--' : Math.floor(ms / 86400000)
  let h = isNaN(ms) ? '--' : Math.floor(ms / 3600000) % 24
  let m = isNaN(ms) ? '--' : Math.floor(ms / 60000) % 60
  let s = isNaN(ms) ? '--' : Math.floor(ms / 1000) % 60
  return [d, '*Hari*\n ', h, ' *Jam*\n ', m, ' *Menit*\n ', s, ' *Detik* '].map(v => v.toString().padStart(2, 0)).join('')
}
///
import { createHash } from 'crypto'
import { canLevelUp, xpRange } from '../lib/levelling.js'

let handler = async (m, { conn, usedPrefix, command }) => {
  let who = m.quoted
    ? m.quoted.sender
    : m.mentionedJid && m.mentionedJid[0]
      ? m.mentionedJid[0]
      : m.fromMe
        ? conn.user.jid
        : m.sender
  if (!(who in global.db.data.users)) throw `✳️ The user is not found in my database`
  let pp = await conn.profilePictureUrl(who, 'image').catch(_ => './Guru.jpg')
  let user = global.db.data.users[who]
  let about = ((await conn.fetchStatus(who).catch(console.error)) || {}).status || ''
  let { name, exp, credit, lastclaim, registered, regTime, age, level, role, wealth, warn } =
    global.db.data.users[who]
  let { min, xp, max } = xpRange(user.level, global.multiplier)
  let username = conn.getName(who)
  let math = max - xp
  let prem = global.prems.includes(who.split`@`[0])
  let sn = createHash('md5').update(who).digest('hex')

  // • @${who.replace(/@.+/, '')}
  let str = `*🪪 Name:* ${username}${about ? '\n\n 🎌 *Bio:* ' + about : ''}

*⚠️ Warnings:* ${warn}/${maxwarn}

*💰 Gold :* ${credit}

*✨ Level* : ${level}

*⬆️ XP* : Total ${exp} (${user.exp - min} / ${xp})\n${math <= 0 ? `Ready for *${usedPrefix}levelup*` : `*${math}xp* missing to level up`}

*🏆 Rank:* ${role}

*📇 Registered :* ${registered ? 'Yes' : 'No'}

*⭐ Premium* : ${prem ? 'Yes' : 'No'}
`
  conn.sendFile(m.chat, pp, 'profil.jpg', str, m, false, { mentions: [who] })
  m.react(done)
}
handler.help = ['profile']
handler.tags = ['group']
handler.command = ['profile']

export default handler
