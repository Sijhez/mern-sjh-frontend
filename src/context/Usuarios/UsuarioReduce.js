const reducer = (globalState, action) =>{
    switch (action.type) {
        case "REGISTRO_USUARIO":
            localStorage.setItem("token", action.payload)
            return{
               ...globalState,
               authStatus:true  
            }
            
    
        default:
            return globalState
    }
}

export default reducer