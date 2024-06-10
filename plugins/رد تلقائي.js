
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
   }else if (/^ورعه|ياورع$/i.test(m.text)) { 
     responses = [ 
'*مافي غيرك ورع🦦*'
     ]; 
 }else if (/^زعلت$/i.test(m.text)) { 
     responses = [ 
'*ياعيوني متزعليش🥺*'
     ]; 
   }else if (/^بروح$/i.test(m.text)) { 
     responses = [ 
'*احسن ريحنا منك*'
   ]; 
   }else if (/^بحبك$/i.test(m.text)) { 
     responses = [ 
'*حبك برص*',
'*ورع🤭*',
'*برااااااع 🔚*',
]; 
   }else if (/^تكرهني|اكرهك$/i.test(m.text)) { 
     responses = [ 
'*ماعاش من يكرهكك حبي 🙁*',
'*لا بس لا تتعب نفسك لحبك🫥*',
'*ااي اكرهك🙄*',   ]; 
     
     }else if (/^هاي|هالو$/i.test(m.text)) { 
     responses = [ 
       '*وش هاي قول/ي السلام عليكم🤨*',  

     ]; 
}else if (/^نعاام/i.test(m.text)) { 
     responses = [ 
       '*حد ناداك*',  

     ]; 
   }else if (/^عمك$/i.test(m.text)) { 
     responses = [ 
'تقصدني صح🤭'
     ]; 
   } else if (/^احبك$/i.test(m.text)) { 
     responses = [ 
'*ها توكل*'
     ]; 
     }else if (/^ببندك|راقب$/i.test(m.text)) { 
     responses = [ 
       'راقب رقمك',  

     ];
     }else if (/^منوره|منور$/i.test(m.text)) { 
     responses = [ 
       '*ادري🤧*',
      '*لا دا نورك*',

     ];
     }else if (/^بوت زق|مادخلك$/i.test(m.text)) { 
     responses = [ 
       'ها وش فيك معي؟',  

     ];
     }else if (/^ياكلب|كل زق$/i.test(m.text)) { 
     responses = [ 
       '*اصص عشان مضربكش عيب الكلام ده*',  

     ];
     }else if (/^وين البوت|بوت فاشل$/i.test(m.text)) { 
     responses = [ 
       '*ملكش دخل🙄*',  

     ]; 
     }else if (/^كيفك$/i.test(m.text)) { 
     responses = [ 
       'بخيير وانت',  

     ];
     }else if (/^ههههههههههههههه$/ .test(m.text)) { 
     responses = [ 
       '*في شي يضحك🐦*','*جعلها دائما الصحكة*'  
     ];
       }else if (/^تفاعل|وينكم$/i.test(m.text)) { 
     responses = [ 
       '*تفاعل بجيب لك ايفون🤧*',  
     ];
            }else if (/^سارق|ياسارق$/i.test(m.text)) { 
     responses = [ 
       'عندك دليل حد شاف ؟',  
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
