import { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import 'material-symbols';

import debouncer from "../utils/debouncer";
import filterPostOffices from "../utils/filterPostOffices";
import PostOfficeCard from "../components/PostOfficeCard";
import '../styles/PostOffices.css'


let debouncedSearch = null;

export default function PostOFfices() {

    const data = useSelector(state => state.data);
    const {postOfficeList, message, pincode} = data;

    const [list, setList] = useState(filterPostOffices(postOfficeList, ''));

    useEffect(()=>{
        debouncedSearch = debouncer((query)=> {

            setList(filterPostOffices(postOfficeList, query));
        }, 300)

    }, [])

    useEffect(()=>{
        
        setList(filterPostOffices(postOfficeList, ''))

    }, [postOfficeList])

    // console.log(data, list);

    function onChangeHandler(e) {
        const query = e.target.value;

        debouncedSearch(query);
    }

    return (
        <div className="post-offices-container">
            <header>

                <h2 className="pincode-container">Pincode: {pincode}</h2>
                <div className="message-container"><b>Message: </b>{message}</div>

                <div className="input-container">
                    <span className="search-icon material-symbols-outlined">search</span>
                    <input
                        onChange={(e) => onChangeHandler(e)}
                        type="text"
                        className="post-office-input" />
                </div>
            </header>

            <div className="post-offices-cards-container">
                {
                    list.length > 0 && list.map( item => <PostOfficeCard key={item.Name} postOffice={item}/> )
                }
            </div>
        </div>
    )
}