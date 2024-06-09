
let handler = m => m; 
 handler.all = async function (m) { 

   let chat = global.db.data.chats[m.chat]; 
   let responses; 
   if (/^ميزوهارا$/i.test(m.text)) { 
     responses = [ 
 '*عيون ميزوهارا*'  
     ]; 
} else if (/^السلام عليكم|سلام عليكم ورحمه الله وبركاته|سلام عليكم|السلام عليكم ورحمه الله وبركاته$/i.test(m.text)) { 
     responses = [ 
       '*وعليكم السلام*',  
     ]; 
   }else if (/^بروح|اعتزلت|بعتزل$/i.test(m.text)) { 
     responses = [ 
'*احسن ريحنا منك*'
     ]; 
 }else if (/^نورت|منوره|منور$/i.test(m.text)) { 
     responses = [ 
'*ادري🐦*'
     ]; 
   }else if (/^زعلت|بزعل|زعلان|حزن$/i.test(m.text)) { 
     responses = [ 
'*ياعيوني خذلك ايفون ولا تزعل🥺*'
   ]; 
   }else if (/^تحبني|بحبك|$/i.test(m.text)) { 
     responses = [ 
'*اخرس ياورع*',
'*برااااااع 🔚*',
]; 
   }else if (/^تكرهني|اكرهك|يكرهني$/i.test(m.text)) { 
     responses = [ 
'*ماعاش من يكرهكك حبي 🙁*',
'*لا بس لا تتعب نفسك لحبك🫥*',
'*ااي اكرهك🙄*',   ]; 
     
     }else if (/^هاي|هالو$/i.test(m.text)) { 
     responses = [ 
       '*وش هاي قول/ي السلام عليكم🤨*',  

     ]; 
}else if (/^بحبك/i.test(m.text)) { 
     responses = [ 
       '*في شي يضحك*',
      '*دايما الضحكه🥺*,
      
     ]; 
   }else if (/^سارق|ياسارق|سرقني$/i.test(m.text)) { 
     responses = [ 
'*حد شاف عندك دليل*'
     ]; 
   } else if (/^احبك$/i.test(m.text)) { 
     responses = [ 
     '*ها توكل*',
     'حبك برص',
     ]; 
     }else if (/^كيفك$/i.test(m.text)) { 
     responses = [ 
       ' بخير وانت',  

     ];
     }else if (/^ورع|ورعه$/i.test(m.text)) { 
     responses = [ 
       '*مافي غيرك ورع🦦*',  

     ];
     }else if (/^اذلف|مادخلك|انقلع$/i.test(m.text)) { 
     responses = [ 
       '*ها وش فيك معي؟*',  

     ];
     }else if (/^وينكم|تفاعلو|تفاعلوا$/i.test(m.text)) { 
     responses = [ 
       '*تفاعل بجيب لك ايفون🤧*',  

     ];
     }else if (/^كلب|كل زق|ياكلب|حيوان$/i.test(m.text)) { 
     responses = [ 
       '*اصص عشان مضربكش عيب الكلام ده*',  

     ]; 
     }else if (/^نعم$/i.test(m.text)) { 
     responses = [ 
       '*حد ناداك*',  

     ];
     }else if (/^عمك|عمتك$/ .test(m.text)) { 
     responses = [ 
       '*تقصدي🤭*',  
     ];
       }else if (/^ملل|مللل$/i.test(m.text)) { 
     responses = [ 
       '*عارفين ب اسكت احسن لك*',  
     ];
            }else if (/^Nezااuko$/i.test(m.text)) { 
     responses = [ 
       '',  
     ];
            }else if (/^جيت|هلا$/i.test(m.text)) { 
     responses = [ 
       'نورت',  
     ];
   }
   if (responses) { 
     let randomIndex = Math.floor(Math.random() * responses.length); 
     conn.reply(m.chat, responses[randomIndex], m); 
   } 
   return !0 
 }; 

 export default handler;
