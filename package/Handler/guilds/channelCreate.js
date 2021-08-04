const Interpreter = require('../../interpreter.js')
module.exports = async (newc,client) =>{
const cmds = client.cmd.channelCreate.array()
const data = {guild:newc.guild,channel:newc,client:client} 
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
    await Interpreter(client,data,[],cmd,client.db, false,chan?.id,{newc:newc},chan)
}
}