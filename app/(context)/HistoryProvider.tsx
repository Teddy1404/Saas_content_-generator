// contexts/HistoryProvider.tsx
"use client"
import React, { createContext, useState, useContext, ReactNode } from 'react';

interface HistoryContextType {
    historyData: any[];
    setHistoryData: (data: any[]) => void;
}

const HistoryContext = createContext<HistoryContextType | undefined>(undefined);

export const useHistoryContext = () => {
    const context = useContext(HistoryContext);
    if (!context) {
        throw new Error('useHistoryContext must be used within a HistoryProvider');
    }
    return context;
};

export const HistoryProvider = ({ children }: { children: ReactNode }) => {
    const [historyData, setHistoryData] = useState<any[]>([]);

    return (
        <HistoryContext.Provider value={{ historyData, setHistoryData }}>
            {children}
        </HistoryContext.Provider>
    );
};
