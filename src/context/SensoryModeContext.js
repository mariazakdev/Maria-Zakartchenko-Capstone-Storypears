import { createContext, useState, useContext } from "react";

const SensoryModeContext = createContext();

export function SensoryModeProvider({children}) {
    const [isSensoryModeEnabled, setIsSensoryModeEnabled] = useState(false);

    return(
        <SensoryModeContext.Provider value={{ isSensoryModeEnabled, setIsSensoryModeEnabled }}>
            {children}
</SensoryModeContext.Provider>
        );
} 

export function useSensoryMode() {
    return useContext(SensoryModeContext)
}

