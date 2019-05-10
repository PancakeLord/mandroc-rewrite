const { prefix } = require(`../../utilities/config`)

module.exports = (client) => {
        console.log(`[MANDROC] API connection successful.`)
        client.user.setActivity(`${prefix}help | ${client.guilds.size} guilds`, { type: 'WATCHING'})
}