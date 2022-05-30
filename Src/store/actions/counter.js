      import {COUNTER_INCREMENT,COUNTER_SET, } from "./constants"

export const increment = () => {
    return {
      type: COUNTER_INCREMENT,
    };
  };
  
  export const set = number => {
    return {
      type: COUNTER_SET,
      payload: number,
    };
  };