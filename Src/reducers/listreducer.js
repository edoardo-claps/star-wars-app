import { INSERT_LIST, INSERT_LIST_FAIL, SEARCH, EMPTY_SEARCH, FILTER_BY_NAME, REMOVE_LIST } from "../actions/constants"


const initialState={
    list:[],
    error:null,
    find:[]
}
const listReducer=(state=initialState, action)=>{
    console.log(action)
    switch(action.type){
        case INSERT_LIST:
            return{
                ...state,
                list:[...state.list,{...action.payload}]
            }
        case INSERT_LIST_FAIL:
            return{
                ...state,
                error:action.payload
            }
        case SEARCH:
                 return{
                    ...state,
                    find:[...state.find,action.value]
                }
        case EMPTY_SEARCH:
            return{
                ...state,
                find:[]
            }
           case FILTER_BY_NAME:
               return{
                   ...state,
                   list:action.payload
               }
        
        case REMOVE_LIST:
            console.log(action.index)
            let a =state.list.slice(0 , action.index)
            let b =state.list.slice(action.index+1) 
            console.log("a",a , "b", b)
            return{
                ...state,
                list:a.concat(b)
            }
        default:
            return state
    }
}
export default listReducer;