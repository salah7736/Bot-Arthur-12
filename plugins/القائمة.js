
import { prepareWAMessageMedia, generateWAMessageFromContent, getDevice } from '@whiskeysockets/baileys'

const handler = async (m, { conn, text, usedPrefix: prefijo }) => {
    const device = await getDevice(m.key.id);
    const mentionId = m.key.participant || m.key.remoteJid;

    if (device !== 'desktop' || device !== 'web') {      
        var joanimiimg = await prepareWAMessageMedia({ image: {url: 'https://telegra.ph/file/099294db2f81baae9f1dc.jpg'}}, { upload: conn.waUploadToServer })
        const interactiveMessage = {
            body: { text: `ميمي`.trim() },
            footer: { text: `*✧━━ • ━ 「 ✤ 」 ━ • ━━✧*\n*〄┃قائمـة الـاوامـر ┃↞ ❮ 🔮 ❯* \n*✧━━ • ━ 「 ✤ 」 ━ • ━━✧*\n > لا تنسى قبل كل امر تحط نقطة❗\n> راسل المطور اذا حدث اي عطل🧿`.trim() },  
            header: {
                title: `*✧━━ • ━ 「 l✤l 」 ━ • ━━✧*\n˼‏❖˹┇⇠『 @${mentionId.split('@')[0]}』\n*╮─────✦❯┇💎┇❮✦─────╭*\n*〄┃ بـووت ↞ 🎀『 مـيزوهـارا 』*\n*〄┃وقت التشغيل ↞ ⌛『 دائم』*\n*〄┃وضـع الـبوت ↞ 🪧『 عـام 』*\n*〄┃الـمـنـصـه ↞ 🌐『 هـيـروكـو』*\n*╯─────✦❯┇💎┇❮✦─────╰*\n❯⏐ 𝐵𝛩𝑇 𝑀𝐼𝑍𝑈𝐻𝐴𝑅𝐴\n*✧━━ • ━ 「 l✤l 」 ━ • ━━✧*\n> جميع الاوامر قم بختيار اي امر🏷\n> افتح القائمة بالضغط على الزر☘️`,
                subtitle: ``,
                hasMediaAttachment: true,
                imageMessage: joanimiimg.imageMessage,
            },
            nativeFlowMessage: {
  						buttons: [
  							{
  								name: 'single_select',
  						  	buttonParamsJson: JSON.stringify({
  						  		title: 'القائمة',
  						  		sections: [
  						  			{
  						  				title: 'List',
  							  	    highlight_label: '𝐵𝛩𝑇',
  						  		    rows: [
  						  		    	{
  						  		    		header: '❯⏐اوامـر الـجـروبـات↞📜',
  										      title: 'ميزو1',
  									    	  description: '',
  								    		  id: '.ميزو1'
  						  		    	}
  						  		    ]
  						  			},
  						  			{
  						  				highlight_label: '𝐵𝛩𝑇',
  						  				rows: [
  						  					{
  						  		    		header: '❯⏐اوامـر الأعـضـاء↞🪽',
  										      title: 'ميزو2',
  									    	  description: '',
  								    		  id: '.ميزو2'
  						  		    	}
  						  				]
  						  			},
                                    {
  						  				highlight_label: '𝐵𝛩𝑇',
  						  				rows: [
  						  					{
  						  		    		header: '❯⏐اوامـر  الـترفـيـه↞🎀',
  										      title: 'ميزو3',
  									    	  description: '',
  								    		  id: '.ميزو3'
  						  		    	}
  						  				]
  						  			},
                                    {
  						  				highlight_label: '𝐵𝛩𝑇',
  						  				rows: [
  						  					{
  						  		    		header: '❯⏐اوامـر  التـحمـيل↞🖨️',
  										      title: 'ميزو4',
  									    	  description: '',
  								    		  id: '.ميزو4'
  						  		    	}
  						  				]
  						  			},
  						  	{
  						  				highlight_label: '𝐵𝛩𝑇',
  						  				rows: [
  						  					{
  						  		    		header: '❯⏐اوامـر الـصـور↞☘️',
  										      title: 'ميزو5',
  									    	  description: '',
  								    		  id: '.ميزو5'
  						  		    	}
  						  				]
  						  			},
  						  	{
  						  				highlight_label: '𝐵𝛩𝑇',
  						  				rows: [
  						  					{
  						  		    		header: '❯⏐اوامـر الـلـفـل↞🏅',
  										      title: 'ميزو6',
  									    	  description: '',
  								    		  id: '.ميزو6'
  						  		    	}
  						  				]
  						  			},
  						  	{
  						  				highlight_label: '𝐵𝛩𝑇',
  						  				rows: [
  						  					{
  						  		    		header: '❯⏐اوامـر الملصقات↞❄️',
  										      title: 'ميزو7',
  									    	  description: '',
  								    		  id: '.ميزو7'
  						  		    	}
  						  				]
  						  			},
  						  	{
  						  				highlight_label: '𝐵𝛩𝑇',
  						  				rows: [
  						  					{
  						  		    		header: '❯⏐اوامـر الأصـوات↞🎵',
  										      title: 'ميزو8',
  									    	  description: '',
  								    		  id: '.ميزو8'
  						  		    	}
  						  				]
  						  			},
  						  	{
  						  				highlight_label: '𝐵𝛩𝑇',
  						  				rows: [
  						  					{
  						  		    		header: '❯⏐اوامـر ديـنـيـه↞🕌',
  										      title: 'ميزو9',
  									    	  description: '',
  								    		  id: '.ميزو9'
  						  		    	}
  						  				]
  						  			},
  						  	{
  						  				highlight_label: '𝐵𝛩𝑇',
  						  				rows: [
  						  					{
  						  		    		header: '❯⏐مـعلـومـات الـبـوت↞🪙',
  										      title: 'ميزو10',
  									    	  description: '',
  								    		  id: '.ميزو10'
  						  		    	}
  						  				]
  						  			},
  						  	{
  						  				highlight_label: '𝐵𝛩𝑇',
  						  				rows: [
  						  					{
  						  		    		header: '❯⏐اوامـر الـمطـور↞👑',
  										      title: 'ميزو11',
  									    	  description: '',
  								    		  id: 'ميزو11'
  						  		    	}
  						  				]
  						  			},
  						  	
  						  			{
  						  				highlight_label: '𝐵𝛩𝑇',
  						  				rows: [
  						  					{
  						  		    		header: '❯⏐جـمـيـع الاوامـر ↞💎',
  										      title: 'ميزو12',
  									    	  description: '',
  								    		  id: '.ميزو12'
  						  		    	}
  						  				]
  						  			}
  						  		]
  						  	})
  							},
                              {
                                  name: 'قسم المطور',
                                  buttonParamsJson: JSON.stringify({
                                      display_text: '',
                                      id: `بوت`
                                  })
                              },
                              {
                                  name: 'cta_url',
                                  buttonParamsJson: JSON.stringify({
                                      display_text: 'url',
                                      url: 'https://whatsapp.com/channel/0029VaenWxX0AgWDJwlaWG0W',
                                      merchant_url: ''
                                  })
                              },
                              {
                                  name: 'cta_call',
                                  buttonParamsJson: JSON.stringify({
                                      display_text: 'call',
                                      id: '.مطور'
                                  })
                              },
                              {
                                  name: 'cta_copy',
                                  buttonParamsJson: JSON.stringify({
                                      display_text: 'copy',
                                      id: 'https://whatsapp.com/channel/0029VaenWxX0AgWDJwlaWG0W',
                                      copy_code: 'message'
                                  })
                              },
                              {
                                  name: 'cta_reminder',
                                  buttonParamsJson: JSON.stringify({
                                      display_text: 'cta_reminder',
                                      id: 'كت'
                                  })
                              },
                              {
                                  name: 'cta_cancel_reminder',
                                  buttonParamsJson: JSON.stringify({
                                      display_text: 'cta_cancel_reminder',
                                      id: 'ايرين'
                                  })
                              },
                              {
                                  name: 'address_message',
                                  buttonParamsJson: JSON.stringify({
                                      display_text: 'address_message',
                                      id: 'message'
                                  })
                              },
                              {
                                  name: 'send_location',
                                  buttonParamsJson: JSON.stringify({
                                  })
                              }
  			  		],
                messageParamsJson: ''
            }
        };        

        let msg = generateWAMessageFromContent(m.chat, {
            viewOnceMessage: {
                message: {
                    interactiveMessage,
                },
            },
        }, { userJid: conn.user.jid, quoted: m })
        msg.message.viewOnceMessage.message.interactiveMessage.contextInfo = { mentionedJid: [mentionId] };
        conn.relayMessage(m.chat, msg.message, { messageId: msg.key.id });

    } else {
        conn.sendFile(m.chat, 'JoAnimi•Error.jpg', m);      
    }    
};
handler.help = ['القائمة'];
handler.tags = ['For Test'];
handler.command = /^(القائمة)$/i;
export default handler;
