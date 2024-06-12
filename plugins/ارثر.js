let handler = async (m, { conn }) => {
    let user = global.db.data.users[m.sender];
    let name = conn.getName(m.sender);
    let taguser = '@' + m.sender.split("@s.whatsapp.net")[0];
    let message = `*نورت${taguser}*\n*〄┇ الامـر غـلـط سـوي نـقطـة وبـدون فـواصـل ┇*〄\n> ❯⏐ 𝐵𝛩𝑇 𝐸𝑅𝑺𝑁`;

    conn.sendFile(m.chat, 'https://telegra.ph/file/e0349308c104834f484cd.jpg', 'image.jpg', message, m);
};

handler.customPrefix = /^(امر 2|.ميزو 1|.امر|.امر 3|.امر 4|.امر 5|.امر 6|.امر 7|.امر 8.|امر)$/i;
handler.command = new RegExp;

export default handler;
