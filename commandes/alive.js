const { zokou } = require('../framework/zokou');
const {addOrUpdateDataInAlive , getDataFromAlive} = require('../bdd/alive')
const moment = require("moment-timezone");
const s = require(__dirname + "/../set");

zokou(
    {
        nomCom : 'alive',
        categorie : 'General'
        
    },async (dest,zk,commandeOptions) => {

 const {ms , arg, repondre,superUser} = commandeOptions;

 const data = await getDataFromAlive();

 if (!arg || !arg[0] || arg.join('') === '') {

    if(data) {
       
        const {message , lien} = data;


        var mode = "public";
        if ((s.MODE).toLocaleLowerCase() != "yes") {
            mode = "private";
        }
      
    
     
    moment.tz.setDefault('Etc/GMT');

// Créer une date et une heure en GMT
const temps = moment().format('HH:mm:ss');
const date = moment().format('DD/MM/YYYY');

    const alivemsg = `
*Owner* : ${s.OWNER_NAME}
*Mode* : ${mode}
*Date* : ${date}
*Hours(GMT)* : ${temps}

 join now and see new
 https://chat.whatsapp.com/KHHQyCizbp0Db5Ci7giRoa
 
 *kavishan-Md*`

 if (lien.match(/\.(mp4|gif)$/i)) {
    try {
        zk.sendMessage(dest, { video: { url: lien }, caption: alivemsg }, { quoted: ms });
    }
    catch (e) {
        console.log("🥵🥵 Menu erreur " + e);
        repondre("🥵🥵 Menu erreur " + e);
    }
} 
// Checking for .jpeg or .png
else if (lien.match(/\.(jpeg|png|jpg)$/i)) {
    try {
        zk.sendMessage(dest, { image: { url: lien }, caption: alivemsg }, { quoted: ms });
    }
    catch (e) {
        console.log("🥵🥵 Menu erreur " + e);
        repondre("🥵🥵 Menu erreur " + e);
    }
} 
else {
    
    repondre(alivemsg);
    
}

    } else {
        if(!superUser) { repondre("we are always alive but put youre alive message") ; return};

      await   repondre("𝕜𝔸𝕍𝕀𝕊ℍ𝕊ℕ-𝕄𝔻 am alive but please set you're alive message. \n\n Bot created by 𝐊𝐀𝐕𝐈𝐒𝐇𝐀𝐍");
         repondre("━━━━━━━𝕜𝔸𝕍𝕀𝕊ℍ𝕊ℕ-𝕄𝔻━━━━━━━ \n\n 𝕜𝔸𝕍𝕀𝕊ℍ𝕊ℕ-𝕄𝔻 𝒊𝒔 𝒂𝒄𝒕𝒊𝒗𝒆 𝒑𝒍𝒆𝒂𝒔𝒆 𝒚𝒐𝒖 𝒎𝒖𝒔𝒕 𝒋𝒐𝒊𝒏 𝒕𝒉𝒊𝒔 𝒄𝒉𝒂𝒏𝒏𝒆𝒍 𝒖𝒑𝒅𝒂𝒕𝒆 𝒇𝒐𝒓 𝒎𝒐𝒓𝒆 𝒂𝒃𝒐𝒖𝒕 kavishan-𝒎𝒅 \n\n https://chat.whatsapp.com/KYAN2uzltDYFLxK0qLGcm5")
     }
 } else {

    if(!superUser) { repondre ("Only the owner can  modify the alive") ; return};

  
    const texte = arg.join(' ').split(';')[0];
    const tlien = arg.join(' ').split(';')[1]; 


    
await addOrUpdateDataInAlive(texte , tlien)

repondre('message alive refresh successfully')

}
    });
