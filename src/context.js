import React, { Component, useContext, useState } from 'react';

const AppContext = React.createContext();

const AppProvider = ( {children} ) => {
    const [episodes, setEpisodes] = useState([]);

    return (
        <AppContext.Provider value={{episodes}}>
            {children}
        </AppContext.Provider>
    )
}

export const useGlobalContext = () => {
    return useContext(AppContext);
}

export {AppContext, AppProvider};