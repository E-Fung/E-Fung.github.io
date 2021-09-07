import React, { useState, createContext, useContext } from 'react';

export const useAppContext = (): any => useContext(AppContext);

export const AppContext = createContext({});

export const AppContextProvider: React.FC = ({ children }) => {
  const [currType, setCurrType] = useState('none');

  return <AppContext.Provider value={{ currType, setCurrType }}>{children}</AppContext.Provider>;
};
