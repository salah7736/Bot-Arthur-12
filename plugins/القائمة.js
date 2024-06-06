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
                    title: 'دوس هنا ',
                    sections: [
                      {
                        title: 'قوائم البوت',
                        highlight_label: 'اختار',
                        rows: [
                          {
                            header: 'قسم الانمي',
                            title: '.المطور',
                            description: '',
                            id: 'te'
                          },
                          {
                            header: 'قسم الاوامر',
                            title: '.الاوامر',
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
handler.command = ['قايمه']

export default handler
