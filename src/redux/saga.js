import {put, takeEvery} from 'redux-saga/effects';

import request from '../network/request'
import {endpoints} from '../network/endpoints';

import { ActionTypes } from './actionTypes';
import { useNavigate } from 'react-router-dom';


const {pincodeUrl: baseUrl} = endpoints;
const { FETCH_POSTAL_DATA, FETCH_REQUEST_STARTED, FETCH_SUCCESS, FETCH_ERROR } = ActionTypes;

export default function* postalSaga() {
    yield takeEvery(FETCH_POSTAL_DATA, fetchPostalData);
}

function* fetchPostalData(action) {

    console.log(action);
    const {type, payload: pincode} = action;

    yield put( {type: FETCH_REQUEST_STARTED} );

    const httpConfig = {
        url: `${baseUrl}/${pincode}`
    }
    
    
    try {
        
        const {data, error} = yield request(httpConfig);

        if (data[0].Status === 'Error') {
            throw new Error( data[0].Message );
        }
        if (error) {
            throw new Error( error );
        }

        
        console.log(data[0].Message, data[0].PostOffice);
        yield put( { type: FETCH_SUCCESS, payload: {
            pincode: pincode,
            message: data[0].Message,
            postOfficeList: data[0].PostOffice
        } } );

    }
    catch (error) {
        
        console.log(error);
        yield put( { type: FETCH_ERROR, payload: error.message } );
    }    
}