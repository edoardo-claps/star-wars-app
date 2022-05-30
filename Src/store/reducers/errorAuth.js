
import { ERROR_FOUND,NO_ERROR } from "../actions/constants"

const initialistate={
    message:''
}

const errorAuth=(state=initialistate, action)=>{
    
    switch(action.type){
        case ERROR_FOUND:

        console.log('sono nel reducer',action)
            return{
                ...state,
                message:action.message
            }
        case NO_ERROR:
            return state
        default:
            return state
    }
}
export default errorAuth;