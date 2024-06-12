let handler = async (m, { conn }) => {
    let user = global.db.data.users[m.sender];
    let name = conn.getName(m.sender);
    let taguser = '@' + m.sender.split("@s.whatsapp.net")[0];
    let message = `*˼💧˹┊「 مرحبآ ↫ ${taguser}」*\n> اهـلا مـعـك بـوت بـذكاء اصـطـناعـي\n> لـلمـساعدة اكتب الـاوامـر او شـرح\n> او إضـافـة الـبـوت اكـتـب الـمـطـور\n*✧━━ • ━ 「  ✤  」 ━ • ━━✧*
\n> ❯⏐ 𝐵𝛩𝑇 𝐸𝑅𝑺𝑁`;

    conn.sendFile(m.chat, 'https://telegra.ph/file/e0349308c104834f484cd.jpg', 'image.jpg', message, m);
};

handler.customPrefix = /^(بوت|اوامر|الاوامر)$/i;
handler.command = new RegExp;

export default handler;
