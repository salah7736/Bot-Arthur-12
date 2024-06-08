let handler = async (m, { conn }) => {
    let user = global.db.data.users[m.sender];
    let name = conn.getName(m.sender);
    let taguser = '@' + m.sender.split("@s.whatsapp.net")[0];
    let message = `${taguser}\n*✿┇اهـلًا مـعـك بـوت مـيـزوهـارا للمـساعـدة اكــتب الـاوامـر او تـضيف البـوت اكتـب المـطور ┇✿*`;

    conn.sendFile(m.chat, 'https://telegra.ph/file/fcb03ca7c027822e545e2.jpg', 'image.jpg', message, m);
};

handler.customPrefix = /^(ايريين|ارثرر)$/i;
handler.command = new RegExp;

export default handler;
///
let handler = async (m, { conn }) => {
    let user = global.db.data.users[m.sender];
    let name = conn.getName(m.sender);
    let taguser = '@' + m.sender.split("@s.whatsapp.net")[0];
    let message = `${taguser}\n*✿┇اهـلًا مـعـك بـوت مـيـزوهـارا للمـساعـدة اكــتب الـاوامـر او تـضيف البـوت اكتـب المـطور ┇✿*`;

    conn.sendFile(m.chat, 'https://telegra.ph/file/fcb03ca7c027822e545e2.jpg', 'image.jpg', message, m);
};

handler.customPrefix = /^(ميي)$/i;
handler.command = new RegExp;

export default handler;

//
let handler = async (m, { conn }) => {
    let user = global.db.data.users[m.sender];
    let name = conn.getName(m.sender);
    let taguser = '@' + m.sender.split("@s.whatsapp.net")[0];
    let message = `${taguser}\n*✿┇اهـلًا مـعـك بـوت مـيـزوهـارا للمـساعـدة اكــتب الـاوامـر او تـضيف البـوت اكتـب المـطور ┇✿*`;

    conn.sendFile(m.chat, 'https://telegra.ph/file/fcb03ca7c027822e545e2.jpg', 'image.jpg', message, m);
};

handler.customPrefix = /^(سات|ساات|ساتا)$/i;
handler.command = new RegExp;

export default handler;
//
let handler = async (m, { conn }) => {
    let user = global.db.data.users[m.sender];
    let name = conn.getName(m.sender);
    let taguser = '@' + m.sender.split("@s.whatsapp.net")[0];
    let message = `${taguser}\n*✿┇اهـلًا مـعـك بـوت مـيـزوهـارا للمـساعـدة اكــتب الـاوامـر او تـضيف البـوت اكتـب المـطور ┇✿*`;

    conn.sendFile(m.chat, 'https://telegra.ph/file/fcb03ca7c027822e545e2.jpg', 'image.jpg', message, m);
};

handler.customPrefix = /^(بوتا|مينا)$/i;
handler.command = new RegExp;

export default handler;
