import { GET_PLANET_FAIL, GET_PLANET_SUCCESS } from "../actions/constants";


const initialstate={
    data:null,
    error:""
}

const planetReducer=(state=initialstate, action)=>{
  
    switch(action.type){
        
        case GET_PLANET_SUCCESS:
            return{
                ...state,
                data: action.payload,
                
            }
        case GET_PLANET_FAIL:
            return{
                ...state,
                error: action.payload
            }

        default :
        return state;
    }

}
export default planetReducer;