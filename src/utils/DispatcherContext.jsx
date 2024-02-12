import { createContext, useContext, useState } from "react";


const StateContext = createContext();

export const DispatcherProvider = ({ children }) => {
  const [isButtonVisible, setButtonVisibility] = useState(false);
  const [isFormVisible, setFormVisibility] = useState(false);

  const contextValue = {
    isButtonVisible,
    setButtonVisibility,
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
