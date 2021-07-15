const Interpreter = require('../../interpreter.js')
module.exports = async (oldc,client) =>{
const cmds = client.cmd.channelDelete.array()
const data = {guild:oldc.guild,channel:oldc,client:client} 
let chan;
for(const cmd of cmds){
  if(cmd?.channel?.includes("$")){
      const id = await Interpreter (client,data,[],{name:"ChannelParser",code:cmd?.channel},client.db,true) 
      const channel = client.channels.cache.get(id) 
      chan = channel 
  }
    else {
        const channel = client.channels.cache.get(cmd.channel)
    chan = channel 
         }
    await Interpreter(client,data,[],cmd,client.db, false,chan?.id,{oldc:oldc},chan)
}
}