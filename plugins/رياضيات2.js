let handler = m => m
handler.before = async function (m) {
    if (!/^-?[0-9]+(\.[0-9]+)?$/.test(m.text)) return !0
    let id = m.chat
    if (!m.quoted || !m.quoted.fromMe || !m.text || !/^احسب/i.test(m.quoted.text)) return !0
    this.math = this.math ? this.math : {}
    if (!(id in this.math)) return this.reply(m.chat, 'انتهت اللعبة', m)
    if (m.quoted.id == this.math[id][0].id) {
        let math = JSON.parse(JSON.stringify(this.math[id][1]))
        if (m.text == math.result) {
            global.db.data.users[m.sender].exp += math.bonus
            clearTimeout(this.math[id][3])
            delete this.math[id]
            m.reply(`*〄↞┇🎗الإجابة الصحيحة!┇*\n\n*〖‣ فاز :+${math.bonus} XP〗*`)
        } else {
            if (--this.math[id][2] == 0) {
                clearTimeout(this.math[id][3])
                delete this.math[id]
                m.reply(`*〄↞┇لقد انتهت الفرص┇*\n\n*〖إجابة :${math.result}〗*`)
      } else m.reply(`*〄↞┇❕❗️إجابة خاطئة┇*\n\n*〄↞┇لا تزال هناك  ${this.math[id][2]} فرص┇*`)
        }
    }
    return !0
}

export default handler
