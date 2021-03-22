import {useEffect} from 'react';

export const use_outside_alerter = (ref, cb)=>{
    useEffect(()=>{
        const handle_click = event=>{
            if (ref.current && !ref.current.contains(event.target))
                cb(event);
        };
        document.addEventListener('mousedown', handle_click);
        return ()=>{
            document.removeEventListener('mousedown', handle_click);
        };
    }, [ref]);
};
