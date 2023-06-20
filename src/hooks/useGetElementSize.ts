import { useState, useEffect, useRef } from 'react';

interface useElementSize {
    trigger: any;
}

const useElementSize = <T extends HTMLElement>({ trigger }: useElementSize) => {

    const targetRef = useRef<T>(null);
    const [size, setSize] = useState<{ width: number, height: number }>({ width: 0, height: 0 });
    useEffect(() => {
        if(targetRef.current) {
            setSize({
                width: targetRef.current.offsetWidth - 1 || 0,
                height: targetRef.current.offsetHeight - 1 || 0,
            })
        }
    }, [targetRef.current, trigger]);

    return {
        targetRef,
        size
    };
}

export default useElementSize;