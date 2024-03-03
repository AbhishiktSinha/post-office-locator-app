import { ActionTypes } from "./actionTypes";

const { FETCH_REQUEST_STARTED, FETCH_SUCCESS, FETCH_ERROR, REVERT_STATUS, SET_ERROR } = ActionTypes;

const initialState = {
    status: 'init',
    data: {
        pincode: '',
        message: '',
        postOfficeList: []
    }, 
    error: ''
}

export default function postalReducer(state=initialState, action) {
    const {type, payload} = action;    

    switch(type) {

        case REVERT_STATUS :
            return {
                ...state,
                ...initialState
            }

        case SET_ERROR :
            return {
                ...state,
                status: 'error',
                error: payload,
            }

        case FETCH_REQUEST_STARTED :
            return {
                ...state,
                status: 'loading'
            }

        case FETCH_SUCCESS :            
            return {
                ...state,
                status: 'success',
                data: {
                    pincode: payload.pincode,
                    message: payload.message,
                    postOfficeList: payload.postOfficeList,
                },
                error: '',
            }
        
        case FETCH_ERROR :
            return {
                ...state,
                status: 'error',
                error: payload,
            }

        default :
            return state;
    }
}