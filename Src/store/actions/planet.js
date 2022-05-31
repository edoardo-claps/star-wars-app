import { GET_PLANET_FAIL, GET_PLANET_SUCCESS,GET_PLANET  } from "../constants";

export const getPlanetSuccess=(payload)=>(
    {type:GET_PLANET_SUCCESS, payload}
)
export const getPlanetFail=()=>({type:GET_PLANET_FAIL})
export const getPlanet=()=>({type:GET_PLANET})
