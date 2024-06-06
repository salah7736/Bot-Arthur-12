let handler = async (m, { conn, args, usedPrefix, command }) => {
    conn.relayMessage(m.chat, {
      viewOnceMessage: {
        message: {
          interactiveMessage: {
            header: {
              title: '*🎗️ قـائـمـة الـاوامــر🎗️*'
            },
            body: {
              text: '🧿 افتح القائمة بواسطة الزر\n🍒 لا تلعب كثير في القائمة'
            },
            nativeFlowMessage: {
              buttons: [
                {
                  name: 'single_select',
                  buttonParamsJson: JSON.stringify({
                    title: 'دوس القائمة⚡️',
                    sections: [
                      {
                        title: 'List',
                        highlight_label: 'ON',
                        rows: [
                            {
                            header: '*❯⏐اوامـر الـجـروبـات↞📜*',
                            title: '.ميزو1'',
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
                            id: 'te'
                          },
                            {
                            header: '*❯⏐اوامـر الأصـوات↞🎵*',
                            title: '.ميزو8',
                            description: '',
                            id: 'te'
                          },
                            {
                            header: '*❯⏐اوامـر ديـنـيـه↞🕌*',
                            title: '.ميزو9',
                            description: '',
                            id: 'te'
                          },
                            {
                            header: '*❯⏐مـعلـومـات الـبـوت↞🪙',
                            title: '.ميزو10',
                            description: '',
                            id: 'te'
                          },
                          {
                            header: '*❯⏐اوامـر الـمطـور↞👑*',
                            title: '.ميزو11',
                            description: '',
                            id: 'te'
                          },
                          {
                            header: '*❯⏐جـمـيـع الاوامـر ↞💎*',
                            title: '.ميزو12',
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
