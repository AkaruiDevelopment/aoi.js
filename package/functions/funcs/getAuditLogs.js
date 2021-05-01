module.exports = async d => {
    const code = d.command.code

    const inside = d.unpack()

        const options = [
            limit = 5,
            userID,
            action = `ALL`,
            guildID = d.message.guild.id,
            format = `{executor} - {user} - {action}`
        ] = inside.splits

        const guild = d.client.guilds.cache.get(guildID)

        if (!guild) return d.error(`:x: Invalid guild ID in \`$getAuditLogs${inside}\``)

        const user = userID ? d.client.users.cache.get(userID) : null

        const audit = await guild.fetchAuditLogs({limit: limit, user: user, type: action})

        if (!audit) return d.error(`:x: Failed fetching audit logs!`)
        
        const text = audit.entries.map(logs => format.replace(`{executor}`, logs.executor.username).replace("{user}", logs.target).replace("{action}", logs.action)).join('\n')

        return {
            code: code.replaceLast(`$getAuditLogs${inside}`, text)
        }
}