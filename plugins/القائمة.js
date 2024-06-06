
let handler = async (m, { conn, args, usedPrefix, command }) => {
    conn.relayMessage(m.chat, {
      viewOnceMessage: {
        message: {
          interactiveMessage: {
            header: {
              title: '✦━━ –⊰ ✤ 〔⚡〕✤ ⊱– ━━✦\n\n ⚡️قـائـمـة بوت ميزوهارا⚡️'
            },
            body: {
              text: '> افتح القائمة بالضغط على الزر🔮\n> جميع الاوامر قم بختيار اي امر🏷\n✦━━ –⊰ ✤ 〔⚡〕✤ ⊱– ━━✦'
            },
            nativeFlowMessage: {
              buttons: [
{
                  name: 'single_select',
                  buttonParamsJson: JSON.stringify({
                    title: 'دوس على الزر ',
                    sections: [
                        {
{
                  name: 'single_select',
                  buttonParamsJson: JSON.stringify({
                    title: '.المطور',
                    sections: [
                        {
                {
                  name: 'single_select',
                  buttonParamsJson: JSON.stringify({
                    title: 'قائمة',
                    sections: [
                      {
                        title: 'List',
                        highlight_label: 'بوت',
                        rows: [
                            {
                            header: '*❯⏐اوامـر الـجـروبـات↞📜*',
                            title: 'ميزو1',
                            description: '',
                            id: 'te'
                          },
                            {
                            header: '*❯⏐اوامـر الأعـضـاء↞🪽*',
                            title: '.ميزو2',
                            description: '',
                            id: 'te'
                          },
                            {
                            header: '*❯⏐اوامـر  الـترفـيـه↞🎀*',
                            title: '.ميزو3',
                            description: '',
                            id: 'te'
                          },
                            {
                            header: '*❯⏐اوامـر  التـحمـيل↞🖨️*',
                            title: '.ميزو4',
                            description: '',
                            id: 'te'
                          },
                            {
                            header: '*❯⏐اوامـر الـصـور↞☘️*',
                            title: '.ميزو5',
                            description: '',
                            id: 'te'
                          },
                            {
                            header: '*❯⏐اوامـر الـلـفـل↞🏅*',
                            title: '.ميزو6',
                            description: '',
                            id: 'te'
                          },
                            {
                            header: '*❯⏐اوامـر الملصقات↞❄️*',
                            title: '.ميزو7',
                            description: '',
                            id: '.ميزو7'
                          },
                            {
                            header: '*❯⏐اوامـر ديـنـيـه↞🕌*',
                            title: '.ميزو8',
                            description: '',
                            id: 'te'
                          },
                          {
                            header: '*❯⏐اوامـر الـمطـور↞👑*',
                            title: 'بوت',
                            description: '',
                            id: 'te'
                          },
                          {
                            header: '*❯⏐جـمـيـع الاوامـر ↞💎*',
                            title: '.ميزو10',
                            description: '',
                            id: 'te'
                          }
                        ]
                      }
                    ]
                  }),
                  messageParamsJson: ''
                }
              ]
            }
          }
        }
      }
    }, {})

}

handler.help = ['info']
handler.tags = ['main']
handler.command = ['القائمة']

export default handler
