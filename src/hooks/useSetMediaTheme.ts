import { useState, useEffect, useCallback } from 'react';
import { ThemeState } from 'types/ThemeState';

const useSetMediaTheme = () => {

    const [theme, setTheme] = useState<ThemeState>(ThemeState.LIGHT);
    const handleMode = useCallback((e: MediaQueryListEvent) => {
        const theme = e.matches ? ThemeState.DARK : ThemeState.LIGHT;
        setTheme(theme);
    }, []);
    
    useEffect(() => {
        window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', handleMode);
        return () => window.matchMedia('(prefers-color-scheme: dark)').removeEventListener('change', handleMode);
    }, []);

    return {
        theme
    };
}

export default useSetMediaTheme;