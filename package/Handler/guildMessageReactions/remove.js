
const Interpreter = require('../../interpreter.js')
module.exports = async (reaction,user,client)=>{
const cmds = client.cmd.reactionRemove.array()
const data = {
    client:client,
    guild:reaction.emoji.guild,
    author:user
}
for(const cmd of cmds){
    let chan;
    if(cmd.channel?.includes("$")){
        const id = await Interpreter(client,data,[],{name:"ChannelParser",code:cmd.channel},client.db,true)
        chan = client.channels?.cache.get(id)
    }
    await Interpreter(client,data,[],cmd,client.db,false,chan?.id,{},chan)
}
}