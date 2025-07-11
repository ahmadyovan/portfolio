'use client'

import { usePathname} from 'next/navigation';
import { createContext, useContext, useEffect, useState, useCallback, useMemo } from 'react';

type ThemeContextType = {
    color: string;
    changeColor: () => void;
};

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export const ThemeProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    const [color, setColor] = useState<string>('#008CFF');
    const pathname = usePathname();

    const colors = useMemo(() => ['#008CFF'], []);

    // Buat getRandomColor sebagai callback agar tetap stabil
    const getRandomColor = useCallback(() => {
        const randomIndex = Math.floor(Math.random() * colors.length);
        return colors[randomIndex];
    }, [colors]);

    // changeColor juga sebagai callback
    const changeColor = useCallback(() => {
        setColor(getRandomColor());
    }, [getRandomColor]);

    useEffect(() => {
        changeColor();
    }, [pathname, changeColor]);

    return (
        <ThemeContext.Provider value={{ color, changeColor }}>
            {children}
        </ThemeContext.Provider>
    );
};

export const useTheme = () => {
    const context = useContext(ThemeContext);
    if (!context) throw new Error('useTheme must be used within a ThemeProvider');
    return context;
};
