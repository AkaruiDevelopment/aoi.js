const Interpreter = require('../../interpreter.js')
module.exports = async (oldm,newm,client) =>{
   let chan;
  const cmds = client.cmd.memberUpdate.array()
  let data = {guild:newm?.guild,author:newm?.user,member:newm,client:client}
  for(const cmd of cmds){
  if(cmd.channel?.includes("$")){
     const id = await Interpreter(client,data,[],{name:"ChannelParser",code:cmd.channel},client.db,true)
  chan = client.channels.cache.get(id)
     }
   await Interpreter(client,data,[],cmd,client.db,false,cmd?.channel,{newm:newm,oldm:oldm},chan)
  }
}