"use client";

import { ReactNode } from "react";

const { createContext, useState, useContext } = require("react");

const GlobalContext = createContext();

interface GlobalContextProviderProps {
  children: ReactNode;
}

export const GlobalContextProvider = ({
  children,
}: GlobalContextProviderProps) => {
  const [refresh, setRefresh] = useState(false);
  const [cartInfo, setCartInfo] = useState([]);

  return (
    <GlobalContext.Provider
      value={{
        refresh,
        setRefresh,
        cartInfo,
        setCartInfo,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};

export const useGlobalContext = () => useContext(GlobalContext);
