
import { prepareWAMessageMedia, generateWAMessageFromContent, getDevice } from '@whiskeysockets/baileys'

const handler = async (m, { conn, text, usedPrefix: prefijo }) => {
    const device = await getDevice(m.key.id);
    const mentionId = m.key.participant || m.key.remoteJid;

    if (device !== 'desktop' || device !== 'web') {      
        var joanimiimg = await prepareWAMessageMedia({ image: {url: 'https://telegra.ph/file/642bf4a98ba2106255e3c.jpg'}}, { upload: conn.waUploadToServer })
        const interactiveMessage = {
            body: { text: `*╮───────╯✦╰───────╭*\n*〄┊قائمـة الـاوامـر ┊❮ 「 📃」*\n*╯───────╮✦╭───────╰*`.trim() },
            footer: { text: `> جميع الاوامر قم بختيار اي امر🏷\n> افتح القائمة بالضغط على الزر☘️\n > لا تنسى قبل كل امر تحط نقطة❗\n> راسل المطور اذا حدث اي عطل🧿\n✦━━━━━━━ •➢• ━━━━━━━✦`.trim() },  
            header: {
                title: `*↞❯┊وَاذْكُـرْ رَبَّـكَ إِذَا نَـسِـيتَ🖤┊❮*\n*˼💧˹┊「 مرحبآ ↫  @${mentionId.split('@')[0]}」*\n✦━━━━━━━ •➢• ━━━━━━━✦\n*˼🏷️˹┊「اسـم البوت↫  ايـريـن 」*\n*˼⏳˹┊「 وقت التشغيل↫  دائم」*\n*˼🌐˹┊「الـمـنـصـه↫ هـيـروكـو 」*\n✦━━━━━━━ •➢• ━━━━━━━✦\n❯⏐ 𝐵𝛩𝑇 𝐸𝑅𝑺𝑁\n*✧━━ • ━  𓆩 ✤ 𓆪  ━ • ━━✧*`,
                subtitle: ``,
                hasMediaAttachment: true,
                imageMessage: joanimiimg.imageMessage,
            },
            nativeFlowMessage: {
  						buttons: [
  							{
  								name: 'single_select',
  						  	buttonParamsJson: JSON.stringify({
  						  		title: '❯⏐قائـمة الاوامـر🔮',
  						  		sections: [
  						  			{
  						  				title: 'List',
  							  	    highlight_label: '𝐵𝛩𝑇',
  						  		    rows: [
  						  		    	{
  						  		    		header: '❯⏐اوامـر الـجـروبـات↞📜',
  										      title: 'امر1',
  									    	  description: '',
  								    		  id: '.امر1'
  						  		    	}
  						  		    ]
  						  			},
  						  			{
  						  				highlight_label: '𝐵𝛩𝑇',
  						  				rows: [
  						  					{
  						  		    		header: '❯⏐اوامـر الأعـضـاء↞🪽',
  										      title: 'امر2',
  									    	  description: '',
  								    		  id: '.امر2'
  						  		    	}
  						  				]
  						  			},
                                    {
  						  				highlight_label: '𝐵𝛩𝑇',
  						  				rows: [
  						  					{
  						  		    		header: '❯⏐اوامـر  الـترفـيـه↞🔮',
  										      title: 'امر3',
  									    	  description: '',
  								    		  id: '.امر3'
  						  		    	}
  						  				]
  						  			},
                                    {
  						  				highlight_label: '𝐵𝛩𝑇',
  						  				rows: [
  						  					{
  						  		    		header: '❯⏐اوامـر  التـحمـيل↞🖨️',
  										      title: 'امر4',
  									    	  description: '',
  								    		  id: '.امر4'
  						  		    	}
  						  				]
  						  			},
  						  	{
  						  				highlight_label: '𝐵𝛩𝑇',
  						  				rows: [
  						  					{
  						  		    		header: '❯⏐اوامـر الـصـور↞☘️',
  										      title: 'امر5',
  									    	  description: '',
  								    		  id: '.امر5'
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
  								    		  id: '.امر6'
  						  		    	}
  						  				]
  						  			},
  						  	{
  						  				highlight_label: '𝐵𝛩𝑇',
  						  				rows: [
  						  					{
  						  		    		header: '❯⏐اوامـر الملصقات↞❄️',
  										      title: 'امر7',
  									    	  description: '',
  								    		  id: '.امر7'
  						  		    	}
  						  				]
  						  			},
  						  	{
  						  				highlight_label: '𝐵𝛩𝑇',
  						  				rows: [
  						  					{
  						  		    		header: '❯⏐اوامـر الأصـوات↞🎵',
  										      title: 'امر8',
  									    	  description: '',
  								    		  id: '.امر8'
  						  		    	}
  						  				]
  						  			},
  						  	{
  						  				highlight_label: '𝐵𝛩𝑇',
  						  				rows: [
  						  					{
  						  		    		header: '❯⏐اوامـر ديـنـيـه↞🕌',
  										      title: 'امر9',
  									    	  description: '',
  								    		  id: '.امر9'
  						  		    	}
  						  				]
  						  			},
  						  	{
  						  				highlight_label: '𝐵𝛩𝑇',
  						  				rows: [
  						  					{
  						  		    		header: '❯⏐مـعلـومـات الـبـوت↞🪙',
  										      title: 'امر10'',
  									    	  description: '',
  								    		  id: '.امر10'
  						  		    	}
  						  				]
  						  			},
  						  	{
  						  				highlight_label: '𝐵𝛩𝑇',
  						  				rows: [
  						  					{
  						  		    		header: '❯⏐اوامـر الـمطـور↞👑',
  										      title: 'امر11',
  									    	  description: '',
  								    		  id: '.امر11'
  						  		    	}
  						  				]
  						  			},
  						  	
  						  			{
  						  				highlight_label: '𝐵𝛩𝑇',
  						  				rows: [
  						  					{
  						  		    		header: '❯⏐جـمـيـع الاوامـر ↞💎',
  										      title: 'امر12',
  									    	  description: '',
  								    		  id: '.امر12'
  						  		    	}
  						  				]
  						  			}
  						  		]
  						  	})
  							},
                            {
                                  name: 'quick_reply',
                                  buttonParamsJson: JSON.stringify({
                                      display_text: '❯⏐الـمـطـور⚡️',
                                      id: `.المطور`
                                  })
                              },
                              {
                                  name: 'quick_reply',
                                  buttonParamsJson: JSON.stringify({
                                      display_text: '❯⏐شـرح الـبـوت🔍',
                                      id: `.شرح`
                                  })
                              },
                              {
                                  name: 'cta_url',
                                  buttonParamsJson: JSON.stringify({
                                      display_text: '❯⏐قناني الواتساب☘️',
                                      url: 'https://whatsapp.com/channel/0029VaenWxX0AgWDJwlaWG0W',
                                      merchant_url: 'https://whatsapp.com/channel/0029VaenWxX0AgWDJwlaWG0W'
                                  })
                              },
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
handler.help = ['الاوامر'];
handler.tags = ['For Test'];
handler.command = /^(الاوامر|اوامر)$/i;
export default handler;
