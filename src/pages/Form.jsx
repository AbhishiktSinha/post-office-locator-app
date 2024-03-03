import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

import { ActionTypes } from "../redux/actionTypes.js";
import validatePincode from "../utils/validatePincode.js";
import Loader from "../components/Loader.jsx";
import ErrorMessage from '../components/ErrorMessage.jsx'
import '../styles/Form.css'



const {FETCH_POSTAL_DATA, SET_ERROR} = ActionTypes;

export default function Form() {

    const dispatch = useDispatch();
    const appStatus = useSelector(state => state.status);    
    
    const navigate = useNavigate();

    const[input, setInput] = useState('');
    const[status, setStatus] = useState('VALID');

    useEffect(()=>{                

        if (input.length != 0) {

            setStatus(validatePincode(input))
        }
        else {
            setStatus('VALID');
        }

    }, [input])    

    useEffect(()=>{
        if (appStatus === 'success') {
            navigate('../post-offices')
        }
    }, [appStatus])

    function onChangeHandler(e) {
        const value = e.target.value;
        setInput(value);
    }

    function onSubmitHandler(e) {
        e.preventDefault();        

        if (validatePincode(input) === 'VALID') {

            dispatch({type: FETCH_POSTAL_DATA, payload: input})
        }
        else {
            dispatch( {type: SET_ERROR, payload: validatePincode(input) });
        }

    }

    return (
        <>
        {
            appStatus === 'loading' && <Loader/>
        }
        {
            appStatus === 'error' && <ErrorMessage />
        }
        <div className="form-container">
            <form 
                onSubmit={e=>onSubmitHandler(e)}
                className="pincode-form">
                    <div className="input-container">

                        <label htmlFor="pincode-input">Enter Pincode</label>
                        <input
                            type="text"
                            id="pincode-input"
                            placeholder="Pincode"
                            value={input}
                            onChange={onChangeHandler}
                        />

                        <p
                            className="input-status"
                            style={{
                                ...(status === 'VALID' &&
                                    { display: 'none' }
                                )
                            }}>{status}</p>

                    </div>
                    <button>Lookup</button>
                </form>
        </div>
        </>
    )
}