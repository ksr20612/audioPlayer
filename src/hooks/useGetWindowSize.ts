import { useState, useEffect, useCallback } from 'react';
import debounce from "lodash.debounce";

const useGetWindowSize = () => {

    const [size, setSize] = useState({
        width: window.innerWidth,
        height: window.innerHeight
    })
    const handleResize = useCallback(() => {
        setSize({
            width: window.innerWidth,
            height: window.innerHeight
        });
    }, []);

    useEffect(()=>{
        window.addEventListener("resize", debounce(handleResize, 500));
        return ()=>window.removeEventListener("resize", debounce(handleResize, 500));
    }, [])

    return {
        size
    };
}

export default useGetWindowSize;