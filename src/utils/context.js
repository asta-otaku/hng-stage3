import React, { createContext, useState } from "react";

const MetaMaskContent = createContext();

const ContextProvider = ({ children }) => {
  const [displayMeta, setDisplayMeta] = useState(false);

  return (
    <MetaMaskContent.Provider value={{ displayMeta, setDisplayMeta }}>
      {children}
    </MetaMaskContent.Provider>
  );
};

export { MetaMaskContent, ContextProvider };
