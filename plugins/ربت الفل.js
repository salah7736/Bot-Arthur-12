
global.rpg = {
	
  role(level) {
    level = parseInt(level)
    if (isNaN(level)) return { name: '', level: '' }
    
    const role = [
      { name: "جـنـدي🗡", level: 0 }, { name: "مبتدئ❄️", level: 4 }, 
      { name: "سـاحـر🧙🏻", level: 8 }, { name: "مـغـوار🏹", level: 12 }, 
      { name: "فـارس🛡", level: 16 }, { name: "مـغـامـر🔱", level: 20 }, 
      { name: "نـخـبة⚖️", level: 24 }, { name: "حـكـيم🪔", level: 28 }, 
      { name: "قـرصـان🏴‍☠️", level: 32 }, { name: "سيد ظل🌙", level: 36 },
      { name: "سينسي📜", level: 48 }, { name: "الساحر الأسود", level: 52 }, 
      { name: "صـيـاد🧜🏻‍♂️", level: 56 }, { name: "حـاكـم👑", level: 60 }, 
      { name: "مـلـك🫅", level: 100 }
    ];

    return role.reverse().find(role => level >= role.level)
  }
}

