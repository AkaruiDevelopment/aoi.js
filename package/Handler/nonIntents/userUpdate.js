const Interpreter = require('../../interpreter.js')
module.exports = async (ou,nu,client)=>{
const cmds = client.cmd.userUpdate.array()
let chan;
    const data = {
        author:ou,
        client:client
    }
    for(const cmd of cmds){
        if(cmd.channel?.includes("$")){
            const id = await Interpreter(client,data,[],{name:"ChannelParser",code:cmd.channel},client.db,true)
            chan = client.channels.cache.get(id)
        }
await Interpreter(client,data,[],cmd,client.db,false,chan?.id,{olduser:ou,newuser:nu},chan)
    }

}