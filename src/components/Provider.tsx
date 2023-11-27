"use client";

import { createContext, useState, ReactNode } from 'react';

export const AppContext = createContext({});

export default function AppProvider({ children }: { children: ReactNode }) {
    const darkMode = useState(true);
    return (
        <AppContext.Provider value={{ darkMode }} >
            {children}
        </AppContext.Provider>
    )
}