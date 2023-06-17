import React, { ReactElement, useState, useEffect, useCallback, useRef } from 'react';

const useElementSize = <T extends HTMLElement>() => {

    const targetRef = useRef<T>(null);
    const [size, setSize] = useState<{ width: number, height: number }>({ width: 0, height: 0 });
    useEffect(() => {
        if(targetRef.current) {
            setSize({
                width: targetRef.current.offsetWidth - 1 || 0,
                height: targetRef.current.offsetHeight - 1 || 0,
            })
        }
    }, [targetRef.current]);

    return {
        targetRef,
        size
    };
}

export default useElementSize;