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
  const [modalInfo, setModalInfo] = useState({});
  const [open, setOpen] = useState(false);


  return (
    <GlobalContext.Provider
      value={{
        refresh,
        setRefresh,
        modalInfo,
        setModalInfo,
        open,
        setOpen
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};

export const useGlobalContext = () => useContext(GlobalContext);
