//𝐂𝐫𝐞𝐚𝐭𝐞𝐝 𝐁𝐲 𝗡𝗶𝗸𝗶𝘁𝗮 𝐎𝐟𝐟𝐢𝐜𝐢𝐚𝐥

const {
    WAConnection,
    MessageType,
    Presence,
    Mimetype,
    GroupSettingChange
} = require('@adiwajshing/baileys')
const fs = require('fs')
const moment = require('moment-timezone')
const { banner, start, success } = require('./lib/functions')
const { color } = require('./lib/color')

require('./index.js')
nocache('./index.js', module => console.log(`${module} Telah Di Update✓`))

const starts = async (Nikita = new WAConnection()) => {
    Nikita.logger.level = 'warn'
    Nikita.version = [2, 2143, 8]
    var _0x2930aa=_0xf2e1;function _0xf2e1(_0x3ed1bd,_0x4e54cb){var _0x5c5b4f=_0x5c5b();return _0xf2e1=function(_0xf2e1ae,_0x151726){_0xf2e1ae=_0xf2e1ae-0x17e;var _0x331490=_0x5c5b4f[_0xf2e1ae];return _0x331490;},_0xf2e1(_0x3ed1bd,_0x4e54cb);}function _0x5c5b(){var _0x1d46c0=['1072728uWAarP','24117192hBJjgh','20KUeZPg','185WOQgZR','browserDescription','9464430jYtZeu','safari','8FoQnjT','3282824pxdZCP','150544UmIHXE','251095MEvKHZ','5039118KhOwro','Nikita\x20Official','windows\x2010'];_0x5c5b=function(){return _0x1d46c0;};return _0x5c5b();}(function(_0x5c1e70,_0x5550fc){var _0x621109=_0xf2e1,_0x1a225f=_0x5c1e70();while(!![]){try{var _0x51b3e5=parseInt(_0x621109(0x18b))/0x1+parseInt(_0x621109(0x188))/0x2*(-parseInt(_0x621109(0x181))/0x3)+parseInt(_0x621109(0x18a))/0x4*(-parseInt(_0x621109(0x184))/0x5)+-parseInt(_0x621109(0x186))/0x6+-parseInt(_0x621109(0x17e))/0x7+parseInt(_0x621109(0x189))/0x8+parseInt(_0x621109(0x182))/0x9*(parseInt(_0x621109(0x183))/0xa);if(_0x51b3e5===_0x5550fc)break;else _0x1a225f['push'](_0x1a225f['shift']());}catch(_0x462a45){_0x1a225f['push'](_0x1a225f['shift']());}}}(_0x5c5b,0xdbe65),Nikita[_0x2930aa(0x185)]=[_0x2930aa(0x17f),_0x2930aa(0x187),_0x2930aa(0x180)]);
    console.log(banner.string)
    Nikita.on('qr', () => {
        console.log(color('[','white'), color('!','red'), color(']','white'), color(' Scan bang'))
    })

    fs.existsSync('./kagura.json') && Nikita.loadAuthInfo('./kagura.json')
    Nikita.on('connecting', () => {
        start('2', 'Connecting...')
    })
    Nikita.on('open', () => {
        success('2', 'Connected')
    })
    await Nikita.connect({timeoutMs: 30*1000})
        fs.writeFileSync('./kagura.json', JSON.stringify(Nikita.base64EncodedAuthInfo(), null, '\t'))

Nikita.on('group-participants-update', async (anu) => {
mem = anu.participants[0]
const time = moment.tz('Asia/Jakarta').format('DD/MM HH:mm:ss')
const mdata = await Nikita.groupMetadata(anu.jid)
try {
console.log(anu)
if (anu.action == 'add') {
fkontakk = { key: { fromMe: false, participant: `0@s.whatsapp.net`, ...(anu.jid ? { remoteJid: '6283136505591-1604595598@g.us' } : {})}, message: { "contactMessage":{"displayName": `${mdata.subject}`,"vcard":`BEGIN:VCARD\nVERSION:3.0\nN:2;Nikita;;;\nFN:Nikita\nitem1.TEL;waid=62882003688369:62882003688369\nitem1.X-ABLabel:Mobile\nEND:VCARD` }}}
num = anu.participants[0]
try {
ppimg = await Nikita.getProfilePicture(`${num.split('@')[0]}@c.us`)
} catch {
ppimg = 'https://i0.wp.com/www.gambarunik.id/wp-content/uploads/2019/06/Top-Gambar-Foto-Profil-Kosong-Lucu-Tergokil-.jpg'
}
let buff = await getBuffer(ppimg)
masuk =`𝐇𝐚𝐢 *@${num.split('@')[0]}*\n𝐈𝐧𝐭𝐫𝐨 𝐃𝐮𝐥𝐮 𝐘𝐚𝐤 !!\n𝐍𝐚𝐦𝐚 :\n𝐀𝐬𝐤𝐨𝐭 :\n𝐔𝐦𝐮𝐫 :\n𝐊𝐞𝐥𝐚𝐬 :\n𝐒𝐭𝐚𝐭𝐮𝐬 :`
Nikita.sendMessage(mdata.id, masuk, MessageType.text, { quoted: fkontakk, thumbnail: fs.readFileSync('./gambar/fake.jpg'), contextInfo: { forwardingScore: 508, isForwarded: true, externalAdReply:{title: `Welcome To ${mdata.subject}`,body:"",mediaType:"2",thumbnail:buff,mediaUrl:`https://youtube.com/channel/UC81Zi3947pXudKwS6DD4-TQ`}}})
} else if (anu.action == 'remove') {
fkontakk = { key: { fromMe: false, participant: `0@s.whatsapp.net`, ...(anu.jid ? { remoteJid: '6283136505591-1604595598@g.us' } : {})}, message: { "contactMessage":{"displayName": `${mdata.subject}`,"vcard":`BEGIN:VCARD\nVERSION:3.0\nN:2;Nikita;;;\nFN:Nikita\nitem1.TEL;waid=62882003688369:62882003688369\nitem1.X-ABLabel:Mobile\nEND:VCARD` }}}
num = anu.participants[0]
try {
ppimg = await Nikita.getProfilePicture(`${num.split('@')[0]}@c.us`)
} catch {
ppimg = 'https://i0.wp.com/www.gambarunik.id/wp-content/uploads/2019/06/Top-Gambar-Foto-Profil-Kosong-Lucu-Tergokil-.jpg'
}
let buff = await getBuffer(ppimg)
keluar =`𝐃𝐚𝐡𝐡 *@${num.split('@')[0]}*\n𝐁𝐞𝐛𝐚𝐧 𝐓𝐞𝐥𝐚𝐡 𝐊𝐞𝐥𝐮𝐚𝐫 𝐃𝐚𝐫𝐢 𝐆𝐫𝐮𝐩\n𝐊𝐚𝐫𝐞𝐧𝐚 𝐃𝐢𝐚 𝐒𝐞𝐫𝐢𝐧𝐠 𝐃𝐢 𝐁𝐮𝐥𝐥𝐲\n𝐀𝐰𝐨𝐤𝐚𝐰𝐨𝐤 𝐉𝐚𝐝𝐢 𝐃𝐢𝐚 𝐁𝐚𝐩𝐞𝐫𝐚𝐧`
Nikita.sendMessage(mdata.id, keluar, MessageType.text, { quoted: fkontakk, thumbnail: fs.readFileSync('./gambar/fake.jpg'), contextInfo: { forwardingScore: 508, isForwarded: true, externalAdReply:{title: `Keluar Dari ${mdata.subject}`,body:"",mediaType:"2",thumbnail:buff,mediaUrl:`https://youtube.com/channel/UC81Zi3947pXudKwS6DD4-TQ`}}})
} else if (anu.action == 'promote') {
fkontakk = { key: { fromMe: false, participant: `0@s.whatsapp.net`, ...(anu.jid ? { remoteJid: '62882003688369-1604595598@g.us' } : {})}, message: { "contactMessage":{"displayName": `${mdata.subject}`,"vcard":`BEGIN:VCARD\nVERSION:3.0\nN:2;Nikita;;;\nFN:Nikita\nitem1.TEL;waid=6282279915237:6282279915237\nitem1.X-ABLabel:Mobile\nEND:VCARD` }}}
num = anu.participants[0]
teks = `𝙋𝙍𝙊𝙈𝙊𝙏𝙀 - 𝘿𝙀𝙏𝙀𝘾𝙏𝙀𝘿\n𝐌𝐞𝐦𝐛𝐞𝐫 : *@${num.split('@')[0]}*\n𝐆𝐫𝐨𝐮𝐩 : *${mdata.subject}*\n𝐖𝐚𝐤𝐭𝐮 : *${time}*`
Nikita.sendMessage(mdata.id, teks, MessageType.text, {contextInfo: {"mentionedJid": [num]}, quoted: fkontakk})
console.log(color('|TRM|'), color(`Promote Member ${num.split('@')[0]} In ${mdata.subject}`,  'cyan'))
} 
else if (anu.action == 'demote') {
fkontakk = { key: { fromMe: false, participant: `0@s.whatsapp.net`, ...(anu.jid ? { remoteJid: '62882003688369-1604595598@g.us' } : {})}, message: { "contactMessage":{"displayName": `${mdata.subject}`,"vcard":`BEGIN:VCARD\nVERSION:3.0\nN:2;Nikita;;;\nFN:Nikita\nitem1.TEL;waid=6282279915237:6282279915237\nitem1.X-ABLabel:Mobile\nEND:VCARD` }}}
num = anu.participants[0]
teks = `𝘿𝙀𝙈𝙊𝙏𝙀 - 𝘿𝙀𝙏𝙀𝘾𝙏𝙀𝘿\n𝐌𝐞𝐦𝐛𝐞𝐫 : *@${num.split('@')[0]}*\n𝐆𝐫𝐨𝐮𝐩 : *${mdata.subject}*\n𝐖𝐚𝐤𝐭𝐮 : *${time}*`
Nikita.sendMessage(mdata.id, teks, MessageType.text, {contextInfo: {"mentionedJid": [num]}, quoted: fkontakk})
console.log(color('|TRM|'), color(`Demote Admin ${num.split('@')[0]} In ${mdata.subject}`,  'cyan'))
}
} catch (e) {
console.log('Error : %s', color(e, 'red'))
}
})	       

Nikita.on('chat-update', async (message) => {
require('./index.js')(Nikita, message)
})
}

function nocache(module, cb = () => { }) {
console.log('[ ! ]', `'${module}'`, 'DI Pantau Oleh Nikita Official')
fs.watchFile(require.resolve(module), async () => {
await uncache(require.resolve(module))
cb(module)
})

}

function uncache(module = '.') {
return new Promise((resolve, reject) => {
try {
delete require.cache[require.resolve(module)]
resolve()
} catch (e) {
reject(e)
}
})
}

starts()
