import React, { createContext, useState } from 'react'

export const AppContext = createContext()

const AppContextProvider = (props) => {

    const [token, setToken] = useState(null)

    const backendUrl = import.meta.env.VITE_BACKEND_URL

    const value = {backendUrl, token, setToken}

    return (
        <AppContext.Provider value={value}>
            {props.children}
        </AppContext.Provider>
    )
}

export default AppContextProvider