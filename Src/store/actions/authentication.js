import { LOGIN, LOGOUT } from "./constants";
import 'react-redux'

export const login =(payload)=>( 
     {type:LOGIN, payload:payload } 
)