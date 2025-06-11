//══════════════════════════════════════════════════════════════════════════════════════════════════════//
//                                                                                                      //
//                                   𝗤𝗨𝗘𝗘𝗡-𝗔𝗡𝗝𝗨 𝗫ᴾᴿᴼ 𝐁𝐎𝐓                                               //
//                                                                                                      //
//                                         Ｖ：5.0.0                                                       //
//
//
//░██████╗░██╗░░░██╗███████╗███████╗███╗░░██╗  ░█████╗░███╗░░██╗░░░░░██╗██╗░░░██╗  ██╗░░██╗██████╗░██████╗░░█████╗░
//██╔═══██╗██║░░░██║██╔════╝██╔════╝████╗░██║  ██╔══██╗████╗░██║░░░░░██║██║░░░██║  ╚██╗██╔╝██╔══██╗██╔══██╗██╔══██╗
//██║██╗██║██║░░░██║█████╗░░█████╗░░██╔██╗██║  ███████║██╔██╗██║░░░░░██║██║░░░██║  ░╚███╔╝░██████╔╝██████╔╝██║░░██║
//╚██████╔╝██║░░░██║██╔══╝░░██╔══╝░░██║╚████║  ██╔══██║██║╚████║██╗░░██║██║░░░██║  ░██╔██╗░██╔═══╝░██╔══██╗██║░░██║
//░╚═██╔═╝░╚██████╔╝███████╗███████╗██║░╚███║  ██║░░██║██║░╚███║╚█████╔╝╚██████╔╝  ██╔╝╚██╗██║░░░░░██║░░██║╚█████╔╝
//░░░╚═╝░░░░╚═════╝░╚══════╝╚══════╝╚═╝░░╚══╝  ╚═╝░░╚═╝╚═╝░░╚══╝░╚════╝░░╚═════╝░  ╚═╝░░╚═╝╚═╝░░░░░╚═╝░░╚═╝░╚════╝░
//
//
//
//══════════════════════════════════════════════════════════════════════════════════════════════════════//
//*
//  * @project_name : © 𝚀𝚄𝙴𝙴𝙽 𝙰𝙽𝙹𝚄 𝗑ᴾᴿᴼ
//  * @version      : 5.0
//  * @author       : Janith Rashmika
//  * @youtube      : https://www.youtube.com/@gamingrash2006
//  * @description  : © 𝚀𝚄𝙴𝙴𝙽 𝙰𝙽𝙹𝚄 𝗑ᴾᴿᴼ, A Multi-functional WhatsApp bot created by Janith Rashmika.
//*
//*
//Base by Janith Rashmika
//GitHub: @Mrrashmika
//WhatsApp: +94717775628
//Want more free bot scripts? Subscribe to my YouTube channel: https://youtube.com/@gamingrash2006
//   * Created By GitHub: Mrrashmika
//   * Credit To Janith Rashmika
//   * © 2025 © 𝚀𝚄𝙴𝙴𝙽 𝙰𝙽𝙹𝚄 𝗑ᴾᴿᴼ-V4.
// ⛥┌┤
// */

const fs = require("fs");
if (fs.existsSync("config.env"))
  require("dotenv").config({ path: "./config.env" });

