const reducer = (globalState, action) =>{
    switch (action.type) {
        case "GET_DATA_USUARIO":
            return{
                ...globalState,
                authStatus:true,
                currentUser:action.payload
            }

        case "REGISTRO_USUARIO":
        case "LOGIN_USUARIO":
            localStorage.setItem("token", action.payload)
            return{
               ...globalState,
               authStatus:true  
            }
            
        
        case "LOGOUT_USUARIO":
            localStorage.removeItem("token")
            return{
                ...globalState,
                // user:null,
                authStatus:null,
                // msg:action.payload
            }
    
        default:
            return globalState
    }
}

export default reducer