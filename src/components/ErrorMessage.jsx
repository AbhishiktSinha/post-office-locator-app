import { useEffect } from 'react';
import { useSelector, useDispatch } from "react-redux";
import { ActionTypes } from "../redux/actionTypes";
import '../styles/ErrorMessage.css'

const {REVERT_STATUS} = ActionTypes;

let timerId = null;

export default function ErrorMessage() {
    
    const error = useSelector( state => state.error );
    const dispatch = useDispatch();

    console.log(error);

    useEffect(()=>{
        
        timerId = setTimeout(()=>{            
            dispatch({ type: REVERT_STATUS })
        }, 1800)

    }, [])

    return (
        <div className="error-backdrop">
            <div className="error-card">
                <p>Error!</p>
                <p>{error}</p>                
            </div>
        </div>
    )
}

