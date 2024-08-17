const fs = require('fs');
if (fs.existsSync('config.env')) require('dotenv').config({ path: './config.env' });

function convertToBool(text, fault = 'true') {
    return text === fault ? true : false;
}
module.exports = {
SESSION_ID: process.env.SESSION_ID,
ALIVE_IMG: process.env.ALIVE_IMG || "https://telegra.ph/file/2147e260c1e68aa62a2f9.jpg",
ALIVE_MSG: process.env.ALIVE_MSG || "> *ɪ ᴀᴍ ᴀʟᴡᴀʏs ᴀʟɪᴠᴇ : 🧘🏻*",
};
