import { createContext, useContext, useState } from "react";


const StateContext = createContext();

export const DispatcherProvider = ({ children }) => {
  const [isLinkVisible, setLinkVisibility] = useState(false);
  const [isFormVisible, setFormVisibility] = useState(false);

  const contextValue = {
    isLinkVisible,
    setLinkVisibility,
    isFormVisible,
    setFormVisibility,
  };

  return (
    <StateContext.Provider value={contextValue}>
      {children}
    </StateContext.Provider>
  );
};

export const useStateContext = () => {
  const context = useContext(StateContext);
  if (!context) {
    throw new Error("useStateContext must be used within a DispatcherProvider");
  }
  return context;
};
