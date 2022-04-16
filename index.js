function orderid(type,names ) {
    var name= undefined || names

    if (type === "long" ){
        if (name !== undefined){
            return names+"-"+Math.floor(Math.random() * Math.floor(Math.random() * Date.now())) +"-"+ Date.now()
        }else{
            return Math.floor(Math.random() * Math.floor(Math.random() * Date.now())) +"-"+ Date.now()
        }
        
    }
 
     else{
        if (name !== undefined){
            return names+"-"+Math.floor(Math.random() * Math.floor(Math.random() * Date.now())) 
        }else{
            return Math.floor(Math.random() * Math.floor(Math.random() * Date.now()))
        }
     }
    
  }

module.exports = orderid;