module.exports = async (d, message) => {
    const code = d.command.code;
  
    const r = code.split("$takeMassRole").length - 1;
  
    const inside = d.unpack();
  
    const err = d.inside(inside);
  
    if (err) return d.error(err);
  
    let option = inside.inside;
if (!option) return d.error(`:x: Missing role id in \`$takeMassRole${inside}\``);
    let gmembers = d.message.guild.members.cache.array()

    let role = d.message.guild.roles.cache.get(option)
  
    if (!role) return d.error(`:x: Invalid role id in \`$takeMassRole${inside}\``)
  
    
    for (const member of gmembers) {
      await new Promise(resolve => setTimeout(resolve, 1500))

      member.roles.remove(role.id).catch(err => {})
    }
    
   
    return {
      code: d.command.code.replaceLast(`$takeMassRole${inside}`,""),
    };
  };
