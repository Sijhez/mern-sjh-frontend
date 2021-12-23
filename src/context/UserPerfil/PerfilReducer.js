const reducer = (globalState, action)=>{
    switch (action.type) {
        case "GET_PROFILES":
            return{
                ...globalState,
                perfiles:action.payload
            }

        case "GET_PROFILE":
            case"UPDATE_PROFILE":
            return{
                ...globalState,
                userPerfil:action.payload
            }

            
            
    
        default:
            return globalState
    }

}
export default reducer