import {createStore} from 'redux';

const initialState = {
    name: '',
    address: '',
    city: '',
    state: '',
    zipcode: 0
}

export const ADD_NAME = 'ADD_NAME';
export const ADD_ADDRESS = 'ADD_ADDRESS';
export const ADD_CITY = 'ADD_CITY';
export const ADD_STATE = 'ADD_STATE';
export const ADD_ZIPCODE = 'ADD_ZIPCODE';


function reducer (state = initialState, action){
    const{type, payload} = action;

    switch(type){
        case ADD_NAME:
            const addName = [...state.name, payload]
            return {
              ...state,
              name: addName
            }
        case ADD_ADDRESS:
            const addAddress = [...state.address, payload]
            return {
              ...state,
              name: addAddress
            }  
        case ADD_CITY:
            const addCity = [...state.city, payload]
            return {
              ...state,
              name: addCity
            }  
         case ADD_STATE:
            const addCity = [...state.state, payload]
            return {
              ...state,
              name: addState
            } 
         case ADD_ZIPCODE:
            const addZipcode = [...state.zipcode, payload]
            return {
              ...state,
              name: addZipcode
            }  

    }


}

export default createStore(reducer);