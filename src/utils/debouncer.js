export default function debouncer(fn, delay) {

    let timerId = null;
    
    return (...restArgs)=> {

        if (timerId) {
            clearTimeout(timerId);
        }

        timerId = setTimeout(()=>{                        
            fn(...restArgs);
        }, delay)
    }
}