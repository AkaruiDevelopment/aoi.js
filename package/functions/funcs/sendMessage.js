const {ErrorHandler} = require('../../Handler/parsers.js')

module.exports = async d=> {
 
  const code = d.command.code
  
  const inside = d.unpack()
	const err = d.inside(inside)

	if (err) return d.error(err)
  
  const fields = inside.splits
  
  if (fields.length < 1) return d.error(`${d.func}: Invalid arguments provided in ${after}`)
  
  const returnID = fields.pop()
  
  const msg = fields.join(";")
  
  const m = await ErrorHandler(d,msg,"object")
  if (!m) return d.error(`${d.func}: Failed to send message!`)
  
  return {
    code: code.replaceLast(`$sendMessage${inside}`, returnID === "yes" ? m.id : "") 
  } 
}
