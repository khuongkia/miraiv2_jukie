module.exports.config = {
    name: "tagx",
    version: "1.0.0",
    hasPermssion: 1,
    credits: "Jukie~",
    description: "Tag liên tục người bạn tag trong 5 lần\nCó thể gọi là gọi hồn người đó",
    commandCategory: "Nhóm",
    usages: "tagx @tag",
    cooldowns: 10,
    dependencies: {
        "fs-extra": "",
        "axios": ""
    }
}

module.exports.run = async function({ api, args, Users, event}) {
    var mention = Object.keys(event.mentions)[0];
    if(!mention) return api.sendMessage("Cần phải tag 1 người bạn muốn chửi", event.threadID);
    let data = await api.getUserInfo(mention);
    let name = data[parseInt(mention)].name;
    var arraytag = [];
        arraytag.push({id: mention, tag: name});
    var a = function (a) { api.sendMessage(a, event.threadID); }
a("????? !");
setTimeout(() => {a({body: "Alo bạn eyyy" + " " + name, mentions: arraytag})}, 3000);
setTimeout(() => {a({body: "ra đây tui bảo" + " " + name, mentions: arraytag})}, 5000);
setTimeout(() => {a({body: "Hiện hồn ra nhanh" + " " + name, mentions: arraytag})}, 7000);
setTimeout(() => {a({body: "nhanh nhanh bạn ey" + " " + name, mentions: arraytag})}, 9000);
setTimeout(() => {a({body: "bạn trốn đi đâu rồi" + " " + name, mentions: arraytag})}, 12000);
setTimeout(() => {a({body: "bực rồi đấy!" + " " + name, mentions: arraytag})}, 15000);
  
  }