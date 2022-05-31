import { GET_PLANET_FAIL, GET_PLANET_SUCCESS,  } from "../constants";

export const getPlanetSuccess=(payload)=>(
    {type:GET_PLANET_SUCCESS, payload}
)
export const getPlanetFail=()=>({type:GET_PLANET_FAIL})
