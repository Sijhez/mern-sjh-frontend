//funciones para captar dispatch del context Y CAMBIAR ESTADO GLOBAL

const reducer = (globalState, action)=>{
     
    switch (action.type) {
        case "UPDATE_OBRA":
        case "GET_OBRA":
            return{
                ...globalState,
               singleArt:action.payload
            } 

        case "GET_ARTICLES":
          
            return{
                ...globalState,
                obrasArt:action.payload
            }
           
            
        default:
            return globalState
    }
}

export default reducer