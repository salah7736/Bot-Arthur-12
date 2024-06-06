
let handler = async (m, { conn, args, usedPrefix, command }) => {
    conn.relayMessage(m.chat, {
      viewOnceMessage: {
        message: {
          interactiveMessage: {
            header: {
              title: '*「✧|───✦❯┇👑┇❮✦───|✧*\n*قـائـمـة بوت ميزوهارا 💫*'
            },
            body: {
              text: '*🔮 افتح القائمة بالضغط على الزر*\n*🏷جميع الاوامر قم بختيار اي امر*'
            },
            nativeFlowMessage: {
              buttons: [
                {
                  name: 'single_select',
                  buttonParamsJson: JSON.stringify({
                    title: 'دوس عليا 💔',
                    sections: [
                      {
                        title: 'List',
                        highlight_label: 'ON',
                        rows: [
                            {
                            header: '☘️ قـسـم الـنـظـام',
                            title: '.ميزو1',
                            description: '',
                            id: 'te'
                          },
                            {
                            header: '☘️ قـسـم الـنـظـام',
                            title: '.ميزو2',
                            description: '',
                            id: 'te'
                          },
                            {
                            header: '☘️ قـسـم الـنـظـام',
                            title: '.ميزو3',
                            description: '',
                            id: 'te'
                          },
                            {
                            header: '☘️ قـسـم الـنـظـام',
                            title: '.ميزو4',
                            description: '',
                            id: 'te'
                          },
                            {
                            header: '☘️ قـسـم الـنـظـام',
                            title: '.ميزو5',
                            description: '',
                            id: 'te'
                          },
                            {
                            header: '☘️ قـسـم الـنـظـام',
                            title: '.ميزو6',
                            description: '',
                            id: 'te'
                          },
                            {
                            header: '☘️ قـسـم الـنـظـام',
                            title: '.مبزو7',
                            description: '',
                            id: 'te'
                          },
                            {
                            header: '☘️ قـسـم الـنـظـام',
                            title: '.ميزو8',
                            description: '',
                            id: 'te'
                          },
                          {
                            header: '☘️ قـسـم الـنـظـام',
                            title: '.مبزو9',
                            description: '',
                            id: 'te'
                          },
                          {
                            header: '👑 قـسـم الـمـطـور',
                            title: '.مبزو10',
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
