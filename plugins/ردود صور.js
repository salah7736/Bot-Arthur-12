let handler = async (m, { conn }) => {
    let user = global.db.data.users[m.sender];
    let name = conn.getName(m.sender);
    let taguser = '@' + m.sender.split("@s.whatsapp.net")[0];
    let message = `${taguser}\n كم مره اقلك اذلف`;

    conn.sendFile(m.chat, 'https://telegra.ph/file/280978fedc8d6d44250c2.jpg', 'image.jpg', message, m);
};

handler.customPrefix = /^(ايريه)$/i;
handler.command = new RegExp;

export default handler;
