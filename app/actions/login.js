import axios from 'axios';

export function subLogin(){
    return (dispatch) =>{
        dispatch({
            type:"GROUP_VAR",
        })
    }
} 


export function subGroup(){
    return (dispatch) =>{
        dispatch({
            type:"LOGIN_FULFILLED",
        })
    }
} 