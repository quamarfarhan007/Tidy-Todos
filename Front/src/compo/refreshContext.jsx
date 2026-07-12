import { useState } from "react";
import { createContext } from "react";

export const RefreshContext = createContext()

export const RefreshProvider = function({children}){
    const [refreshTrigger,setRefreshTrigger] = useState(false)

    const triggerRefresh = function(){
        setRefreshTrigger(prev=>!prev)
    }

    return <RefreshContext.Provider value={{
        refreshTrigger:refreshTrigger,
        triggerRefresh:triggerRefresh
    }} >
        {children}
    </RefreshContext.Provider>
}