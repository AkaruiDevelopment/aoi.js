module.exports = (statuses,client) =>{
    console.log(statuses)
    if(statuses.size !==0){
      let y = 0
    
    let status = statuses.array()
    const f = async () => {

       if(!status[y]){ y = 0 }
     setTimeout(()=>{
         client.user.setPresence({
             status:status[y].status,
             activities:Array.isArray(status[y].activity) ? status[y].activity : [status[y].activity],
             afk: status[y].afk
         })

        y++
     f()
 //  console.log("after y++:"+y)
     },(status[y]?.time||12)*1000)
    
    }
    f()
    }
    }