function convertToBool(text, fault = "true") {
  return text === fault ? true : false;
}
module.exports = {
  SESSION_ID:
    process.env.SESSION_ID ||
    "ANJU-XPRO~eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoieUFxVmRzTW4rV3NQKzY4Y1ZiaDNVTDUwaWgzcnFtRTd3eWxhajRDQkZIWT0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiSGJYbTQ2d1o4UlY1YlduL2VNN0lKUCttOE9ZbGF1eFphZlVaQmVVUmh4OD0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJhRTgvTlNiSDRybzNKOTAyQlorL29GWlQ5VzJUZ2cycTA2dDFyL2RIZ1g4PSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJ1UHZKV1NoMkpBV203aFlrNXRHeFpNODRONFBBdFVvb1lsS3VCN1V5TmxNPSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IlFFaE4zcEZ6bzJ3NmJya3ZYeGJKTC8rT3paY3hrWVEwTSs2TGRrb0s3blU9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IjBtY1dKMXhBeEY1MUJEOUt1dkdJUGJIaU80cUF5clV3MTJPNkpyWTJ3a009In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoic0NPY0M0Y3o2SncwVE1kMkFVMG4yQUtJQTFBRUl0dW5rMFNYaWs5a2NHZz0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoicGtRSkRMdjlyOFVHUHZXMUNzMkgyMGMyWjZyS2xKdlluSUYwdlRqckZTbz0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6ImdkUGZqTXMrdXJhd2xVOU92NTdLcERSMThtRlJaZTM4RmY1b1FsY0RncmE2U0pzYi90a0cvbTBDeFNPNS9tVmlnVHJmUDB2SEJEMFhDRktZM1NZSmdBPT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6NzgsImFkdlNlY3JldEtleSI6ImM3TjFBVXhHcU1CUzlYeDhQYkZjUisxSlBFMUxqdGNSWWN4amhMYXdyQ2c9IiwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzIjpbeyJrZXkiOnsicmVtb3RlSmlkIjoiOTQ3MDUzMTA5MTlAcy53aGF0c2FwcC5uZXQiLCJmcm9tTWUiOnRydWUsImlkIjoiQzE2NzYzMjlFNUVBODNCMDEwNkEwNkU1MkVBQkIxRDAifSwibWVzc2FnZVRpbWVzdGFtcCI6MTc0OTYzMjMwOX0seyJrZXkiOnsicmVtb3RlSmlkIjoiOTQ3MDUzMTA5MTlAcy53aGF0c2FwcC5uZXQiLCJmcm9tTWUiOnRydWUsImlkIjoiMkQ4RDNERUI3RjFCMDQ3NzhBNzJDMkUwOEJDNzBFNzMifSwibWVzc2FnZVRpbWVzdGFtcCI6MTc0OTYzMjMxMH0seyJrZXkiOnsicmVtb3RlSmlkIjoiOTQ3MDUzMTA5MTlAcy53aGF0c2FwcC5uZXQiLCJmcm9tTWUiOnRydWUsImlkIjoiQjU3OUJERjRENDlGMjI1RUMyOUE4NzQ5QUZDREYxQ0UifSwibWVzc2FnZVRpbWVzdGFtcCI6MTc0OTYzMjMxMn1dLCJuZXh0UHJlS2V5SWQiOjMxLCJmaXJzdFVudXBsb2FkZWRQcmVLZXlJZCI6MzEsImFjY291bnRTeW5jQ291bnRlciI6MSwiYWNjb3VudFNldHRpbmdzIjp7InVuYXJjaGl2ZUNoYXRzIjpmYWxzZX0sImRldmljZUlkIjoiT0dTTUpSb1dTMFNqWE9FdzJlQWh5dyIsInBob25lSWQiOiI4MThiYmM2ZS0xNDYxLTQ5NWEtOGViNS0xMWVkNmZmYTg3YTAiLCJpZGVudGl0eUlkIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiMnhjbGNFdkpST0hOY05kRkxDN0ptQkRVdTVjPSJ9LCJyZWdpc3RlcmVkIjp0cnVlLCJiYWNrdXBUb2tlbiI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkFGTXpEblZSZGl3VTIxTFc1WUErdHBqSXBNRT0ifSwicmVnaXN0cmF0aW9uIjp7fSwicGFpcmluZ0NvZGUiOiJKUzEzNjJQQSIsIm1lIjp7ImlkIjoiOTQ3MDUzMTA5MTk6NjVAcy53aGF0c2FwcC5uZXQiLCJuYW1lIjoia2F2aXlhZmZmaXgiLCJsaWQiOiIyNTcxODg4NDk2MjU0Mjo2NUBsaWQifSwiYWNjb3VudCI6eyJkZXRhaWxzIjoiQ0tTY2hiWUNFS2VLcGNJR0dBRWdBQ2dBIiwiYWNjb3VudFNpZ25hdHVyZUtleSI6IldDNDZFWlJoU3RQWmtQcHJLRitLT0pSeE1nWFlMaTZJRENUdjNxYnhUbVE9IiwiYWNjb3VudFNpZ25hdHVyZSI6IkkyOUx5YzBZQ1VmUE80N3NKOWhBS0NnbmFXdjFqWXhqSU5tZnQ0MjB1WlFIYW4zK0NHUFRtdzUxZzBBbDhmV0lTMHBXNDBhMzE4V1c2aGs2VjZpVkFBPT0iLCJkZXZpY2VTaWduYXR1cmUiOiIrai91bHpDN2VaM1BFdXdYdE5WSWFKRDZoUm5MaDNRK0FpTlRYZkM4VWFHdGFObmQyb1R6UER5MCswaGxUR2Nsajg2NnJQT0xQNVhKdXlYRmlya3NoUT09In0sInNpZ25hbElkZW50aXRpZXMiOlt7ImlkZW50aWZpZXIiOnsibmFtZSI6Ijk0NzA1MzEwOTE5OjY1QHMud2hhdHNhcHAubmV0IiwiZGV2aWNlSWQiOjB9LCJpZGVudGlmaWVyS2V5Ijp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiQlZndU9oR1VZVXJUMlpENmF5aGZpamlVY1RJRjJDNHVpQXdrNzk2bThVNWsifX1dLCJwbGF0Zm9ybSI6InNtYmEiLCJyb3V0aW5nSW5mbyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkNBVUlFZz09In0sImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcCI6MTc0OTYzMjMwOCwibGFzdFByb3BIYXNoIjoiMlY3N3FVIiwibXlBcHBTdGF0ZUtleUlkIjoiQUFBQUFPRjAifQ==",
  BOT_NUMBER:
    process.env.BOT_NUMBER || "94705310919",
  PASSWORD: 
    process.env.PASSWORD || "kaviya2009#",
  SUDO: process.env.SUDO
    ? process.env.SUDO.split(",")
    : ["94717775628", "94758775628"],
  PORT: process.env.PORT || "3000",
  SESSION_DIR: process.env.SESSION_DIR || "sess",
};
