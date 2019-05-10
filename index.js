const { Client, Collection } = require("discord.js");
const { token } = require("./config.js");
const client = new Client();

["aliases", "commands"].forEach(x => client[x] = new Collection());
["command", "event"].forEach(x => require(`./utilities/${x}`)(client));

client.login(token);