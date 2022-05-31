import * as constants from "../constants";
import 'react-redux'
import AsyncStorage from '@react-native-async-storage/async-storage';

export const setLoadingLogin=(payload)=>({type:constants.SET_LOADING_LOGIN, payload})
export const setLoginError=(payload)=>({type:constants.SET_LOGIN_ERROR, payload})

let timer;
/**
 * save data in the permanent store in the device
 * @param object to save
 *  */
 const storeData = async (expire, userId, token) => {
    try {
      const jsonValue = JSON.stringify({expire, userId, token});
      await AsyncStorage.setItem('userData', jsonValue);
    } catch (e) {
     
      throw e;
    }
  };
  /**
   * Clears the timer to autologout when the token is invalid
   */
  const clearTimer = () => {
    if (timer) {
      clearTimeout(timer);
    }
  };


export const fetchForSingup=(payload)=>{

return async (dispatch,_)=>{
    const body = JSON.stringify({
        email: payload.email,
        password: payload.password,
        returnSecureToken: true,
      });
      try{ 
      const response = await fetch(
        'https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyBsfUy-Dp3-M0QHhMgZGdhsWnsatPnJ4rw',
        {
          method: 'POST',
          headers: {'Content-Type': 'application/json'},
          body: body,
        },
      );
      dispatch(setLoadingLogin(false))
        const data=await response.json()

        if(!response.ok){

            throw new Error(data.error.message)
        }
        else(
            dispatch(login(data))
        )
  }catch(e){
    dispatch(setLoginError(e.message))

  }
}
}



  export const fetchForLogin= (payload) => {
return async (dispatch,_)=>{

    dispatch(setLoadingLogin(true))
    try {
        const body = JSON.stringify({
          email: payload.email,
          password: payload.password,
          returnSecureToken: true,
        });
        //TODO:axios
        const response = await fetch(
          'https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyBsfUy-Dp3-M0QHhMgZGdhsWnsatPnJ4rw',
          {
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            body: body,
          },
        );
        dispatch(setLoadingLogin(false))
        const data=await response.json()

        if(!response.ok){

            throw new Error(data.error.message)
        }
        else(
            dispatch(login(data))
        )
  }catch(e){
      
    dispatch(setLoginError(e.message))

  }
}}
  
  export const login = data => {
    return (dispatch, _) => {
    dispatch(
      authentication(data.localId, data.idToken, parseInt(data.expiresIn) * 1000),
    );
    const expirationDate = new Date(
      new Date().getTime() + parseInt(data.expiresIn) * 1000,
    );
    storeData(expirationDate.toISOString(), data.localId, data.idToken);
   
  };
  }
  
  export const authentication = (userId, token, expire) => {
    return (dispatch, _) => {
      dispatch({type: constants.LOGIN, userId: userId, token: token});
      dispatch(setTimerLogout(expire));
    };
  };
  
  export const logout = () => {
    return async (dispatch, _) => {
      clearTimer();
      await AsyncStorage.removeItem('userData');
      dispatch({type: constants.LOGOUT});
    };
  };
  
  const setTimerLogout = expirationDate => {
    return (dispatch, _) => {
      timer = setTimeout(() => {
        dispatch(logout());
      }, expirationDate);
    };
  };
  